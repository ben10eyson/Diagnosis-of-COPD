// src/UploadXray.js
import React, { useState } from "react";
import Header from "./header";
import { storage, db, auth } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function UploadXray() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file before uploading!");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to upload!");
      return;
    }

    setUploading(true);
    const storageRef = ref(storage, `xray_uploads/${user.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog.toFixed(0));
      },
      (error) => {
        console.error("Upload error:", error);
        alert("Failed to upload file!");
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Store metadata in Firestore
        await addDoc(collection(db, "uploads"), {
          userId: user.uid,
          fileName: file.name,
          fileURL: downloadURL,
          type: "xray",
          createdAt: serverTimestamp(),
        });

        alert("X-ray uploaded successfully!");
        setUploading(false);
        setProgress(0);
        navigate("/results", { state: { imageUrl: downloadURL } });
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="p-6 flex flex-col items-center flex-1">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Upload X-ray</h2>

        {/* File Upload Box */}
        <div className="w-full sm:w-1/2 mt-4 p-6 border-2 border-dashed rounded-lg bg-white text-center shadow-md">
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer text-blue-600 font-medium"
          >
            {file ? file.name : "Choose File"}
          </label>

          {uploading && (
            <div className="mt-3 text-sm text-gray-500">
              Uploading... {progress}%
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="w-full sm:w-1/2 mt-6 flex flex-col space-y-3">
          <button
            onClick={handleUpload}
            disabled={uploading}
            className={`${
              uploading ? "bg-blue-300" : "bg-blue-600"
            } text-white py-2 rounded-lg transition`}
          >
            {uploading ? "Uploading..." : "Analyze X-ray"}
          </button>

          <button
            onClick={() => setFile(null)}
            className="bg-gray-300 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>

        {/* Tips */}
        <div className="mt-8 text-sm text-gray-600 max-w-md text-center">
          <p className="font-semibold">Tips for better results:</p>
          <ul className="list-disc ml-6 text-left">
            <li>Use clear, high-quality images</li>
            <li>Ensure proper lighting and alignment</li>
            <li>Avoid blurry or distorted images</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
