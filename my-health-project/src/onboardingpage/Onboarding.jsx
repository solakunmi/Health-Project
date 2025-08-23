import React from "react";
import "./../Styles/Onboarding.css";   // Import CSS
import logo from "./../assets/Group 176.png"; // Import PNG

function Onboarding() {
  return (
    <div className="onboarding-container">
      {/* Logo */}
      <img src={logo} alt="CURA Logo" className="logo" />

      {/* Title */}
      <h2 className="cura-title">CURA</h2>

      {/* Tagline */}
      <p className="tagl">Seamless HealthCare Booking</p>
    </div>
  );
}

export default Onboarding;
