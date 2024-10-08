import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./userSidebar";

function UserDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <UserSidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>User Dashboard</h2>
        <Outlet />
      </div>
    </div>
  );
}

export default UserDashboard;
