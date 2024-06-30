import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PictureUpload = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    weight: "",
    // phoneNumber: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [extractedText, setExtractedText] = useState("");
  const [image, setImage] = useState('');
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileSelect = (files) => {
    setSelectedFile(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("fullName", formData.fullName);
      formData.append("gender", formData.gender);
      formData.append("age", formData.age);
      formData.append("weight", formData.weight);
      // formData.append("phoneNumber", formData.phoneNumber);

      const response = await axios.post(
        "http://localhost:5000/detect_text",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);

      if (response.data.extracted_words) {
        setExtractedText(JSON.stringify(response.data.extracted_words));
        setImage(`data:image/png;base64,${response.data.image}`);
        setError("");
      } else {
        setError("No text extracted from the image");
        setExtractedText("");
        setImage("");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("An error occurred while processing the image");
      setExtractedText("");
      setImage("");
    }
  };

  const handleText = () => {
    if (extractedText) {
      setError(""); 
      navigate("/Prescription", { state: { extractedWords: extractedText } });
    } else {
      setError("No extracted text available");
    }
  };

  useEffect(() => {
    if (extractedText) {
      navigate("/Prescription", { state: { extractedWords: extractedText } });
    }
  }, [extractedText, navigate]);

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      gender: "",
      age: "",
      weight: "",
      // phoneNumber: "",
      picture: null,
    });
    setSelectedFile(null); 
  };

  return (
    <div
      className="min-h-auto  bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://i.imgur.com/1ZNaBq1.jpg)`,
      }}
    >
      <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="max-w-xl sm:mx-auto sm:text-center lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 mt-16 sm:mx-auto">
              <div className="flex items-center justify-center text-2xl w-16 h-16 text-white rounded-full bg-teal-500">
                <FontAwesomeIcon icon={faCamera} />
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-display text-3xl font-semibold leading-none tracking-normal text-gray-800 sm:text-4xl md:mx-auto">
                Ask Your Pharmacist, <br /> Not the Internet
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                We have made our systems as many simple as we can. You can just
                take a picture of your prescription and send it to us to place
                your order
              </p>
            </div>
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center h-12 px-6 font-sans font-medium tracking-wider transition duration-200 rounded shadow-md bg-teal-500 text-white uppercase hover:bg-teal-700 focus:shadow-outline focus:outline-none"
              >
                Upload Your prescription
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white border px-10 rounded-lg p-6 w-500px">
            <h2 className="text-center text-brand"> </h2>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mt-2 col-4">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="border border-gray-300 px-2 py-1 w-50"
                  required
                />
              </div>
              {/* Gender */}
              <div className="mt-2 col-4">
                <select
                  id="gender"
                  name="gender"
                  type="select"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="border border-gray-300 px-2 py-1"
                  required
                >
                  <option disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {/* Age */}
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Your Age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="border border-gray-300 px-2 py-1"
                  required
                  min="0"
                />
              </div>
              {/* Weight */}
              <div className="mt-2">
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  placeholder="Weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="border border-gray-300 px-2 py-1"
                  required
                  min="0"
                />
              </div>
              {/* Phone Number */}
              {/* <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="border border-gray-300 px-2 py-1"
                  required
                />
              </div> */}
              {/* Upload picture section */}
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5 sm:border-gray-200">
                <label
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  htmlFor="cover-photo"
                >
                  Upload Prescription
                </label>
                <Dropzone onDrop={handleFileSelect}>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      className="dropzone mt-1 sm:mt-0 sm:col-span-2"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {selectedFile ? (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected"
                          className="w-40 h-60"
                        />
                      ) : (
                        <div class="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="space-y-1 text-center">
                            <svg
                              class="w-12 h-12 mx-auto text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <div class="flex text-sm text-gray-600">
                              <p class="relative cursor-pointer font-medium text-teal-400 hover:text-teal-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400">
                                Drag and drop an image here
                              </p>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG, JPEG</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Dropzone>
              </div>

              {/* Submit and Cancel buttons */}
              <div className="flex justify-between mt-2">
                <button
                  className={`inline-block bg-teal-400 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-200`}
                  onClick={handleText}
                >
                  Send
                </button>
                <button
                  type="reset"
                  onClick={() => {
                    handleResetForm();
                    setShowModal(false);
                  }}
                  className="inline-block bg-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PictureUpload;
