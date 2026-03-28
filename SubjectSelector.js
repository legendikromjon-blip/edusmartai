import React from "react";
import { useNavigate } from "react-router-dom";

const subjects = [
  "English (Raymond Murphy Blue)",
  "Biology (Uzbekistan grades 5–11)",
  "History (grades 5–11)",
  "Law (grades 8–11)",
  "Ona tili (all topics)"
];

export default function SubjectSelector() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">EduSmart AI</h1>
      <div className="space-y-4">
        {subjects.map((subject, idx) => (
          <button
            key={idx}
            onClick={() => navigate("/topics", { state: { subject } })}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
}
