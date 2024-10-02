import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "./data";
import arrow from "../../../assets/arrow.svg";
import "./category.css";
import CategoryCard from "./CategoryCard/CategoryCard";

const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    scale: 1,
    rotate: 0,
    transition: {
      opacity: { duration: 0.1, ease: "easeInOut" },
      height: { duration: 0.3, ease: "easeInOut" },
      scale: { duration: 0.1, ease: "easeInOut" },
      rotate: { duration: 0.1, ease: "easeInOut" },
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    scale: 0.98,
    rotate: 0,
    transition: {
      opacity: { duration: 0.4, ease: "easeInOut" },
      height: { duration: 0.4, ease: "easeInOut" },
      scale: { duration: 0.4, ease: "easeInOut" },
      rotate: { duration: 0.4, ease: "easeInOut" },
      when: "afterChildren",
    },
  },
};

const childVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.4, ease: "easeInOut" },
      height: { duration: 0.4, ease: "easeInOut" },
      scale: { duration: 0.4, ease: "easeInOut" },
      rotate: { duration: 0.4, ease: "easeInOut" },
    },
  },
  closed: { opacity: 0, y: -20 },
};

const Category = ({ services, selectedSteps }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [categorySelected, setCategorySelected] = useState(
    "Application Development"
  );
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const getArrowRotation = (index) =>
    index === activeIndex ? "rotate(90deg)" : "rotate(0deg)";

  const handleCategoryClick = (index, title) => {
    setActiveIndex(index === activeIndex ? null : index);
    setCategorySelected(title);
  };

  const filteredServices = useMemo(() => {
    if (!services || !services.data || !Array.isArray(services.data)) {
      console.error("services.data is not an array:", services);
      return [];
    }
    return services.data.filter(
      (service) =>
        service.attributes.category.data.attributes.title === categorySelected
    );
  }, [services, categorySelected]);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (contentRef.current) {
        setContentWidth(contentRef.current.scrollWidth);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);

    return () => window.removeEventListener("resize", updateWidths);
  }, [filteredServices]);

  const dragConstraints = useMemo(() => {
    const maxDrag = contentWidth - containerWidth;
    return { right: 0, left: -Math.max(0, maxDrag + 30) };
  }, [containerWidth, contentWidth]);

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index} className="category-container">
          <button
            className={`category-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleCategoryClick(index, category.title)}
          >
            <img className="category-icon" src={category.icon} alt="" />
            <span className="category-title">{category.title}</span>
            <img
              className="category-arrow"
              src={arrow}
              alt=""
              style={{
                transform: getArrowRotation(index),
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="category-menu"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  width: "100%",
                  gap: "10px",
                  padding: "0 20px",
                  overflow: "hidden",
                }}
                ref={containerRef}
              >
                <motion.div
                  drag="x"
                  dragConstraints={dragConstraints}
                  dragTransition={{ bounceStiffness: 30, bounceDamping: 8 }}
                  className="flex gap-4 p-2"
                  ref={contentRef}
                >
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <motion.div key={service.id} variants={childVariants}>
                        <CategoryCard
                          service={service}
                          selectedSteps={selectedSteps}
                        />
                      </motion.div>
                    ))
                  ) : (
                    <motion.p
                      className="no-services-message"
                      variants={childVariants}
                    >
                      No services found for {category.title}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Category;
