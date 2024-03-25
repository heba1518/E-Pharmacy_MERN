import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import './picture.css';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (files) => {
    setSelectedFile(files[0]);
  };

  return (
    <div className="image-uploader">
      <Dropzone onDrop={handleFileSelect}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="selected-image"
              />
            ) : (
              <div className="upload-message">
                <p>Drag and drop an image here or click to browse</p>
                <span>+</span>
              </div>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default ImageUploader;