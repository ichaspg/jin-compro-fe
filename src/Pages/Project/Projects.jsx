import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Transition from "../../Transition";
import "./project.css";
import arrow from "../../assets/arrow_90.svg";
import ProjectCard from "./ProjectCard/ProjectCard";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";
import Section from "../../Component/Anim/Section";
import ProjectCardNew from "./ProjectCard/ProjectCardNew";
import PartnerStill from "../../Component/PartnerStill/PartnerStill";
import placeholder from "../../assets/placeholder_contact.png";
import arrowdiag from "../../assets/arrow_diag.svg";
import {BASE_API} from "../../constant/endpoint";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Projects = ({ works, categories }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [[page, direction], setPage] = useState([0, 0]);

  const categoriesItem = categories?.data || [];
  const worksItem = works?.data || [];
  const featuredWorksData = Array.isArray(worksItem)
    ? worksItem.filter((work) => work?.attributes?.Featured === true)
    : [];
  const filteredWorks =
    selectedCategory === "All"
      ? worksItem
      : worksItem.filter(
          (work) =>
            work?.attributes?.category?.data?.attributes?.title ===
            selectedCategory
        );

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentIndex = Math.abs(page % featuredWorksData.length);

  const handleNavigate = (work) => {
    navigate("/workdetail", {
      state: {
        category: work?.attributes?.category?.data?.attributes?.title,
        images: work?.attributes?.image?.data,
        title: work?.attributes?.title,
        summary: work?.attributes?.summary,
        description: work?.attributes?.description,
        thumbnail: work?.attributes.thumbnail?.data?.attributes?.url
      },
    });
  };

  useEffect(() => {
    if (window.locomotiveScroll) {
      window.locomotiveScroll.update();
    }
  }, [selectedCategory, page]);

  return (
    <Section>
      <div data-scroll-section>
        {/* Featured Works Slider Section */}
        <div className="relative h-[80vh]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0"
            >
            <div className="w-screen h-screen">
              {(() => {
                const imageUrl = `${BASE_API}${featuredWorksData[currentIndex]?.attributes.thumbnail?.data?.attributes?.url || ''}`;
                const currentWork = featuredWorksData[currentIndex];
                return (
                  <div
                    className="relative w-full h-full"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40">
                      <div
                        className="absolute bottom-32 left-20 text-white"
                        data-scroll
                        data-scroll-speed="0.3"
                      >
                        <h3 className="text-4xl font-bold mb-4">
                          {currentWork?.attributes?.title}
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl">
                          {currentWork?.attributes?.summary}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary-white text-primary-green rounded-full px-8 py-3 flex items-center gap-2"
                          onClick={() => handleNavigate(currentWork)}
                        >
                          See more
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
            </motion.div>
          </AnimatePresence>

          {/* Stripe Pagination */}
          <div className="absolute top-[105%] right-[34%] w-full flex justify-center gap-3 z-10">
            {featuredWorksData.map((_, index) => (
              <motion.button
                key={index}
                className="relative"
                onClick={() => setPage([index, index > page ? 1 : -1])}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-12 bg-primary-orange' : 'w-6 bg-primary-white bg-opacity-50'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-container padding">
          <div className="work__header mt-20">
            <img
              src={arrow}
              alt="Featured Works Arrow"
              className="work__header-arrow"
            />
            <div className="flex flex-col gap-2">
              <h2 className="work__header-title">Our Completed Projects</h2>
            </div>
          </div>
          
          <p className="text-lg text-primary-white font-light mt-[-20px]">
            Here is a showcase of the projects we've successfully completed in
            the past, highlighting our expertise and accomplishments.
          </p>

          <div className="project__work_container">
            <div className="project__category_container flex flex-wrap justify-center gap-2 my-4">
              <div className="project__category_item">
                <button
                  className={`project__category_button ${
                    selectedCategory === "All" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("All")}
                >
                  All
                </button>
              </div>
              {categoriesItem.length > 0 &&
                categoriesItem.map((category) => (
                  <div key={category.id} className="project__category_item">
                    <button
                      className={`project__category_button ${
                        selectedCategory === category.attributes.title
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedCategory(category.attributes.title)
                      }
                    >
                      {category.attributes.title}
                    </button>
                  </div>
                ))}
            </div>

            <div className="project__card_container">
              <AnimatePresence>
                {filteredWorks.length > 0 ? (
                  filteredWorks.map((work, i) => (
                    <motion.div
                      key={`p_${i}`}
                      className={`project-grid-item`}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <ProjectCardNew
                        category={
                          work?.attributes?.category?.data?.attributes?.title
                        }
                        images={work?.attributes?.image?.data}
                        title={work?.attributes?.title}
                        summary={work?.attributes?.summary}
                        description={work?.attributes?.description}
                        thumbnail={work?.attributes?.thumbnail}
                      />
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center col-span-full">
                    No projects available
                  </p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <PartnerStill />
        
        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundImage: `url(${placeholder})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="self-center mt-20 flex flex-col justify-center items-center padding"
        >
          <div className="flex flex-col items-center">
            <p className="text-4xl font-normal text-center text-primary-white">
              Start Connect with us
            </p>
            <button className="self-center mt-4">
              <div className="bg-primary-white text-primary-green text-base font-medium rounded-3xl py-3 px-4 flex flex-row">
                <p>CONTACT US</p>
                <img src={arrowdiag} alt="" className="mx-3" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Section>
  );
};

export default Transition(Projects);