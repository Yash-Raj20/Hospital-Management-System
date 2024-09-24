import React, { useState, useEffect } from "react";
import "./searchbar.css";
import statesAndCities from "../Json file/statesAndCities.json";
import doctorSpecialists from "../Json file/doctorSpecialists.json"; // Import the specialists data
import hospitals from "../Json file/hospitals.json"; // Import the specialists data

function Searchbar() {
  const [state, setState] = useState(""); // For state selection
  const [city, setCity] = useState(""); // For city selection
  const [specialist, setSpecialist] = useState(""); // For specialist selection
  const [cities, setCities] = useState([]); // List of cities for the selected state

  // Update cities list when the state changes
  useEffect(() => {
    if (state) {
      setCities(statesAndCities.states[state] || []);
      setCity(""); // Reset city when state changes
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("Selected Specialist:", specialist);
    console.log("State:", state);
    console.log("City:", city);
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Find Best Hospitals In Your City</h3>
      <form onSubmit={handleSubmit} className="waste-form">
        {/* Specialist Selection */}
        <select
          className="form-select"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
        >
          <option value="">Select Specialist</option>
          {doctorSpecialists.specialists.map((specialistName) => (
            <option key={specialistName} value={specialistName}>
              {specialistName}
            </option>
          ))}
        </select>

        {/* State Selection */}
        <select
          className="form-select"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Select State</option>
          {Object.keys(statesAndCities.states).map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>

        {/* City Selection */}
        <select
          className="form-select"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!state} // Disable if no state is selected
        >
          <option value="">Select City</option>
          {cities.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <button type="submit" className="form-button">
          Find
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
