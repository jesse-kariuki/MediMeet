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


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/dental" element={<Dental />} />
      <Route path="/cardiology" element={<Cardiology/>}/>
      <Route path="/eye" element={<Eye />} />
      <Route path="/bones" element={<Bones />} />
    </Routes>
  );
}

export default App;
