import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import from Framer Motion
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const Projects = ({ works, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
            <div className="flex flex-col text-4xl text-center lg:text-6xl font-bold justify-center items-center padding text-primary-white gap-2 mt-5">
              <p>YOUR TRUSTED</p>
              <div className="flex flex-col sm:flex-row items-center">
                <p>INTEGRATION</p>
                <img
                  src={logo}
                  alt=""
                  className="mx-4 w-10 h-10 sm:w-auto sm:h-auto lg:w-auto lg:h-auto"
                />
                <p>PARTNER</p>
              </div>
              <p className="text-lg font-light w-full sm:w-[90%] md:w-[717px] text-center my-4 mx-2">
                Here is a showcase of the projects we've successfully completed
                in the past, highlighting our expertise and accomplishments.
              </p>
            </div>
            <div className="work__header">
              <img
                src={arrow}
                alt="Featured Works Arrow"
                className="work__header-arrow"
              />
              <div className="flex flex-col gap-2 ">
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

              <div className="project__card_container ">
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
            className="self-center ml-3 mt-20 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <p className="text-4xl font-normal text-center text-primary-white">
                Start Connect with us
              </p>
              <button className="self-center mt-4">
                <div className="bg-primary-white text-primary-green text-base font-medium rounded-3xl py-3 px-4 flex flex-row ">
                  <p>CONTACT US</p>
                  <img src={arrowdiag} alt="" className="mx-3" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </Section>
    </>
  );
};

export default Transition(Projects);
