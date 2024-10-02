import React from "react";
import { images } from "./data";
import "./partner.css";
import { motion } from "framer-motion";

const Partner = () => {
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div data-scroll-section>
      <p className="text-2xl text-center font-light text-primary-white py-4">
        CLIENT & PARTNERS WE'VE MET ON OUR JOURNEY
      </p>
      <div className="partner__container overflow-hidden">
        <motion.div
          className="partner__slider flex"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 140,
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <img src={image.src} alt={image.alt} width="100" height="100" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
