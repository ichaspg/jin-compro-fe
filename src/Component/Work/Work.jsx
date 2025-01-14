import "./work.css";
import arrow from "../../assets/arrow_90.svg";
import WorkCard from "./WorkCard/WorkCard";
import WorkCardFeatured from "../WorkCardFeatured/WorkCardFeatured";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const Work = ({ works }) => {
  // Properly destructure works prop
  const worksData = works?.data;
  const carouselRef = useRef();

  // Log raw data
  console.log("Raw works data:", worksData);

  const featuredWorksData = Array.isArray(worksData)
    ? worksData.filter((work) => {
        console.log("Checking work:", work);
        return work?.attributes?.Featured === true;
      })
    : [];

  // Log filtered data
  console.log("Filtered featured works:", featuredWorksData);

  useEffect(() => {
    console.log("Number of featured works:", featuredWorksData.length);
  }, [featuredWorksData]);

  if (!featuredWorksData?.length) {
    console.log("No featured works available");
    return null;
  }

  return (
    <section className="work__container" data-scroll-section>
      <div className="work__content">
        <div className="work__header">
          <img
            src={arrow}
            alt="Featured Works Arrow"
            className="work__header-arrow"
          />
          <h2 className="work__header-title">FEATURED WORKS</h2>
        </div>
        <motion.div
          ref={carouselRef}
          className="overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={carouselRef}
            className="flex flex-row gap-6"
            style={{
              minWidth: "min-content",
              width: "auto",
            }}
          >
            {featuredWorksData.map((work, i) => {
              console.log(`Rendering work ${i}:`, work);
              const categoryTitle =
                work?.attributes?.category?.data?.attributes?.title;
              const imageUrl = work?.attributes?.image?.data;
              const { title, description, summary } = work?.attributes || {};

              if (!categoryTitle || !imageUrl || !title) {
                console.log(`Skipping work ${i} due to missing data`);
                return null;
              }

              return (
                <motion.div
                  key={`work_${i}`}
                  className="flex-shrink-0"
                  style={{
                    width: "250px",
                    minWidth: "300px",
                  }}
                >
                  <WorkCardFeatured
                    categoryTitle={categoryTitle}
                    imageUrl={imageUrl}
                    title={title}
                    description={description || ""}
                    summary={summary || ""}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
