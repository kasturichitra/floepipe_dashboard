import React, { useState, useRef } from "react";
import "../../styles/Otp.css";
import logo from "../../assets/images/Asset 41@300x-8.png"

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInput = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join("");
    console.log("Submitted OTP:", finalOtp);
    navigation.navigate("Maindashboard");
  };

  return (
    <div className="otp-bg">
      <div className="otp-card">

     
        <div className="otp-logo">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 rounded-xl shadow-lg"
          />
        </div>

     
        <h2 className="text-center text-white text-xl font-semibold mb-6">
          Sign in to flowpipe
        </h2>

      
        <p className="text-gray-300 mb-3">Enter the OTP</p>

        <div className="flex gap-3 mb-3">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              value={value}
              maxLength={1}
              onChange={(e) => handleInput(e.target.value, index)}
              className="otp-input-box"
            />
          ))}
        </div>

        <div className="flex justify-end mb-3">
          <span className="resend-link">Resend OTP</span>
        </div>

      
        <button className="otp-submit-btn" onClick={handleSubmit}>
          Submit
        </button>

     
        <p className="signup-text">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default OtpScreen;
