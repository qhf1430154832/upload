import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/lanshan">
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
