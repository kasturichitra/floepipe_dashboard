// src/navigateroute/Route.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../src/pages/Dashboard/Dashboard";
import MainContent from "../pages/MainContent/mainContent";
import GSTPage from "../pages/GST/gstIn";
import ShopPage from "../pages/IFSC/ifsc";
import VerifyMobileOTP from "../pages/MobileNumber/VerifyOTP";
import SendMobileOTP from "../pages/MobileNumber/SendOTP";
import PanVerification from "../pages/PanVerification/PanVerificaton";
import PanNameVerification from "../pages/PanVerification/PanNameVerification";
import PanDobVerification from "../pages/PanVerification/panDOBVerification";
import PanAadhaar from "../pages/PanVerification/panAadhaar";
import AccountVerify from "../pages/Account/accountVerify";
import IpAccess from "../pages/IpAccess/IpAccess"
import  TestingKeys from "../pages/keys/TestingKeys"
import Login from "../pages/Login/Login";
import Otp from "../pages/Otp/Otp";
const AppRoute = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/otpVerify" element={<Otp />}/>
         <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainContent />} />
          <Route path="IpAccess" element={<IpAccess />} />
          <Route path="TestingKeys" element={<TestingKeys />} />
          <Route path="KYC/GSTIN" element={<GSTPage />} />
          <Route path="KYC/Shop" element={<ShopPage />} />
          <Route path="KYC/MobileNumber/otpsend" element={<SendMobileOTP />} />
          <Route path="KYC/MobileNumber/otpverify" element={<VerifyMobileOTP />} />
          <Route path="KYC/Pan" element={<PanVerification />} />
          <Route path="KYC/PanName" element={<PanNameVerification />} />
          <Route path="KYC/PanDOB" element={<PanDobVerification />} />
          <Route path="KYC/PanAadhaar" element={<PanAadhaar />} />
          <Route path="KYC/Account" element={<AccountVerify />} />
          <Route path="KYC/aadhaar" element={<div>Aadhaar</div>} />
          <Route path="KYC/bank" element={<div>Bank</div>} />
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRoute;
