import React from "react";
import EventCard from "./eventCard";
// import Calendar from './Calendar';
// import BloodPressureChart from './BloodPressureChart';
// import LinkedDevices from './LinkedDevices';
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <input type="text" placeholder="Search or type a command" />
        <button>Create Schedule</button>
      </header>
      <section className="dashboard-content">
        <div className="today-events">
          <h3>Today's Events</h3>
          <EventCard />
          <EventCard />
        </div>
        <div className="upcoming-appointment">
          <h3>Upcoming appointment</h3>
          {/* <Calendar /> */}
        </div>
        {/* <BloodPressureChart /> */}
        {/* <LinkedDevices /> */}
      </section>
    </div>
  );
};

export default Dashboard;
