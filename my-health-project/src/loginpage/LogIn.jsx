import React, { useState } from "react"; 
import "../Styles/LogIn.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

function LogIn({ setScreen }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      {/* Back menu: wide "<" in black */}
      <div className="back" onClick={() => setScreen("registration")}>&lt;</div>

      {/* Heading */}
      <h5>Log In</h5>

      {/* Welcome block — aligned left */}
      <div className="welcome-block">
        <h5 className="welcome-title">Welcome</h5>
        <p className="welcome-text">
          Welcome back! Log in to access your healthcare services easily
        </p>
      </div>

      {/* Form */}
      <div className="form">
        <label className="login-label" htmlFor="loginId">
          Email or Mobile Number
        </label>
        <input
          id="loginId"
          type="text"
          placeholder="Enter email or mobile number"
          className="login-input"
        />

        <label className="login-label" htmlFor="password">
          Password
        </label>
        <div className="password-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="login-input"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle password visibility"
            role="button"
          >
            {showPassword ? (
              /* eye-off */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3-11-7a11.77 11.77 0 0 1 2.34-3.92"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              /* eye */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </span>
        </div>

        {/* Forget password */}
        <div className="forget-password" onClick={() => setScreen("forgotPassword")}>
          Forgot password?
        </div>

        <button className="login-btn">Log In</button>
      </div>

      {/* Divider */}
      <div className="or">or log in with</div>

      {/* Social icons */}
      <div className="socials">
        <FcGoogle size={30} />
        <FaApple size={30} color="black" />
        <FaFacebook size={30} color="#1877F2" />
      </div>

      {/* Sign up link */}
      <div className="signup-link">
        Don’t have an account?{" "}
        <span onClick={() => setScreen("signup")}>Sign up</span>
      </div>
    </div>
  );
}

export default LogIn;
