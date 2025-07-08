import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import ServicesPage from "./Components/ServicesPage";
import Blogs from "./Components/Blogs";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;
