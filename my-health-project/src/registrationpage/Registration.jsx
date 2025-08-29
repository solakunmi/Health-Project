import React from "react";
import "./../styles/Registration.css";  // Import CSS
import logo from "./../assets/Group 177.png"; // Import PNG

// Receive setScreen as a prop from App.jsx
function Registration({ setScreen }) {
  return (
    <div className="registration-container">
      {/* Logo */}
      <img src={logo} alt="CURA Logo" className="logo" />

      {/* Main text */}
      <h2>CURA</h2>
      <p className="tagline">Seamless HealthCare Booking</p>

      {/* Extra paragraph */}
      <p className="info-text">
        CURA simplifies healthcare booking, connecting you with trusted medical professionals effortlessly. Schedule appointments, access medical services, and manage your health with ease—all in one place.
      </p>

      {/* Buttons (stacked) */}
      <div className="button-group">
        {/* Login button switches to "login" screen */}
        <button className="btn login-btn" onClick={() => setScreen("login")}>
          Login
        </button>

        {/* Sign Up button switches to "signup" screen */}
        <button className="btn signup-btn" onClick={() => setScreen("signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Registration;
