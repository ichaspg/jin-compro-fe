import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../../constant/endpoint";


const WorkCardFeatured = ({
  title,
  description,
  imageUrl,
  large,
  categoryTitle,
  id,
  summary,
}) => {
  const navigate = useNavigate();
  const firstImageUrl = imageUrl?.[0]?.attributes?.url;
  

  const handleClick = () => {
    navigate(`/workdetail`, {
      state: {
        title,
        description,
        summary,
        images: imageUrl,
        category: categoryTitle,
      },
    });
  };

  return (
    <motion.div
      className="relative lg:w-[300px] h-[480px] rounded-lg overflow-hidden cursor-pointer"
      whileHover="hovered"
      initial="initial"
      variants={{
        hovered: { scale: 1.03 },
        initial: { scale: 1 },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src={`${BASE_API}${firstImageUrl}`}
          alt={`${title} image`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 top-0 p-5 m-5 text-white ">
        <h2 className=" text-primary-white mb-1 font-bold text-2xl">
          {title}
        </h2>
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        variants={{
          initial: { opacity: 0 },
          hovered: { opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Bottom content */}
      <motion.div
        className="absolute inset-x-0 bottom-0 p-4 text-white"
        variants={{
          initial: { opacity: 0, y: 20 },
          hovered: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          variants={{
            initial: { opacity: 0, height: 0 },
            hovered: { opacity: 1, height: "auto" },
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <p className="text-sm text-primary-white mb-2">{summary}</p>
          <button
            className="px-8 py-1 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 ease-in-out"
            onClick={handleClick}
          >
            Details
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkCardFeatured;
