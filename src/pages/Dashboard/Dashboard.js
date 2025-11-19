import React, { useState } from "react";
import {
  FiHome,
  FiCreditCard,
  FiUser,
  FiSettings,
  FiBookOpen,
  FiBriefcase,
  FiHelpCircle,
  FiPlusCircle,
  FiBell,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import "../../styles/dashboard.css";
import { Outlet, useNavigate } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <li
    className={`sidebar-item ${active ? "sidebar-item-active" : ""}`}
    onClick={onClick}
  >
    <Icon className="text-lg" />
    <span className="text-sm font-medium">{label}</span>
  </li>
);

const Dashboard = () => {
  const [isKycOpen, setIsKycOpen] = useState(false);
  const navigate = useNavigate('');

  return (
    <div className="flex h-screen font-inter">
      {/* Sidebar */}
      <aside className="sidebar overflow-auto">
        <h1 className="sidebar-title">ApiModule Dashboard</h1>

        <div className="mt-6">
          <p className="sidebar-section-title">Support</p>
          <ul className="space-y-1">
            <SidebarItem icon={FiUser} label="Api Keys" onClick={()=>navigate("/TestingKeys")}/>
            <SidebarItem icon={FiHelpCircle} label="Whitelist IP"  onClick={()=>navigate("/IpAccess")} />
          </ul>
        </div>

        <div>
          <p className="sidebar-section-title">APIs Menu</p>
          <ul className="space-y-1">
            <SidebarItem icon={FiHome} label="Dashboard" active onClick={()=>navigate("/dashboard")} />

            <li
              className="sidebar-item flex justify-between items-center"
              onClick={() => setIsKycOpen(!isKycOpen)}
            >
              <div className="flex items-center gap-3">
                <FiUser className="text-lg" />
                <span className="text-sm font-medium">KYC</span>
              </div>
              {isKycOpen ? <FiChevronUp /> : <FiChevronDown />}
            </li>
            {isKycOpen && (
              <ul className="ml-8 mt-1 space-y-1">
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/aadhaar")}>
                  Aadhaar Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/Pan")}>
                  Pan Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/PanName")}>
                  Pan Name Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/PanDOB")}>
                  Pan DOB Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/PanAadhaar")}>
                  Pan to Aadhaar Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/Account")}>
                  Account Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/GSTIN")} >
                  GST Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/Shop")} >
                  Shop Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/MobileNumber/otpsend")} >
                  MobileNumber Send OTP
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={()=>navigate("/KYC/MobileNumber/otpverify")} >
                  MobileNumber Verify OTP
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white"  onClick={()=>navigate("/KYC/bank")}>
                  Bank Account Verification
                </li>
              </ul>
            )}
            <SidebarItem icon={FiBriefcase} label="BBPS" />
            <SidebarItem icon={FiCreditCard} label="UPI Services" />
            <SidebarItem icon={FiSettings} label="Payouts" />
          </ul>
        </div>

        <div className="mt-6">
          <p className="sidebar-section-title">Product Menu</p>
          <ul className="space-y-1">
            <SidebarItem icon={FiBookOpen} label="Products" />
            <SidebarItem icon={FiSettings} label="Templates" />
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
