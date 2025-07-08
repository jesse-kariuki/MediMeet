// HomePage.js
import React from "react";
import NavBar from "./Header";
import Legend from "./Legend";
import DoctorSearch from "./DoctorSearch";
import Stats from "./Stats";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Partners from "./Partners";
import Footer from "./Footer";
import "./home.css";

const HomePage = () => {
  return (
    <main>
      <NavBar />
      <Legend />
      <DoctorSearch />
      <Stats />
      <Services />
      <Testimonials />
      <Team />
      <Partners />
      <Footer />
    </main>
  );
};

export default HomePage;
