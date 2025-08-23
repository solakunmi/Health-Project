import React from "react";
import "./../Styles/Onboarding.css";   // Import CSS
import logo from "./../assets/Group 176.png"; // Import PNG

function Onboarding() {
  return (
    <div className="onboarding-container">
      {/* Logo */}
      <img src={logo} alt="CURA Logo" className="logo" />

      

      {/* Welcome text */}
      <h2>CURA</h2>
      <p>Seamless HealthCare Booking</p>
    </div>
  );
}

export default Onboarding;
