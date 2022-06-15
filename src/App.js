import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";

export default function App() {
  return (
    <div>
      <Routes>
        {/* more pages to be added here later */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
