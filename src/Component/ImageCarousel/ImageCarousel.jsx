import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BASE_API } from '../../constant/endpoint';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback in case images is not provided or is empty
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Get the current image URL
  const currentImageUrl = `${BASE_API}${images[currentIndex]?.attributes?.url}`;

  return (
    <div className="relative h-[500px] w-full lg:h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Display current image */}
          <img
            src={currentImageUrl}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <button
          onClick={prevSlide}
          className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
