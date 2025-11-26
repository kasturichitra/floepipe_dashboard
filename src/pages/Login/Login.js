import React from "react";
import '../../styles/Login.css';

import logo from "../../assets/images/Asset 41@300x-8.png"

    const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">

<img src={logo} alt="logo" className="login-logo" />

        <h2 className="login-title">Sign in to flowpipe</h2>

        <label className="login-label">Mobile Number</label>
        <input
          type="text"
          placeholder="Enter Your Mobile Number"
          className="login-input"
        />

        <button className="login-btn-primary">
          Get OTP
        </button>

        <div className="login-divider">
          <div className="login-divider-line"></div>
          <span className="login-divider-text">OR</span>
          <div className="login-divider-line"></div>
        </div>

        <button className="login-btn-google">
          <span className="text-lg">G</span> Continue with Google
        </button>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span className="login-footer-link">Sign up</span>
        </p>

      </div>
    </div>
  );
}
export default Login
