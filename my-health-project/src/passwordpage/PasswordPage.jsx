import React, { useState } from "react";
import "../Styles/PasswordPage.css";
import rafikiImg from "../assets/rafiki.png";

function PasswordPage({ setScreen }) {
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    console.log("Send code to:", email);
    setScreen("otp"); // Navigate to OTP page
  };

  return (
    <div className="password-container">
      {/* Back arrow */}
      <div className="back" onClick={() => setScreen("login")}>&lt;</div>

      {/* Image */}
      <div className="image-wrapper">
        <img src={rafikiImg} alt="Rafiki" />
      </div>

      {/* Heading */}
      <h5>Forget Password?</h5>
      <br />
      <p className="instruction-text">Enter your email</p>
      <br />

      {/* Input */}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />

      {/* Send Code Button */}
      <button className="send-btn" onClick={handleSendCode}>
        Send Code
      </button>
    </div>
  );
}

export default PasswordPage;
