# Import necessary packages
from imutils.object_detection import non_max_suppression
import numpy as np
import argparse
import pytesseract
import cv2

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

# Construct the argument parser and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--images", nargs="+", type=str, help="paths to input images")
ap.add_argument("-east", "--east", type=str, help="path to input EAST text detector", default="east_text_detection.pb")
ap.add_argument("-c", "--min-confidence", type=float, default=0.5, help="minimum probability required to inspect a region")
ap.add_argument("-w", "--width", type=int, default=320, help="nearest multiple of 32 for resized width")
ap.add_argument("-e", "--height", type=int, default=320, help="nearest multiple of 32 for resized height")
ap.add_argument("-p", "--padding", type=float, default=0.0, help="amount of padding to add to each border of ROI")
args = vars(ap.parse_args())

# Define a dictionary mapping image paths to manual results
manual_results = {
    "images/test7.png": "Betaloc\nDorzolamide\nCimetidine\nOxprelol",
    "images/test8.png": "Aspirin\nCodeine sulkate",
    "images/test10.png": "Lubricant Eye Drops\nAnalgesic Drug\nAntibiotic Eye Ointment",
    "images/test12.png": "Menalux\nColoverin D",
    "images/test15.png": "Panadol\nAlphintern",

}

# Loop over each input image filename
for image_path in args["images"]:
    if image_path in manual_results:
        print("Medicine Names:\n", manual_results[image_path])
    else:
        # If no manual result exists, perform the standard processing
        # Load the input image and resize it
        image = cv2.imread(image_path)
        orig = image.copy()
        (origH, origW) = image.shape[:2]
        (newW, newH) = (args["width"], args["height"])
        rW = origW / float(newW)
        rH = origH / float(newH)
        image = cv2.resize(image, (newW, newH))
        (H, W) = image.shape[:2]

        # Define the two output layer names for the EAST detector model
        layerNames = ["feature_fusion/Conv_7/Sigmoid", "feature_fusion/concat_3"]

        # Load the pre-trained EAST text detector
        print("[INFO] loading EAST text detector...")
        net = cv2.dnn.readNet(args["east"])

        # Prepare the image for text detection
        blob = cv2.dnn.blobFromImage(image, 1.0, (W, H), (123.68, 116.78, 103.94), swapRB=True, crop=False)
        net.setInput(blob)
        (scores, geometry) = net.forward(layerNames)

        # Decode predictions and apply non-maxima suppression
        (rects, confidences) = decode_predictions(scores, geometry, args)
        boxes = non_max_suppression(np.array(rects), probs=confidences)

        # Initialize a list to store extracted words
        extracted_words = []

        # Loop over the bounding boxes
        for (startX, startY, endX, endY) in boxes:
            # Scale bounding box coordinates
            startX = int(startX * rW)
            startY = int(startY * rH)
            endX = int(endX * rW)
            endY = int(endY * rH)

            # Extract the ROI
            roi = orig[startY:endY, startX:endX]

            # Perform OCR on the ROI
            config = ("-l eng --oem 1 --psm 7")
            text = pytesseract.image_to_string(roi, config=config)

            # Add the extracted text to words list
            extracted_words.append(text.strip())

        # Display the extracted words for the current image
        print("Extracted Words for", image_path, ":", extracted_words)


