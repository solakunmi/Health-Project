// src/pages/ResetPage.jsx
import React, { useState } from "react";
import "../styles/ResetPage.css";
import panaImg from "../assets/pana.png";

function ResetPage({ setScreen }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = () => {
    // Add reset password logic here
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="reset-container">
      {/* Back arrow */}
      <div className="back" onClick={() => setScreen("otp")}>&lt;</div>

      {/* Image */}
      <div className="image-wrapper">
        <img src={panaImg} alt="Pana" />
      </div>

      {/* New Password */}
      <p className="password-label">New Password</p>
      <div className="password-wrapper">
        <input
          type={showNewPassword ? "text" : "password"}
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="password-input"
        />
        <span
          className="toggle-password"
          onClick={() => setShowNewPassword(!showNewPassword)}
          aria-label="Toggle password visibility"
          role="button"
        >
          {showNewPassword ? (
            // Eye slash SVG for hidden
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3-11-7a11.77 11.77 0 0 1 2.34-3.92" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
            // Eye SVG for visible
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </span>
      </div>

      {/* Confirm Password */}
      <p className="password-label">Confirm Password</p>
      <div className="password-wrapper">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="password-input"
        />
        <span
          className="toggle-password"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          aria-label="Toggle password visibility"
          role="button"
        >
          {showConfirmPassword ? (
            // Eye slash SVG for hidden
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3-11-7a11.77 11.77 0 0 1 2.34-3.92" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
            // Eye SVG for visible
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </span>
      </div>

      {/* Reset Password Button */}
      <button className="reset-btn" onClick={() => setScreen("confirm")}>
        Reset Password
      </button>
    </div>
  );
}

export default ResetPage;
