import Header from "./header";

export default function Results() {
  // Mocked severity percentage (random for now)
  const severity = Math.floor(Math.random() * 100);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 p-6 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Analysis Results</h2>
          <p className="text-gray-600 mb-2">Disease Severity:</p>
          <p className="text-4xl font-extrabold text-red-600">{severity}%</p>
          <p className="mt-4 text-gray-500">
            This is a preliminary AI analysis. Please consult a doctor for a detailed diagnosis.
          </p>
        </div>
      </main>
    </div>
  );
}
