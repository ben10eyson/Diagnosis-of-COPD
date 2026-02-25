// src/Login.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      alert("Invalid credentials or user not found.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-md w-80 space-y-3">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-600 text-white py-2 w-full rounded">Login</button>
      </form>
      <p className="mt-3 text-sm">
        Don’t have an account? <Link to="/create-account" className="text-blue-600">Sign Up</Link>
      </p>
    </div>
  );
}
