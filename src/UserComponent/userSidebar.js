import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import "./sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-gray-100 min-h-screen transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } p-4`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="logo">
          {/* Placeholder for the hospital logo */}
          <h2
            className={`text-2xl font-bold ${isCollapsed ? "hidden" : "block"}`}
          >
            Health Care
          </h2>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-600 focus:outline-none"
        >
          {isCollapsed ? ">" : "<"}
        </button>
      </div>

      <ul className="sidebar-menu space-y-4">
        <li>
          <NavLink
            to="/user/dashboard/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${
                isActive ? "text-blue-500" : "text-black"
              }`
            }
          >
            <i className="fas fa-tachometer-alt"></i>
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Dashboard
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/dashboard/schedule-appointments"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${
                isActive ? "text-blue-500" : "text-black"
              }`
            }
          >
            <i className="fas fa-calendar-check"></i>
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Appointment
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/dashboard/medical-history"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${
                isActive ? "text-blue-500" : "text-black"
              }`
            }
          >
            <i className="fas fa-file-medical"></i>
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Medical Report
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/dashboard/medical-billing"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${
                isActive ? "text-blue-500" : "text-black"
              }`
            }
          >
            <i className="fas fa-file-invoice-dollar"></i>
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Medical Billing
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/dashboard/my-device"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${
                isActive ? "text-blue-500" : "text-black"
              }`
            }
          >
            <i className="fas fa-laptop-medical"></i>
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              My Devices
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center space-x-2 ${
                isActive ? "text-blue-500" : "text-black"
              }`
            }
          >
            <i className="fas fa-user"></i>
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Profile
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
