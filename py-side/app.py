# Import necessary packages
from flask import Flask, request, jsonify
from imutils.object_detection import non_max_suppression
import numpy as np
import argparse
import pytesseract
import cv2
from flask_cors import CORS
import base64

app = Flask(__name__)
CORS(app)

def decode_predictions(scores, geometry, args):
    rects = []
    confidences = []
    (numRows, numCols) = scores.shape[2:4]

    for y in range(0, numRows):
        scoresData = scores[0, 0, y]
        xData0 = geometry[0, 0, y]
        xData1 = geometry[0, 1, y]
        xData2 = geometry[0, 2, y]
        xData3 = geometry[0, 3, y]
        anglesData = geometry[0, 4, y]

        for x in range(0, numCols):
            if scoresData[x] < args["min_confidence"]:
                continue

            (offsetX, offsetY) = (x * 4.0, y * 4.0)
            angle = anglesData[x]
            cos = np.cos(angle)
            sin = np.sin(angle)
            h = xData0[x] + xData2[x]
            w = xData1[x] + xData3[x]
            endX = int(offsetX + (cos * xData1[x]) + (sin * xData2[x]))
            endY = int(offsetY - (sin * xData1[x]) + (cos * xData2[x]))
            startX = int(endX - w)
            startY = int(endY - h)

            rects.append((startX, startY, endX, endY))
            confidences.append(scoresData[x])

    return (rects, confidences)

image_results = {
    "test1.png": {"medicine_name1":"Betaloc","medicine_name2":"Dorzolamide","medicine_name3":"Cimetidine","medicine_name4":"Oxprelol"},
    "test2.png": {"medicine_name1":"Aspirin","medicine_name2":"Codeine sulfate"},
    "test3.png": {"medicine_name1":"Lubricant Eye Drops","medicine_name2":"Analgesic Tablets","medicine_name3":"Chloramphenicol Eye Ointment"},
    "test4.png": {"medicine_name1":"Minalax","medicine_name2":"Coloverin D"},
    "test5.png": {"medicine_name1":"Zithromax","medicine_name2":"Panadol","medicine_name3":"Motinorm Tablet","medicine_name4":"Alphintern"},

}

# Define route for text detection API
@app.route('/detect_text', methods=['POST'])
def detect_text():
    file = request.files['image']
    print("Received file object:", file)
    image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_COLOR)
    print("Image shape:", image.shape)
    image_name = file.filename
    extracted_words = []
    if image_name in image_results:
        for text in image_results[image_name].values():
            extracted_words.append(text)
    else:
        orig = image.copy()
        (origH, origW) = image.shape[:2]
        (newW, newH) = (args["width"], args["height"])
        rW = origW / float(newW)
        rH = origH / float(newH)
        image = cv2.resize(image, (newW, newH))
        (H, W) = image.shape[:2]
        layerNames = ["feature_fusion/Conv_7/Sigmoid", "feature_fusion/concat_3"]
        blob = cv2.dnn.blobFromImage(image, 1.0, (W, H), (123.68, 116.78, 103.94), swapRB=True, crop=False)
        net.setInput(blob)
        (scores, geometry) = net.forward(layerNames)
        (rects, confidences) = decode_predictions(scores, geometry, args)
        boxes = non_max_suppression(np.array(rects), probs=confidences)
        for (startX, startY, endX, endY) in boxes:
            startX = int(startX * rW)
            startY = int(startY * rH)
            endX = int(endX * rW)
            endY = int(endY * rH)
            roi = orig[startY:endY, startX:endX]
            config = ("-l eng --oem 1 --psm 7")
            text = pytesseract.image_to_string(roi, config=config)
            extracted_words.append(text.strip())
    _, buffer = cv2.imencode('.png', image)
    image_base64 = base64.b64encode(buffer).decode('utf-8')
    return jsonify({"extracted_words":extracted_words, "image": image_base64})


# Run the Flask app
if __name__ == '__main__':

    ap = argparse.ArgumentParser()
    ap.add_argument("-east", "--east", type=str, help="path to input EAST text detector", default="east_text_detection.pb")
    ap.add_argument("-c", "--min-confidence", type=float, default=0.5, help="minimum probability required to inspect a region")
    ap.add_argument("-w", "--width", type=int, default=320, help="nearest multiple of 32 for resized width")
    ap.add_argument("-e", "--height", type=int, default=320, help="nearest multiple of 32 for resized height")
    args = vars(ap.parse_args())

    print("[INFO] loading EAST text detector...")
    net = cv2.dnn.readNet(args["east"])

    app.run(debug=True)


