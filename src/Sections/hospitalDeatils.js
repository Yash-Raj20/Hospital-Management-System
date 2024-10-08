import React from "react";
import { useParams } from "react-router-dom";
import hospitalsData from "../Json file/db.json";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./hospitalDetails.css";
import "./aboutus.css";

function HospitalDetails() {
  const { id } = useParams();

  // Find the hospital by ID
  const hospital = hospitalsData.hospitals.find((h) => h.id === id); // Compare directly as strings

  if (!hospital) {
    return <p>Hospital not found.</p>;
  }

  return (
    <>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Hospital Details</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Hospital
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="hospital-details">
        <header>
          <h1>{hospital.name}</h1>
          <img src={hospital.image} alt="Hospital Logo" />
        </header>
        <p>
          <strong>City:</strong> {hospital.city}
        </p>
        <p>
          <strong>State:</strong> {hospital.state}
        </p>
        <p>
          <strong>Specialist:</strong> {hospital.specialist}
        </p>
        <p>
          <strong>Appointment Available:</strong>{" "}
          {hospital.appointment ? "Yes" : "No"}
        </p>
        <p>
          <strong>Beds Available:</strong> {hospital.number_of_beds}
        </p>
        <p>
          <strong>Established Year:</strong> {hospital.established_year}
        </p>
        <p>
          <strong>Email:</strong>
          <a href={"mailto:" + hospital.email}> {hospital.email}</a>
        </p>
        {/* <p>
          <strong>Website:</strong>
          <a href={"visit:" + hospital.website}> {hospital.website}</a>
        </p> */}
        <div className="details">
          <h2>About Us</h2>
          <p id="hospital-description">
            Description of the hospital goes here.
          </p>

          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> <span>{hospital.street_address}</span>
          </p>
          <p>
            <strong>Contact:</strong> <span>{hospital.contact}</span>
          </p>

          <h2>Specialties</h2>
          <ul>
            <li>{hospital.specialist}</li>
          </ul>

          <h2>Services</h2>
          <ul>
            {hospital.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <h2>Facilities</h2>
          <ul>
            {hospital.facilities.map((facilities, index) => (
              <li key={index}>{facilities}</li>
            ))}
          </ul>

          <h2>Rating</h2>
          <p>{hospital.rating}⭐</p>

          <h2>Testimonials</h2>
          <ul>
            {hospital.testimonials.map((testimonial, index) => (
              <li key={index}>{testimonial}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HospitalDetails;
