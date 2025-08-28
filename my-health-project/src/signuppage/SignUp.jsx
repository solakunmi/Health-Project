import React, { useState } from "react";
import "../Styles/SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

function SignUp({ setScreen }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // You can add your sign-up logic here
    // After successful signup, redirect to homepage
    setScreen("home");
  };

  return (
    <div className="signup-container">
      {/* Back arrow (black) */}
      <div className="back" onClick={() => setScreen("registration")}>
        &lt;
      </div>

      <h5>Create account</h5>

      {/* Form */}
      <div className="form">
        {/* Ag BT1 19/140 label + input */}
        <label className="signup-label" htmlFor="fullName">Enter full name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter full name"
          className="signup-input"
        />

        {/* Ag BT1 19/140 label + input */}
        <label className="signup-label" htmlFor="email">Enter email address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email address"
          className="signup-input"
        />

        {/* Ag BT1 19/140 label + input (with existing visibility toggle unchanged) */}
        <label className="signup-label" htmlFor="password">Enter new password</label>
        <div className="password-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            className="signup-input"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle password visibility"
            role="button"
          >
            {showPassword ? (
              // Eye slash SVG for hidden
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3-11-7a11.77 11.77 0 0 1 2.34-3.92" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              // Eye SVG for visible
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </span>
        </div>

        {/* Remember me */}
        <label className="remember">
          <input type="checkbox" /> Remember me
        </label>

        {/* CTA */}
        <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
      </div>

      <p className="or">or sign up with</p>

      {/* Social icons */}
      <div className="socials">
        <FcGoogle size={28} />
        <FaApple size={28} color="black" />
        <FaFacebook size={28} color="#1877F2" />
      </div>

      <p className="login-link">
        Already have an account?{" "}
        <span onClick={() => setScreen("login")}>Login</span>
      </p>
    </div>
  );
}

export default SignUp;
