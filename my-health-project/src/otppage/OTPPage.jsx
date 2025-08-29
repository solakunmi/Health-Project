// src/pages/OTPPage.jsx
import React, { useState, useRef } from "react";
import "../styles/OTPPage.css";
import rafikiImg from "../assets/rafiki.png";

function OTPPage({ setScreen }) {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Only numbers allowed
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input if value entered
    if (value && index < 4) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    console.log("Entered OTP:", otp.join(""));
    setScreen("resetPassword");
    // You can add verify logic here
  };

  const handleResend = () => {
    console.log("Resend OTP");
    // You can add resend logic here
  };

  return (
    <div className="otp-container">
      {/* Back arrow */}
      <div className="back" onClick={() => setScreen("forgotPassword")}> &lt;
      </div>

      {/* Image */}
      <div className="image-wrapper">
        <img src={rafikiImg} alt="Rafiki" />
      </div>

      {/* Heading */}
      <h5 className="otp">Enter your OTP</h5>

      {/* OTP inputs */}
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            className="otp-box"
          />
        ))}
      </div>

      {/* Verify button */}
      <button className="verify-btn" onClick={handleVerify}>
        Verify
      </button>

      {/* Resend link */}
      <p className="resend-text">
        Didn’t receive code?{" "}
        <span onClick={handleResend}>Resend</span>
      </p>
    </div>
  );
}

export default OTPPage;
