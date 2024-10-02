/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
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
      <div className="service-card">
        <div className="card-header">
          <img src={logo} className="card-header_logo" alt="logo" />
        </div>
        <div className="card-content">
          <p className="content-title">{service.attributes.title}</p>
          <p className="content-desc">{service.attributes.description}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={handleClick}
            className="flex flex-row ml-auto justify-center items-center gap-3 p-4"
          >
            <p className="font-light tracking-wider text-secondary-white">
              LEARN MORE
            </p>
            <img src={card_arrow} alt="arrow" className="w-9 rotate-on-hover" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
