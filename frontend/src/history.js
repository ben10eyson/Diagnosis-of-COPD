import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Header from "./header";

export default function History() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    const q = query(collection(db, "users", user.uid, "history"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRecords(data);
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Analysis History</h2>
        {records.length === 0 ? (
          <p>No analyses yet.</p>
        ) : (
          <ul className="space-y-3">
            {records.map((r) => (
              <li key={r.id} className="bg-white p-4 rounded shadow">
                <p><strong>{r.type}</strong> - {r.result}</p>
                <p className="text-gray-500 text-sm">{r.timestamp?.toDate().toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
