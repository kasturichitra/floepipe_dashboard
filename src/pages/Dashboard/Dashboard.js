
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {
  Bell,
  HelpCircle,
  User,
  Search,
  LayoutDashboard,
  Key,
  ShieldCheck,
  CreditCard,
  Building2,
  Phone,
  FileText,
  Menu,
  ChevronDown,
  ChevronUp,
  Smartphone,
  Briefcase
} from "lucide-react";
import flowpipeLogo from '../../assets/images/FlowpipeLogo.png'

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen w-full flex bg-[#0f0f12]">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col">
        <Header onToggle={() => setCollapsed(!collapsed)} />
        <main className="flex-1 overflow-y-auto p-6 bg-[#f8f9fd]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Sidebar({ collapsed, onToggle }) {
  const [isKycOpen, setIsKycOpen] = useState(false);
  const [isRechargeOpen, setIsRechargeOpen] = useState(false);
  const [isBbpsOpen, setIsBbpsOpen] = useState(false);
  const navigate = useNavigate();
  const HandleSearch = (e) => {
    const SearchValue = e.target.value;

  }

  return (
    <aside
      className={`${collapsed ? "w-20" : "w-64"} bg-[#0c0f14] text-white flex flex-col transition-all duration-300`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-start gap-3 px-4 border-b border-white/5">
        <img src={flowpipeLogo} width={40} />
        {!collapsed && <span className="font-semibold text-lg">flowpipe</span>}
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <Search size={16} className="text-gray-400" />
            <input
              className="bg-transparent outline-none text-sm w-full text-white"
              placeholder="Search..."
              onChange={(e) => HandleSearch(e)}
            />
          </div>
        </div>
      )}
      {collapsed && (
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <Search size={16} className="text-gray-400" onClick={onToggle} />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 text-sm">
        <NavItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          collapsed={collapsed}
          onClick={() => navigate("/dashboard")}
        />
        <NavItem
          icon={<Key size={18} />}
          label="API Keys"
          collapsed={collapsed}
          onClick={() => navigate("/dashboard/apiKeys")}
        />
        <NavItem
          icon={<ShieldCheck size={18} />}
          label="Whitelist IP"
          collapsed={collapsed}
          onClick={() => navigate("/dashboard/WhitelistIP")}
        />

        {/* KYC */}
        <NavGroup
          icon={<FileText size={18} />}
          label="KYC"
          isOpen={isKycOpen}
          setIsOpen={() => {
            setIsRechargeOpen(false);
            setIsBbpsOpen(false);
            setIsKycOpen(!isKycOpen);
          }}
          collapsed={collapsed}
        >
          <SubItem onClick={() => navigate("/dashboard/KYC/aadhaar")}>
            <span className="text-orange-400" >POST:</span> Aadhaar Verification
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/Pan")}>
            <span className="text-orange-400" >POST:</span> Pan Verification
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/PanAadhaar")}>
            <span className="text-orange-400" >POST:</span> Pan to Aadhaar
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/Account")}>
            <span className="text-orange-400" >POST:</span> Bank Account
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/GSTIN")}>
            <span className="text-orange-400" >POST:</span> GST Verification
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/Shop")}>
            <span className="text-orange-400" >POST:</span> Shop Verification
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/MobileNumber/otpsend")}>
            <span className="text-orange-400" >POST:</span> Send OTP
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/MobileNumber/otpverify")}>
            <span className="text-orange-400" >POST:</span> Verify OTP
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/cardValidation")}>
            <span className="text-orange-400" >POST:</span> Card Verify
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/Cin")}>
            <span className="text-orange-400" >POST:</span> CIN Verify
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/Udyam")}>
            <span className="text-orange-400" >POST:</span> Udyam Verify
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/KYC/NameMatch")}>
            <span className="text-orange-400" >POST:</span> Name Verify
          </SubItem>
        </NavGroup>

        {/* Recharge */}
        <NavGroup
          icon={<Smartphone size={18} />}
          label="Recharge"
          isOpen={isRechargeOpen}
          setIsOpen={() => {
            setIsKycOpen(false);
            setIsBbpsOpen(false);
            setIsRechargeOpen(!isRechargeOpen);
          }}
          collapsed={collapsed}
        >
          <SubItem onClick={() => navigate("/dashboard/Recharge/Operators")}>
            <span className="text-orange-400" >POST:</span> Fetch Operators
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/Recharge/Plans")}>
            <span className="text-orange-400" >POST:</span> Fetch Plans
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/Recharge/Offers")}>
            <span className="text-orange-400" >POST:</span> Fetch Offers
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/Recharge/RecharUrl")}>
            <span className="text-orange-400" >POST:</span> Recharge URL
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/Recharge/OldPlans")}>
            <span className="text-orange-400" >POST:</span> Old Plans
          </SubItem>
        </NavGroup>

        {/* BBPS */}
        <NavGroup
          icon={<Briefcase size={18} />}
          label="BBPS"
          isOpen={isBbpsOpen}
          setIsOpen={() => {
            setIsKycOpen(false);
            setIsRechargeOpen(false);
            setIsBbpsOpen(!isBbpsOpen);
          }}
          collapsed={collapsed}
        >
          <SubItem onClick={() => navigate("/dashboard/bbps/Category")}>
            <span className="text-green-400" >GET:</span> Fetch Category
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/bbps/BillerInfo")}>
            <span className="text-green-400" >GET:</span> Fetch Biller Info
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/bbps/BillFetch")}>
            <span className="text-green-400" >GET:</span> Bill Fetch
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/bbps/BillPay")}>
            <span className="text-orange-400" >POST:</span> Bill Pay
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/bbps/BillValidation")}>
            <span className="text-orange-400" >POST:</span> Bill Validation
          </SubItem>
          <SubItem onClick={() => navigate("/dashboard/bbps/QuickPay")}>
            <span className="text-orange-400" >POST:</span> Quick Pay
          </SubItem>
        </NavGroup>
      </nav>
    </aside>
  );
}

function NavGroup({ icon, label, isOpen, setIsOpen, children, collapsed }) {
  return (
    <div>
      <button
        onClick={setIsOpen}
        className={`w-full flex items-center justify-${collapsed ? "center" : "start"} px-3 py-2 rounded-lg hover:bg-white/10`}
      >
        <div className="flex items-center gap-3">
          {icon}
          {!collapsed && <span className="font-medium">{label}</span>}
        </div>
        {!collapsed && (isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
      </button>

      {isOpen && !collapsed && (
        <ul className="mt-1 ml-8 space-y-1 text-xs text-gray-300">{children}</ul>
      )}
    </div>
  );
}

function SubItem({ children, onClick }) {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer border-l border-gray-300  py-1.5 hover:bg-white/10 hover:text-white"
    >
      <span className="text-gray-300 bi bi-dash-lg" ></span> {children}
    </li>
  );
}

function NavItem({ label, collapsed, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition justify-${collapsed ? "center" : "start"} text-gray-300 hover:bg-white/10`}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </button>
  );
}

function Header({ onToggle }) {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggle}
          className="h-9 w-9 rounded-lg border flex items-center justify-center"
        >
          <Menu size={18} />
        </button>
        <h1 className="text-lg font-semibold">Welcome, Vishnu!</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-3 py-1.5 text-sm border border-purple-700 text-purple-700 rounded-lg">Balance</button>
        <button className="px-3 py-1.5 text-sm border border-purple-700 text-purple-700 rounded-lg flex items-center gap-1">
          <HelpCircle size={16} /> Help
        </button>
        <button className="px-3 py-1.5 text-sm border border-purple-700 text-purple-700 rounded-lg flex items-center gap-1">
          <Bell size={16} /> Updates
        </button>
        <button className="h-9 w-9 rounded-full border border-purple-700 text-purple-700 flex items-center justify-center">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}

