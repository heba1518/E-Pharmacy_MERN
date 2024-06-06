const express = require("express");
const multer = require("multer");
const axios = require("axios");

const router = express.Router();

// Multer configuration for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Route for handling image uploads
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    // Forward the uploaded image to the Flask API for text detection
    const formData = new FormData();
    formData.append('image', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const response = await axios.post('http://localhost:5000/detect_text', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    // Return the text detected by the Flask API
    res.json(response.data);
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'An error occurred while processing the image' });
  }
});

module.exports = router;
