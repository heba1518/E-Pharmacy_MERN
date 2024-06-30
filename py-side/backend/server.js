const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8000;

// Multer configuration for handling file uploads
const upload = multer({ dest: "uploads/" });

// Route for handling image uploads
app.post("/detect_text", upload.single("image"), async (req, res) => {
  try {
    // Read the uploaded image file
    const imageData = fs.readFileSync(req.file.path);

    // Forward the uploaded image to the Flask API for text detection
    const formData = new FormData();
    formData.append("image", imageData, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const flaskResponse = await axios.post(
      "http://localhost:5000/detect_text",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    // Extract the text and image data from the Flask API response
    const { extracted_words, image } = flaskResponse.data;

    // Return the text detected by the Flask API and the uploaded image
    res.json({
      extracted_words,
      image,
    });
  } catch (error) {
    console.error("Error processing image:", error);
    res
      .status(500)
      .send({ error: "An error occurred while processing the image" });
  } finally {
    // Clean up the uploaded file
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error("Error deleting uploaded file:", err);
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
