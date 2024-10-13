import "./index.css";
import Home from "./Components/home";
import About from "./Components/about";
// import OurTeam from "./Components/ourteam";
// import Booking from "./Components/booking";
import NotFound from "./Components/notfound";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Service from "./Components/service";
import Report from "./Components/Report";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Team from "./Sections/Team";
import HospitalDeatils from "./Sections/hospitalDeatils";
import UserDashboard from "./UserComponent/userDashboard";
import MedicalHistory from "./UserComponent/medicalHistory";
import AppointmentScedule from "./UserComponent/appointmentScedule";
import UserBilling from "./UserComponent/userBilling";
import UserProfile from "./UserComponent/userProfile";
import LinkedDevices from "./UserComponent/linkedDevice";
import Dashboard from "./UserComponent/dashboard";

function App() {
  return (
    <>
      <Routes>
        {/* Pages Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/hospital/:id" element={<HospitalDeatils />} />
        {/* <Route path="/ourteam" element={<OurTeam />} /> */}
        {/* <Route path="/booking" element={<Booking />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Report" element={<Report />} />
        <Route path="*" element={<NotFound />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="schedule-appointments"
            element={<AppointmentScedule />}
          />
          <Route path="medical-history" element={<MedicalHistory />} />
          <Route path="medical-billing" element={<UserBilling />} />
          <Route path="my-device" element={<LinkedDevices />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Admin Routes */}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
