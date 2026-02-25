// src/Voice.js
import { useState, useRef } from "react";
import logo from "./assests/logo.png"; // ✅ import logo

export default function Voice() {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    let chunks = [];
    mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      console.log("Voice sample saved:", blob);
    };
    mediaRecorderRef.current.start();
    setRecording(true);

    // Stop after 60 seconds
    setTimeout(() => stopRecording(), 60000);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Logo at the top */}
      <img src={logo} alt="Logo" className="w-32 mb-6" />

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Voice Sample</h2>

      {!recording ? (
        <button 
          onClick={startRecording} 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Start Recording (1 min)
        </button>
      ) : (
        <button 
          onClick={stopRecording} 
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Stop Recording
        </button>
      )}
    </div>
  );
}
