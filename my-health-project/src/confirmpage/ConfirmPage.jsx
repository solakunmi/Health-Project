// src/pages/ConfirmPage.jsx
import React from "react";
import "../Styles/ConfirmPage.css";
import completedImg from "../assets/completed.png";

function ConfirmPage({ setScreen }) {
  return (
    <div className="confirm-container">
      {/* Image */}
      <div className="image-wrapper">
        <img src={completedImg} alt="Completed" />
      </div>

      {/* Heading */}
      <h5 className="confirm">Congratulations, password reset successful</h5>

      {/* Spacer */}
      <div style={{ height: "60px" }}></div>

      {/* Continue Button */}
      <button
        className="continue-btn"
        onClick={() => setScreen("login")}
      >
        Continue
      </button>
    </div>
  );
}

export default ConfirmPage;
