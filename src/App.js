import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import ServicesPage from "./Components/ServicesPage";
import Blogs from "./Components/Blogs";
import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
