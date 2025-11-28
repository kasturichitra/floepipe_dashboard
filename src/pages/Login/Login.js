import React, { useState } from "react";
import '../../styles/Login.css';

import logo from "../../assets/images/Asset 41@300x-8.png"
import { ApirequestHandler } from "../../utils/Apis/apiRequestHandler";
import { HandleGetOtp } from "../../utils/Apis/api";

const Login = () => {

  const [Loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({});

  const HandleFromChange = (e) => {
    const formName = e.target.name;
    const formValue = e.target.value;
    setFormData({ ...formData, [formName]: formValue });
  }

  const GetOtp = async () => {
    setErrorMessage("");
    setLoading(true);
    await ApirequestHandler(
      async () => HandleGetOtp(formData),
      setLoading,
      (res) => {
        const { data, message } = res;
        if(message === 'OTP sent to 8688571181'){
          
        }
        console.log('OTP Response:', message);
      },
      (errMessage) => {
        console.log('Error:', errMessage);
        setErrorMessage(errMessage);
      }
    )
  }


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
          name="mobileNumber"
          onChange={(e) => HandleFromChange(e)}
        />

        <button className="login-btn-primary" onClick={() => GetOtp()}>
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
