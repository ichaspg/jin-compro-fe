import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollReveal = () => {
  // Use scroll hook to monitor scroll progress
  const { scrollYProgress } = useScroll();

  // Create a range of motion for the horizontal sliding effect
  const translateX = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);

  return (
    <div className="w-screen overflow-hidden bg-gray-100 py-8">
      <h1 className="text-center text-3xl font-bold mb-6">HOW IT WORKS</h1>
      <motion.div className="flex w-[600%]" style={{ translateX }}>
        <motion.div className="flex-1 min-w-[16.66%] h-80 flex items-center justify-center bg-pink-200 relative p-8">
          <div className="text-6xl font-bold absolute left-4 top-4">1</div>
          <div className="text-lg max-w-sm text-center">You contact us.</div>
        </motion.div>
        <motion.div className="flex-1 min-w-[16.66%] h-80 flex items-center justify-center bg-pink-300 relative p-8">
          <div className="text-6xl font-bold absolute left-4 top-4">2</div>
          <div className="text-lg max-w-sm text-center">We respond within 24 hours.</div>
        </motion.div>
        <motion.div className="flex-1 min-w-[16.66%] h-80 flex items-center justify-center bg-pink-400 relative p-8">
          <div className="text-6xl font-bold absolute left-4 top-4">3</div>
          <div className="text-lg max-w-sm text-center">We schedule a meeting.</div>
        </motion.div>
        <motion.div className="flex-1 min-w-[16.66%] h-80 flex items-center justify-center bg-pink-500 relative p-8">
          <div className="text-6xl font-bold absolute left-4 top-4">4</div>
          <div className="text-lg max-w-sm text-center">You review our proposal.</div>
        </motion.div>
        <motion.div className="flex-1 min-w-[16.66%] h-80 flex items-center justify-center bg-pink-600 relative p-8">
          <div className="text-6xl font-bold absolute left-4 top-4">5</div>
          <div className="text-lg max-w-sm text-center">We start working.</div>
        </motion.div>
        <motion.div className="flex-1 min-w-[16.66%] h-80 flex items-center justify-center bg-pink-700 relative p-8">
          <div className="text-6xl font-bold absolute left-4 top-4">6</div>
          <div className="text-lg max-w-sm text-center">Project completed!</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
