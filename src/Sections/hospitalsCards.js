import React from "react";
import "./hospitals.css";
import { Link } from "react-router-dom";

function HospitalCard({ hospital }) {
  return (
    <>
      <tr>
        <td>
          <Link to={`/hospital/${hospital.id}`}>
            <div className="hospital-name">
              <span className="avatar">👤</span>
              {hospital.name}
            </div>
          </Link>
        </td>
        <td>{hospital.city}</td>
        <td>{hospital.state}</td>
        <td>{hospital.specialist}</td>
        <td>
          {hospital.appointment}
          <span>
            {" "}
            <button className="get">Get Appointment</button>
          </span>
        </td>
        <td>{hospital.number_of_beds}</td>
      </tr>
    </>
  );
}

export default HospitalCard;
