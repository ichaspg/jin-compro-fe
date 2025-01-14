import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../../constant/endpoint";

const ProductCard = ({ title, img, desc, summary, useCase }) => {
  const firstImageUrl = img?.[0]?.attributes?.url;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/productdetail", {
      state: { title, img, desc, summary, useCase },
    });
  };
  return (
    <motion.div
      className="relative lg:w-[580px] h-[480px] rounded-lg overflow-hidden cursor-pointer"
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

      {/* Overlay */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-black/50"
        variants={{
          initial: { height: "5rem" },
          hovered: { height: "100%" },
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h2 className="text-xl text-primary-white font-bold mb-1 mt-4">
          {title}
        </h2>
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
            onClick={handleNavigate}
          >
            Details
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
