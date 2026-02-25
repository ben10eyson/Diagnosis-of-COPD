// src/Doctor.js
import { FaPhone, FaVideo, FaClinicMedical } from "react-icons/fa";
import Header from "./header"; // ✅ import Header component

export default function Doctor() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header with logo and profile dropdown */}
      <Header />

      {/* Main Content */}
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Consult Doctor</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center p-4 bg-blue-100 rounded-lg">
            <FaPhone className="mr-2" /> Appointment via Call
          </button>
          <button className="w-full flex items-center p-4 bg-green-100 rounded-lg">
            <FaVideo className="mr-2" /> Appointment via Video Call
          </button>
          <button className="w-full flex items-center p-4 bg-purple-100 rounded-lg">
            <FaClinicMedical className="mr-2" /> Visit the Clinic
          </button>
        </div>
      </div>
    </div>
  );
}
