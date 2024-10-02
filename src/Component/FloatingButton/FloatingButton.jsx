import React, { useEffect, useRef } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import phone from '../../assets/phone_white.svg'

const FloatingButton = ({ locomotiveInstance }) => {
  const buttonRef = useRef(null);
  const y = useSpring(0, { stiffness: 100, damping: 30 });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact`);
  };

  useEffect(() => {
    if (!buttonRef.current || !locomotiveInstance) return;

    const handleScroll = (instance) => {
      const scrollY = instance.scroll.y;
      y.set(scrollY);
    };

    locomotiveInstance.on('scroll', handleScroll);

    return () => {
      locomotiveInstance.off('scroll', handleScroll);
    };
  }, [y, locomotiveInstance]);

  const opacity = useTransform(y, [0, 200], [0, 1]);
  const scale = useTransform(y, [0, 200], [0.8, 1]);

  return (
    <motion.button
      ref={buttonRef}
      className="floating_button fixed bottom-4 right-14 bg-gradient-to-r from-primary-orange to-orange-600 text-white px-4 py-2 rounded-full shadow-lg z-[1000] cursor-pointer flex flex-row justify-center items-center gap-2 font-medium shadow-lg hover:shadow-xl" 
      style={{
        opacity,
        scale,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
   
     <p> Contact Us!</p>
    </motion.button>
  );
};

export default FloatingButton;
