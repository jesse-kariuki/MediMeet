import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import ServicesPage from "./Components/ServicesPage";
import Blogs from "./Components/Blogs";
import Dental from "./Components/Dental";
import Cardiology from "./Components/Cardiology";
import Eye from "./Components/Eye";
import Bones from "./Components/Bones";
import "./App.css"; 
import BlogFacts from "./Components/BlogFacts";

import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/dental" element={<Dental />} />
      <Route path="/cardiology" element={<Cardiology/>}/>
      <Route path="/eye" element={<Eye />} />
      <Route path="/bones" element={<Bones />} />
      <Route path="/blogs/:id" element={<BlogFacts/>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} /> {/* Optional: default route */}
    </Routes>
  );
}

export default App;
