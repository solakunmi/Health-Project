import React, { useState } from "react";
import "./../Styles/SignUp.css";
import googleIcon from "../assets/devicon_google.png";
import appleIcon from "../assets/ic_sharp-apple.png";
import facebookIcon from "../assets/logos_facebook.png";

function SignUp({ setScreen }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container">
      {/* Back arrow */}
      <div className="back" onClick={() => setScreen("registration")}>
        &#x2190;
      </div>

      <h5>Create account</h5>

      {/* Form */}
      <div className="form">
        <input type="text" placeholder="Enter full name" />
        <input type="email" placeholder="Enter email address" />
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              // Eye slash SVG for hidden
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3-11-7a11.77 11.77 0 0 1 2.34-3.92" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              // Eye SVG for visible
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </span>
        </div>

        <label className="remember">
          <input type="checkbox" /> Remember me
        </label>

        <button className="signup-btn">Sign Up</button>
      </div>

      <p className="or">or sign up with</p>

      <div className="socials">
        <img src={googleIcon} alt="Google" />
        <img src={appleIcon} alt="Apple" />
        <img src={facebookIcon} alt="Facebook" />
      </div>

      <p className="login-link">
        Already have an account?{" "}
        <span onClick={() => setScreen("registration")}>Login</span>
      </p>
    </div>
  );
}

export default SignUp;
