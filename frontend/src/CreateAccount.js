// src/CreateAccount.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function CreateAccount() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // ✅ Step 1: Create Auth User
      const userCred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCred.user;

      // ✅ Step 2: Save user info in Firestore under their UID
      await setDoc(doc(db, "users", user.uid), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        age: form.age,
        phone: form.phone,
        createdAt: new Date(),
      });

      alert("Account created successfully!");
      navigate("/home");
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-xl shadow-md w-80 space-y-3">
        <input name="firstName" placeholder="First Name" onChange={handleChange} className="border p-2 w-full" required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-2 w-full" required />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} className="border p-2 w-full" required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} className="border p-2 w-full" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-600 text-white py-2 w-full rounded">Sign Up</button>
      </form>
      <p className="mt-3 text-sm">
        Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
      </p>
    </div>
  );
}
