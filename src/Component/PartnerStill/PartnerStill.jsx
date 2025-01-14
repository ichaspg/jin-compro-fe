import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "./data";

const PartnerStill = () => {
  const ITEMS_PER_ROW = 3;
  const MAX_ROWS = 2;
  const ITEMS_PER_PAGE = ITEMS_PER_ROW * MAX_ROWS;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentImages = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const currentImages = [];

    // Fill all 6 slots with images, wrapping around to the start if needed
    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
      const imageIndex = (startIndex + i) % images.length;
      currentImages.push(images[imageIndex]);
    }

    return currentImages;
  };

  return (
    <div className="flex flex-col">
      <div className="mt-10">
        <h1 className="text-4xl text-primary-white text-center font-medium">
          Clients We are Proudly Working with
        </h1>
        <p className="text-2xl text-primary-white text-center font-light">
          We build trusted partnerships to drive innovation, deliver solutions,
          and create success across industries.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 mt-10 gap-5 items-center mr-10">
        {getCurrentImages().map((image, index) => (
          <div
            key={`${currentPage}-${index}`}
            className="mx-4 border-2 border-[#B7B7B7] rounded-lg flex justify-center items-center p-6 min-h-[600px] max-h-[600px] min-w-[600px] max-w-[600px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`${currentPage}-${image.src}`}
                src={image.src}
                alt={image.alt}
                className="max-h-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerStill;
