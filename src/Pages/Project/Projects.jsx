import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import from Framer Motion
import logo from "../../assets/logo.svg";
import Transition from "../../Transition";
import "./project.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";
import Section from "../../Component/Anim/Section";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const Projects = ({ works, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Check if categories and works exist before accessing data
  const categoriesItem = categories?.data || [];
  const worksItem = works?.data || [];

  // Filter works based on selected category
  const filteredWorks =
    selectedCategory === "All"
      ? worksItem
      : worksItem.filter(
          (work) =>
            work?.attributes?.category?.data?.attributes?.title ===
            selectedCategory
        );

  useEffect(() => {
    if (window.locomotiveScroll) {
      window.locomotiveScroll.update();
    }
  }, [selectedCategory]);

  return (
    <>
      <Section>
        <div className="max-container w-full padding" data-scroll-section>
          <div className="max-container">
            <div className="flex flex-col text-2xl lg:text-6xl font-bold justify-center items-center padding text-primary-white gap-2 mt-5">
              <p>YOUR TRUSTED</p>
              <div className="flex flex-col sm:flex-row items-center">
                <p>INTEGRATION</p>
                <img
                  src={logo}
                  alt=""
                  className="mx-4 w-8 h-8 sm:w-24 sm:h-24 lg:w-auto lg:h-auto"
                />
                <p>PARTNER</p>
              </div>
              <p className="text-lg font-light w-full sm:w-[90%] md:w-[717px] text-center my-4 mx-2">
                Here is a showcase of the projects we've successfully completed
                in the past, highlighting our expertise and accomplishments.
              </p>
            </div>
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

              <div className="project__card_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
                        <ProjectCard
                          category={
                            work?.attributes?.category?.data?.attributes?.title
                          }
                          images={work?.attributes?.image?.data}
                          title={work?.attributes?.title}
                          summary={work?.attributes?.summary}
                          description={work?.attributes?.description}
                        />
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-center col-span-full">No projects available</p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <Mailer />
        <Footer />
      </Section>
    </>
  );
};

export default Transition(Projects);
