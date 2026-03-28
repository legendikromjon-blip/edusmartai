import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubjectSelector from "./components/SubjectSelector";
import TopicSelector from "./components/TopicSelector";
import Test from "./components/Test";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubjectSelector />} />
        <Route path="/topics" element={<TopicSelector />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
