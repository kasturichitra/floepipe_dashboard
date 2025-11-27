import { useState } from "react";
import {
  FiBookOpen,
  FiBriefcase,
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiHome,
  FiSettings,
  FiSmartphone,
  FiUser
} from "react-icons/fi";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";

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
  const [isRechargeOpen, setIsRechargeOpen] = useState(false);
  const [isBbpsOpen, setIsBbpsOpen] = useState(false);
  const navigate = useNavigate('');

  return (
    <div className="flex h-screen font-inter">
      {/* Sidebar */}
      <aside className="sidebar overflow-auto">
        <div className="sidebar-title"><span className="DashboardLogo"></span>flowpipe</div>

        <div className="mt-6 btn-group bg-gray-700 p-2">
          <span className="bi-search"></span>
          <input type="text" placeholder="Search ..." className=" bg-gray-700" />
        </div>

        <div>
          <p className="sidebar-section-title">APIs Menu</p>
          <ul className="space-y-1">
            <SidebarItem icon={FiHome} label="Dashboard" active onClick={() => navigate("/dashboard")} />
            <li
              className="sidebar-item flex justify-between items-center"
              onClick={() => {setIsBbpsOpen(false); setIsRechargeOpen(false); setIsKycOpen(!isKycOpen) }}
            >
              <div className="flex items-center gap-3">
                <FiUser className="text-lg" />
                <span className="text-sm font-medium">KYC</span>
              </div>
              {isKycOpen ? <FiChevronUp /> : <FiChevronDown />}
            </li>
            {isKycOpen && (
              <ul className="text-xs">
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/aadhaar")}>
                  <span className="text-orange-400 rounded">POST:</span> Aadhaar Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/Pan")}>
                  <span className="text-orange-400 rounded">POST:</span> Pan Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/PanAadhaar")}>
                  <span className="text-orange-400 rounded">POST:</span> Pan to Aadhaar Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/Account")}>
                  <span className="text-orange-400 rounded">POST:</span> Bank Account Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/GSTIN")} >
                  <span className="text-orange-400 rounded">POST:</span> GST Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/Shop")} >
                  <span className="text-orange-400 rounded">POST:</span> Shop Verification
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/MobileNumber/otpsend")} >
                  <span className="text-orange-400 rounded">POST:</span> MobileNumber Send OTP
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/MobileNumber/otpverify")} >
                  <span className="text-orange-400 rounded">POST:</span> MobileNumber Verify OTP
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/cardValidation")} >
                  <span className="text-orange-400 rounded">POST:</span> card Verify
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/Cin")} >
                  <span className="text-orange-400 rounded">POST:</span> CIN Verify
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/Udyam")} >
                  <span className="text-orange-400 rounded">POST:</span> Udyam Verify
                </li>
                <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/KYC/NameMatch")} >
                  <span className="text-orange-400 rounded">POST:</span> Name Verify
                </li>
              </ul>
            )}
            <li className="sidebar-item flex justify-between items-center"
              onClick={() => {setIsBbpsOpen(false); setIsKycOpen(false); setIsRechargeOpen(!isRechargeOpen) }}>
              <div className="flex items-center gap-3">
                <FiSmartphone className="text-lg" />
                <span className="text-sm font-medium">Recharge</span>
              </div>
              {isRechargeOpen ? <FiChevronUp /> : <FiChevronDown />}
            </li>
            {
              isRechargeOpen && (
                <ul className="text-xs">
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/Recharge/Operators")}>
                    <span className="text-orange-400 rounded">POST:</span> Fetch Operators
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/Recharge/Plans")}>
                    <span className="text-orange-400 rounded">POST:</span> Fetch Plans
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/Recharge/Offers")}>
                    <span className="text-orange-400 rounded">POST:</span> Fetch OffersPlans
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/Recharge/RecharUrl")}>
                    <span className="text-orange-400 rounded">POST:</span> Recharge URL
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/Recharge/OldPlans")}>
                    <span className="text-orange-400 rounded">POST:</span> Fetch Old Plans
                  </li>
                </ul>
              )
            }
            <li className="sidebar-item flex justify-between items-center"
              onClick={() => { setIsKycOpen(false); setIsRechargeOpen(false); setIsBbpsOpen(!isBbpsOpen) }}>
              <div className="flex items-center gap-3">
                <FiBriefcase className="text-lg" />
                <span className="text-sm font-medium">BBPS</span>
              </div>
              {isBbpsOpen ? <FiChevronUp /> : <FiChevronDown />}
            </li>
            {
              isBbpsOpen && (
                <ul className="text-xs">
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/bbps/Category")}>
                    <span className="text-green-400 rounded">GET:</span>Fetch Category
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/bbps/BillerInfo")}>
                    <span className="text-green-400 rounded">GET:</span> Fetch BillerInfo
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/bbps/BillFetch")}>
                    <span className="text-green-400 rounded">GET:</span> Fetch Bill Fetch
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/bbps/BillPay")}>
                    <span className="text-orange-400 rounded">POST:</span> Fetch Bill pay
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/bbps/BillValidation")}>
                    <span className="text-orange-400 rounded">POST:</span> Fetch Bill Validation
                  </li>
                  <li className="sidebar-item text-gray-300 hover:text-white" onClick={() => navigate("/dashboard/bbps/QuickPay")}>
                    <span className="text-orange-400 rounded">POST:</span> Fetch Bill Quick Pay
                  </li>
                </ul>
              )
            }
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

      {/* <Outlet /> */}
       <div className="flex flex-col w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

