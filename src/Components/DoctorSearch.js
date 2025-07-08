import React from "react";

const DoctorSearch = () => (
  <div className="doctor-search">
    <strong><p className="find_doctor">Find A Doctor</p></strong>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Speciality" />
    <button className="search">Search</button>
  </div>
);

export default DoctorSearch;
