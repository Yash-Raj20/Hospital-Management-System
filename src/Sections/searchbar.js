import React, { useState, useEffect, useRef } from "react";
import "./searchbar.css";
import statesAndCities from "../Json file/statesAndCities.json";
import doctorSpecialists from "../Json file/doctorSpecialists.json";
import hospitalsData from "../Json file/db.json";
import HospitalCard from "../Sections/hospitalsCards";

function Searchbar() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [cities, setCities] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [visibleHospitals, setVisibleHospitals] = useState(10); // Initially showing 10 items
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Reference to the scrollable container
  const resultsContainerRef = useRef(null);

  useEffect(() => {
    if (state) {
      setCities(statesAndCities.states[state] || []);
      setCity("");
    }
  }, [state]);

  // Infinite scroll effect within the scrollable table area
  useEffect(() => {
    const handleScroll = () => {
      if (!resultsContainerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } =
        resultsContainerRef.current;

      if (clientHeight + scrollTop >= scrollHeight - 10 && !loading) {
        // If user has scrolled to the bottom of the container and there are more hospitals to show
        if (visibleHospitals < filteredHospitals.length) {
          loadMoreHospitals();
        }
      }
    };

    const container = resultsContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [filteredHospitals, visibleHospitals, loading]);

  const filterHospitals = () => {
    setLoading(true);
    setError(null);

    try {
      const filtered = hospitalsData.hospitals.filter((hospital) => {
        return (
          (!state || hospital.state === state) &&
          (!city || hospital.city === city) &&
          (!specialist || hospital.specialist === specialist)
        );
      });

      setFilteredHospitals(filtered);
      setSearchPerformed(true);
      setVisibleHospitals(10); // Reset to showing 10 items when new search is performed
    } catch (err) {
      setError(
        err.message || "An unexpected error occurred. Please try again later."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterHospitals();
  };

  const loadMoreHospitals = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleHospitals((prev) => prev + 10); // Load 10 more hospitals
      setLoading(false);
    }, 500); // Simulate delay
  };

  return (
    <>
      <div className="form-container">
        <h3 className="form-title">Find Best Hospitals In Your City</h3>
        <form onSubmit={handleSubmit} className="search-form">
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

          <select
            className="form-select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!state}
          >
            <option value="">Select City</option>
            {cities.map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>

          <button type="submit" className="form-button">
            Find
          </button>
        </form>
      </div>

      {/* Results Section */}
      <div className="results-container">
        {loading && visibleHospitals === 0 ? (
          <p>Loading results...</p>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
            <button onClick={filterHospitals} className="retry-button">
              Retry
            </button>
          </div>
        ) : searchPerformed ? (
          filteredHospitals.length > 0 ? (
            <>
              <h3>Search Results</h3>
              <div
                className="hospital-table-wrapper"
                ref={resultsContainerRef}
                style={{ maxHeight: "500px", overflowY: "auto" }} // Fixed height and scrollable
              >
                <table className="hospital-table">
                  <thead>
                    <tr>
                      <th>Hospital Name</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Specialist</th>
                      <th>Appointment</th>
                      <th>Beds Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHospitals
                      .slice(0, visibleHospitals)
                      .map((hospital, index) => (
                        <HospitalCard key={index} hospital={hospital} />
                      ))}
                  </tbody>
                </table>
              </div>

              {loading && visibleHospitals > 0 && (
                <button className="load-more-button">
                  Loading more hospitals...
                </button>
              )}
            </>
          ) : (
            <p>No hospitals found with the selected criteria.</p>
          )
        ) : (
          <p>Please use the search form to find hospitals.</p>
        )}
      </div>
    </>
  );
}

export default Searchbar;
