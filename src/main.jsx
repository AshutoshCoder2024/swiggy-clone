import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import Restuarant from "./components/Restuarants.jsx";
import Home_page from "./components/Home_page.jsx";
import RestuarantMenu from "./components/RestuarantMenu.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/restuarant" element={<Restuarant />} />
        <Route path="/city/Ranchi/:id" element={<RestuarantMenu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
