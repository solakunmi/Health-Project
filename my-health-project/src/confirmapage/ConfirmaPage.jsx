import React from "react";
import "../styles/ConfirmaPage.css"; // updated CSS
import completedImg from "../assets/completed.png";

function ConfirmaPage({ setScreen }) {
  return (
    <div className="confirm-container">
      {/* Image */}
      <div className="image-wrapper">
        <img src={completedImg} alt="Completed" />
      </div>

      {/* Heading */}
      <h5>
        Your doctor’s appointment has been successfully received. 
        A confirmation email will be sent to the email address you registered with us.
      </h5>

      {/* Spacer */}
      <div style={{ height: "60px" }}></div>

      {/* Continue Button */}
      <button
        className="backtohome-btn"
        onClick={() => setScreen("home")} // back to HomePage
      >
        Back to Home
      </button>
    </div>
  );
}

export default ConfirmaPage;
