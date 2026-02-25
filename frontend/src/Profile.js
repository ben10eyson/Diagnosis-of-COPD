// src/Profile.js
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "./header";
import { Link } from "react-router-dom";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          setError("No authenticated user found.");
          setLoading(false);
          return;
        }

        console.log("Fetching Firestore doc for UID:", user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Firestore data:", docSnap.data());
          setUserData(docSnap.data());
        } else {
          console.warn("No profile data found for UID:", user.uid);
          setError("No profile data found in Firestore.");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch profile data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="bg-white p-4 rounded-xl shadow-md space-y-2">
          <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
        <Link to="/edit-profile">
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
