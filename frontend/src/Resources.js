import Header from "./header";

export default function Resources() {
  const resources = [
    { title: "What is COPD?", url: "https://www.youtube.com/watch?v=Kb7UP4qVfhg" },
    { title: "Pneumonia Explained", url: "https://www.youtube.com/watch?v=Z1Q9dEBPOAE" },
    { title: "Breathing Exercises for Healthy Lungs", url: "https://www.youtube.com/watch?v=shlZ9hBqhR4" },
    { title: "COPD Action Plan (PDF)", url: "https://goldcopd.org/wp-content/uploads/2023/01/GOLD-2023_v1.2-17Jan2023.pdf" },
    { title: "Healthy Diet for COPD Patients", url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/copd/living-with-copd/nutrition" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Educational Resources</h2>
        <ul className="space-y-4">
          {resources.map((r, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <a href={r.url} target="_blank" rel="noreferrer" className="text-blue-600 font-medium">
                {r.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
