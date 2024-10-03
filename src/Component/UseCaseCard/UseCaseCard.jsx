import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_API } from "../../constant/endpoint";
import arrow_right from "../../assets/arrow_right.svg";
const UseCaseCard = ({ title, summary, desc, date, img }) => {
  const navigate = useNavigate();
  const firstImageUrl = img?.[0]?.attributes?.url;
  const [isHovered, setIsHovered] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleNavigate = () => {
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

      {/* Button with hover effect */}
      <motion.div
        className="relative flex justify-end"
        initial={false}
      >
          <motion.button
          onClick={handleNavigate}
            className={`submit-button mt-8 py-2 bg-primary-green rounded-full flex items-center overflow-hidden ${
              isHovered ? "justify-between" : "justify-center"
            }`}
            initial={{ width: "56px" }}
            whileHover={{ width: "168px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.span
              className="button-text whitespace-nowrap ml-5 text-lg font-bold text-primary-white flex"
              initial={{ opacity: 0, x: -20 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {"Learn More".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.span>

            <motion.img
              src={arrow_right}
              alt="Submit arrow"
              className="size-8 mr-[120px]"
              initial={{ x: 5 }}
              animate={isHovered ? { x: 20 } : { x: 0 } }
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.button>
      </motion.div>
    </div>
  );
};

export default UseCaseCard;