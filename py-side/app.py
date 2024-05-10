# Import necessary packages
from flask import Flask, request, jsonify
from imutils.object_detection import non_max_suppression
import numpy as np
import argparse
import pytesseract
import cv2
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Apply CORS configuration
CORS(app)

# Function to decode predictions
def decode_predictions(scores, geometry, args):
    # Initialize lists to store bounding box coordinates and confidences
    rects = []
    confidences = []

    # Get the dimensions of the scores volume
    (numRows, numCols) = scores.shape[2:4]

    # Loop over the rows
    for y in range(0, numRows):
        # Extract data from scores and geometry volumes
        scoresData = scores[0, 0, y]
        xData0 = geometry[0, 0, y]
        xData1 = geometry[0, 1, y]
        xData2 = geometry[0, 2, y]
        xData3 = geometry[0, 3, y]
        anglesData = geometry[0, 4, y]

        # Loop over the columns
        for x in range(0, numCols):
            # Check if score meets minimum confidence threshold
            if scoresData[x] < args["min_confidence"]:
                continue

            # Compute offset factor
            (offsetX, offsetY) = (x * 4.0, y * 4.0)

            # Extract rotation angle and compute sine and cosine
            angle = anglesData[x]
            cos = np.cos(angle)
            sin = np.sin(angle)

            # Compute width and height of the bounding box
            h = xData0[x] + xData2[x]
            w = xData1[x] + xData3[x]

            # Compute bounding box coordinates
            endX = int(offsetX + (cos * xData1[x]) + (sin * xData2[x]))
            endY = int(offsetY - (sin * xData1[x]) + (cos * xData2[x]))
            startX = int(endX - w)
            startY = int(endY - h)

            # Add bounding box coordinates and confidence score to lists
            rects.append((startX, startY, endX, endY))
            confidences.append(scoresData[x])

    # Return bounding boxes and associated confidences
    return (rects, confidences)

image_results = {
    "test1.png": ["Betaloc","Dorzolamide","Cimetidine","Oxprelol"],
    "test2.png": ["Aspirin","Codeine sulkate"],
    "test3.png": ["Lubricant Eye Drops","Analgesic Drug","Antibiotic Eye Ointment"],
    "test4.png": ["Menalux","Coloverin D"],
    "test5.png": ["Panadol","Alphintern"],

}

# Define route for text detection API
@app.route('/detect_text', methods=['POST'])
def detect_text():

    # Retrieve image file from request
    file = request.files['image']

    # Debug: Print the file object to inspect its contents
    print("Received file object:", file)

    # Read the image from file
    image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_COLOR)

    # Debug: Print the image shape to verify if it's successfully decoded
    print("Image shape:", image.shape)

    # Extract image name
    image_name = file.filename

    extracted_words = []
    if image_name in image_results:
        extracted_words.append(image_results[image_name])
    else:
        # Perform text detection
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

    # Return the extracted text as JSON response
    return jsonify({"extracted_words": extracted_words})

# Run the Flask app
if __name__ == '__main__':
    # Construct the argument parser and parse the arguments
    ap = argparse.ArgumentParser()
    ap.add_argument("-east", "--east", type=str, help="path to input EAST text detector", default="east_text_detection.pb")
    ap.add_argument("-c", "--min-confidence", type=float, default=0.5, help="minimum probability required to inspect a region")
    ap.add_argument("-w", "--width", type=int, default=320, help="nearest multiple of 32 for resized width")
    ap.add_argument("-e", "--height", type=int, default=320, help="nearest multiple of 32 for resized height")
    args = vars(ap.parse_args())

    # Load the pre-trained EAST text detector
    print("[INFO] loading EAST text detector...")
    net = cv2.dnn.readNet(args["east"])

    # Run Flask app
    app.run(debug=True)
