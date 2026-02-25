// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Home";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import UploadXray from "./UploadXray";
import UploadCTScan from "./UploadCTscan";
import Resources from "./Resources";
import Profile from "./Profile";
import EditProfile from "./editprofile";
import Settings from "./Settings";
import History from "./history";
import Doctor from "./Doctor";
import Lungs from "./lungs";
import Results from "./Results";
import Voice from "./Voice";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<UploadXray />} />
          <Route path="/upload-ct" element={<UploadCTScan />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/lungs" element={<Lungs />} />
          <Route path="/results" element={<Results />} />
          <Route path="/voice" element={<Voice />} />
        </Routes>
      </Router>

      {/* ✅ Toast notifications */}
      <Toaster position="top-center" />
    </>
  );
}
