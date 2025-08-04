"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setResult(data.class);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-4 sm:px-6 md:px-10">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-xl animate-fade-in">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          🐾 Animal Image Classifier
        </h1>

        {/* File Upload Box */}
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center gap-3 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition"
        >
          📎{" "}
          <span className="text-sm sm:text-base text-gray-600 truncate">
            {file ? file.name : "Attach an image file"}
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {/* Predict Button */}
        <button
          onClick={handleUpload}
          className="mt-5 w-full flex items-center justify-center gap-2 border-2 border-green-500 text-green-700 font-semibold py-2.5 px-6 rounded-xl bg-transparent transition-all duration-300 ease-in-out hover:ring-4 hover:ring-green-300 focus:outline-none active:scale-95 cursor-pointer"
        >
          <span className="text-xl">🔍</span>
          <span>Predict</span>
        </button>

        {/* Prediction Result */}
        {result && (
          <div className="mt-6 text-center animate-fade-in">
            <p className="text-lg sm:text-xl font-medium text-gray-700">
              Prediction:&nbsp;
              <span className="text-2xl sm:text-3xl font-bold text-green-600">
                {result}
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Loading Popup */}
      {loading && (
        <div className="fixed inset-0 bg-white/60 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in-fast">
          <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center gap-3 w-48 animate-popup-zoom">
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin shadow-md shadow-green-200" />
            <p className="text-gray-600 text-sm font-medium animate-pulse">
              Analyzing...
            </p>
          </div>
        </div>
      )}

      {/* Custom Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoom {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-fade-in-fast {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-popup-zoom {
          animation: zoom 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
