import React from "react";
import { useAuth } from "../context/authProvider";
import toast from "react-hot-toast";

function Logout() {
  // eslint-disable-next-line no-unused-vars
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      localStorage.removeItem("Users");

      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
        setAuthUser(null);
      }, 2000);
    } catch (err) {
      toast.error("Error: " + err.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
