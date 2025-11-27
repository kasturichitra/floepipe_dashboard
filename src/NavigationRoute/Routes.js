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
import PanAadhaar from "../pages/PanVerification/panAadhaar";
import AccountVerify from "../pages/Account/accountVerify";
import CardValidationPage from "../pages/CardValidaton/CardValidate";
import CinVerification from "../pages/CinVerification/CinVerify";
import UdyamVerifyPage from "../pages/Udyam/UdamVerify";
import RechargeVerify, { RechargeOffersPage, RechargeOldPlansPage, RechargeOperatorsPage, RechargePlansPage, RechargeURLPage } from "../pages/Recharge/Recharge";
import NameMatchpage from "../pages/nameMatch/nameMatch";
import AadhaarVerifyPage from "../pages/Aadhaar/AadhaarVerify";
import { BbpsBillerInfoPage, BbpsBillFetch, BbpsBillPay, BbpsBillQuickPay, BbpsBillVallidation, BbpsCategoryPage } from "../pages/BBPS/Bbps";
import Otp from "../pages/Otp/Otp";
import Login from "../pages/Login/Login";
import Whitelistapis from "../pages/IpAccess/IpAccess";
import TestingKeys from "../pages/keys/TestingKeys";
import MainDashboardPage from "../pages/MainPage/MainPage";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashboardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otpVerify" element={<Otp />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<MainContent />} />
          <Route path="KYC/aadhaar" element={<AadhaarVerifyPage />} />
          <Route path="IpAccess" element={<Whitelistapis />} />
          <Route path="TestingKeys" element={<TestingKeys />} />
          <Route path="KYC/GSTIN" element={<GSTPage />} />
          <Route path="KYC/Shop" element={<ShopPage />} />
          <Route path="KYC/MobileNumber/otpsend" element={<SendMobileOTP />} />
          <Route path="KYC/MobileNumber/otpverify" element={<VerifyMobileOTP />} />
          <Route path="KYC/Pan" element={<PanVerification />} />
          <Route path="KYC/PanAadhaar" element={<PanAadhaar />} />
          <Route path="KYC/Account" element={<AccountVerify />} />
          <Route path="KYC/cardValidation" element={<CardValidationPage />} />
          <Route path="KYC/Udyam" element={<UdyamVerifyPage />} />
          <Route path="KYC/Cin" element={<CinVerification />} />
          <Route path="KYC/NameMatch" element={<NameMatchpage />} />
          <Route path="Recharge/Operators" element={<RechargeOperatorsPage />} />
          <Route path="Recharge/Plans" element={<RechargePlansPage />} />
          <Route path="Recharge/Offers" element={<RechargeOffersPage />} />
          <Route path="Recharge/RecharUrl" element={<RechargeURLPage />} />
          <Route path="Recharge/OldPlans" element={<RechargeOldPlansPage />} />
          <Route path="bbps/Category" element={<BbpsCategoryPage />} />
          <Route path="bbps/BillerInfo" element={<BbpsBillerInfoPage />} />
          <Route path="bbps/BillFetch" element={<BbpsBillFetch />} />
          <Route path="bbps/BillPay" element={<BbpsBillPay />} />
          <Route path="bbps/BillValidation" element={<BbpsBillVallidation />} />
          <Route path="bbps/QuickPay" element={<BbpsBillQuickPay />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
