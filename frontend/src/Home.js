// src/Home.js
import { Link } from "react-router-dom";
import Header from "./header";
import {
  FaLungs,
  FaUpload,
  FaStethoscope,
  FaBookOpen,
  FaMicrophone,
  FaXRay,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
      {/* Header with Logo + Profile Menu */}
      <Header />

      {/* Hero Section */}
      <section className="text-center mt-6 px-6">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-2">
          Welcome to PulmoCare
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your AI-Powered Health Diagnostic Platform for COPD & Pneumonia
        </p>
      </section>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 pb-16">
        <FeatureCard
          icon={<FaLungs size={40} className="text-blue-600" />}
          title="Know Your Lungs"
          desc="Check your lung health with AI-powered insights."
          link="/lungs"
        />
        <FeatureCard
          icon={<FaXRay size={40} className="text-green-600" />}
          title="Upload X-ray"
          desc="Analyze your chest X-ray instantly."
          link="/upload"
        />
        <FeatureCard
          icon={<FaUpload size={40} className="text-pink-600" />}
          title="Upload CT Scan"
          desc="Detect disease severity from your CT scan."
          link="/upload-ct"
        />
        <FeatureCard
          icon={<FaStethoscope size={40} className="text-red-600" />}
          title="Consult Doctor"
          desc="Get expert consultation from top doctors."
          link="/doctor"
        />
        <FeatureCard
          icon={<FaBookOpen size={40} className="text-purple-600" />}
          title="Educational Resources"
          desc="Learn more about lung health and care."
          link="/resources"
        />
        <FeatureCard
          icon={<FaMicrophone size={40} className="text-yellow-600" />}
          title="Upload Voice"
          desc="Analyze breathing sounds for potential issues."
          link="/voice"
        />
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PulmoCare | Designed with ❤️ for Health
      </footer>
    </div>
  );
}

/* Reusable Card Component */
function FeatureCard({ icon, title, desc, link }) {
  return (
    <Link to={link}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300">
        {icon}
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{desc}</p>
      </div>
    </Link>
  );
}
