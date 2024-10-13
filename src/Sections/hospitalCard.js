import React, { useState } from "react";
import "./hospitalCard.css";
import { Link } from "react-router-dom";
import hospitalsData from "../data/hospitalsData"; 
import { FaEye, FaHeart } from "react-icons/fa"; 

const HospitalCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const filteredProducts = hospitalsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search your hospital..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        <div className="grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleCount).map((product) => (
              <div key={product.id} className="card">
                <Link to={`/hospital/${product.id}`} className="block">
                  <img alt="ecommerce" src={product.imgSrc} className="hospital-image" />
                </Link>
                <div className="mt-2 p-2">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="card-location">{product.location}</p>
                  <div className="rating">
                    {renderStars(product.rating)}
                  </div>
                  <div className="likes-views">
                    <p className="card-likes">
                      <FaHeart className="like-icons"/> {product.likes}
                    </p>
                    <p className="card-views">
                      <FaEye /> {product.views}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>

        {visibleCount < filteredProducts.length && (
          <button onClick={handleViewMore} className="view-more-button">
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default HospitalCard;
