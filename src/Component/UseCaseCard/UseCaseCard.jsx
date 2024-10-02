import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_API } from "../../constant/endpoint";

const UseCaseCard = ({ title, summary, desc, date, img }) => {
  const navigate = useNavigate();
  const firstImageUrl = img?.[0]?.attributes?.url;

  // Custom date formatting: "01 Jan 2024"
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleNavigate = () => {
    // Navigate to a detailed page, passing the use case data through the state
    navigate("/showcasedetail", {
      state: { title, summary, desc, date, img },
    });
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-sm mx-auto flex flex-col justify-between">
      {/* Image or Placeholder */}
      {img ? (
        <img
          src={`${BASE_API}${firstImageUrl}`}
          alt={title}
          className="w-full h-[300px] object-cover rounded-md mb-4"
        />
      ) : (
        <div className="bg-gray-300 w-full h-[300px] rounded-md mb-4 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
      )}

      {/* Date */}
      <div className="text-sm text-gray-600 mb-2">{formattedDate}</div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {/* Description with fixed height */}
      <div
        className="text-gray-700 text-sm mb-4 overflow-hidden"
        style={{ minHeight: "60px", maxHeight: "60px" }}
      >
        {summary}
      </div>

      {/* Button at the bottom */}
      <motion.button
        className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mt-auto ml-auto cursor-pointer"
        whileHover={{ rotate: 90, scale: 1.1 }}
        transition={{ duration: 0.2 }}
        onClick={handleNavigate}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </motion.button>
    </div>
  );
};

export default UseCaseCard;
