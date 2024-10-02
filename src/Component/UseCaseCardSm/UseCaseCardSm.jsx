import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../../constant/endpoint"; // Ensure BASE_API is imported for image URLs

const UseCaseCardSm = ({ title, summary, description, date, img }) => {
  const navigate = useNavigate();
  const firstImageUrl = img?.[0]?.attributes?.url;

  const handleNavigate = () => {
    navigate("/showcasedetail", {
      state: { title, summary, description, date, img },
    });
  };

  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-gray-100 rounded-2xl p-6 w-96 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="hover"
      onClick={handleNavigate}
    >
      <motion.div
        className="absolute inset-0 bg-orange-500 rounded-full"
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        variants={{
          hover: ({ x, y }) => ({
            scale: 4,
            x: x - 192,
            y: y - 108,
            transition: { duration: 1.2, ease: "easeInOut" },
          }),
          initial: {
            scale: 0,
            transition: { duration: 1.2, ease: "easeOut" },
          },
        }}
        custom={mousePosition}
        style={{
          originX: "50%",
          originY: "50%",
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="mb-4 w-8 h-8 flex items-center justify-center"
          variants={{
            hover: { color: "#ffffff" },
            initial: { color: "#0d9488" },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Globe className="w-8 h-8" />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mb-2 h-16 overflow-hidden"
          variants={{
            hover: { color: "#ffffff" },
            initial: { color: "#115e59" },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {title || "Default Title"}
        </motion.h2>

        <motion.p
          className="text-sm h-16 overflow-hidden"
          variants={{
            hover: { color: "#ffffff" },
            initial: { color: "#115e59" },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {summary || "Default summary of the use case..."}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default UseCaseCardSm;
