// src/EditProfile.js
import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "./header";

export default function EditProfile() {
  const [form, setForm] = useState({ firstName: "", lastName: "", age: "", phone: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setForm(docSnap.data());
        }
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), form);
      alert("Profile updated successfully!");
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-md space-y-3">
          <input name="firstName" value={form.firstName} onChange={handleChange} className="border p-2 w-full" />
          <input name="lastName" value={form.lastName} onChange={handleChange} className="border p-2 w-full" />
          <input name="age" type="number" value={form.age} onChange={handleChange} className="border p-2 w-full" />
          <input name="phone" value={form.phone} onChange={handleChange} className="border p-2 w-full" />
          <button type="submit" className="bg-blue-600 text-white py-2 w-full rounded">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
