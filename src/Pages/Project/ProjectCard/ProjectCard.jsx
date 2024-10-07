import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_API } from "../../../constant/endpoint";
import "./projectcard.css";
import arrow from "../../../assets/card_arrow.svg";

const ProjectCard = ({ category, images, title, summary, description }) => {
  const navigate = useNavigate();
  const firstImageUrl = images?.[0]?.attributes?.url;

  const handleNavigate = () => {
    navigate("/workdetail", {
      state: { category, images, title, summary, description },
    });
  };

  return (
    <div className="flex flex-col">
      <div className="">
        {firstImageUrl ? (
          <motion.img
            src={`${BASE_API}${firstImageUrl}`}
            alt={`${title} image`}
            className="img-lg bg-cover"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
      <div className="flex flex-col pb-5">
        <div className="flex flex-row justify-between mt-3 pt-5">
          <p className="lg:text-2xl text-primary-green font-medium">{title}</p>
          <button onClick={handleNavigate}>
            <motion.img src={arrow} alt="arrow" className="min-h-5 min-w-5 max-w-5 max-h-5"whileHover={{ rotate: 45 }}
            transition={{ duration: 0.5 }} />
          </button>
        </div>
        <p className="lg:w-[450px] lg:text-xl text-primary-green text-sm">{summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
