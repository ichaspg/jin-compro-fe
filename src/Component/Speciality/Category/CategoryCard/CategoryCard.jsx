/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./categorycard.css";
import logo from "../../../../assets/logo_green.svg";
import card_arrow from "../../../../assets/card_arrow.svg";

const CategoryCard = ({ service, selectedSteps }) => {
  const [cardHeight, setCardHeight] = useState("auto");
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const updateHeight = () => {
    if (cardRef.current) {
      const height = cardRef.current.scrollHeight;
      setCardHeight(`${height}px`);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleClick = () => {
    navigate("/step", {
      state: { title: service.attributes.title, selectedSteps },
    });
  };

  return (
    <div
      className="card-container"
      ref={cardRef}
      style={{ height: cardHeight, transition: "height 0.3s ease" }}
    >
      <div className="service-card hover:shadow-lg">
        <div className="card-header">
          <img src={logo} className="card-header_logo" alt="logo" />
        </div>
        <div className="card-content">
          <h3 className="content-title">{service.attributes.title}</h3>
          <p className="content-desc">{service.attributes.description}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={handleClick}
            className="w-full flex items-center justify-end px-4 gap-2 hover:bg-primary-orange/90 transition-colors"
          >
            <span className="text-secondary-white text-sm font-light tracking-wider">
              LEARN MORE
            </span>
            <img src={card_arrow} alt="arrow" className="w-6 rotate-on-hover" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;