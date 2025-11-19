import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./activeService.css";

const ApiMainPage = () => {
  const [activeService, setActiveService] = useState(
    "Testing Api Keys Generation"
  );
  const navigate = useNavigate();
  const servicesData = [
    {
      service: "Testing Api Keys Generation",
      route: "",
    },
    {
      service: "WhiteList Your IP's",
      route: "/Whitelistapis",
    },
    {
      service: "Live Keys For Your Services",
      route: "/liveKeys",
    },
  ];

  const handleBtnClick = (service, route) => {
    setActiveService(service);
    navigate(`/dashboard/ApiKeys${route}`);
  };
  return (
    <div className="card p-3" style={{ height: "90vh", width: "auto" }}>
      <div className="serveDiv">
        {servicesData.map((service, index) => {
          return (
            <button
              key={index}
              className={
                activeService == service.service ? "changedBtn" : "normalBtn"
              }
              onClick={() => handleBtnClick(service.service, service.route)}
            >
              {service.service}
            </button>
          );
        })}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ApiMainPage;
