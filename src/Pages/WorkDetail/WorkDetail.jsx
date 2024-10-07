import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";
import Transition from "../../Transition";
import { BASE_API } from "../../constant/endpoint";
import arrow from "../../assets/arrow_90.svg";
import arrow_circle from "../../assets/arrow_cirlce.svg";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../Component/Anim/Section";

const WorkDetail = () => {
  const location = useLocation();
  const { category, images, title, summary, description } = location.state;
  const [[currentImageIndex, direction], setImage] = useState([0, 0]);

  useEffect(() => {
    if (window.locomotiveScroll) {
      window.locomotiveScroll.update();
    }
  }, []);

  const nextImage = () => {
    setImage(([current, dir]) => [
      current === images.length - 1 ? 0 : current + 1,
      1,
    ]);
  };

  const prevImage = () => {
    setImage(([current, dir]) => [
      current === 0 ? images.length - 1 : current - 1,
      -1,
    ]);
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <>
      <Section>
        <div data-scroll-section className="max-container padding w-full">
          <div className="flex flex-col my-20">
            <div className="flex flex-col">
              <p className="text-4xl font-medium text-primary-white">{title}</p>
              <p className="text-2xl font-light text-primary-white tracking-wider mb-5 mt-2">
                {category}
              </p>
              <img
                src={`${BASE_API}${images[0]?.attributes.url}`}
                alt=""
                className=" rounded-lg"
              />
            </div>
            <div className="flex flex-col py-10">
              <div className="flex gap-5">
                <img src={arrow} alt="" />
                <p className="text-4xl text-primary-white font-light ">
                  WHAT WE DO
                </p>
              </div>
              <p className="text-primary-white text-xl">{summary}</p>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex flex-row gap-5 items-center">
                <p className="text-4xl text-primary-white font-light ">
                  WHAT OUR OBJECTIVE
                </p>
                <img src={arrow} alt="" className="rotate-180" />
              </div>
              <p className="text-right mt-2  text-primary-white text-xl">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-col py-10">
            <div className="flex gap-5 mb-6">
              <img src={arrow} alt="" />
              <p className="text-4xl text-primary-white font-light ">
                {" "}
                GALLERY
              </p>
            </div>
            <div className="relative h-[300px] lg:h-[700px]">
              <AnimatePresence initial={false} custom={direction}>
                {images.map((image, index) => (
                  <motion.img
                    key={image.id}
                    src={`${BASE_API}${image.attributes.url}`}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate={index === currentImageIndex ? "center" : "exit"}
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className={`w-full h-full object-cover rounded-lg absolute top-0 left-0 ${
                      index === currentImageIndex ? "z-10" : "z-0"
                    }`}
                  />
                ))}
              </AnimatePresence>
              <motion.button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent bg-opacity-50  rounded-full z-20"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 5px 5px rgba(255, 255, 255, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={arrow_circle}
                  alt="Previous"
                  className="w-10 h-10 rotate-180"
                />
              </motion.button>

              <motion.button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent bg-opacity-50  rounded-full z-20"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 5px 5px rgba(255, 255, 255, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={arrow_circle} alt="Next" className="w-10 h-10" />
              </motion.button>
            </div>
          </div>
         
        </div>
        <Mailer />
        <Footer />
      </Section>
    </>
  );
};

export default Transition(WorkDetail);
