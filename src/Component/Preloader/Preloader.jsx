import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import "./preloader.css";
import logo from "../../assets/logo.svg";

const words = [
  "Integrasi",
  "Integración",
  "Intégration",
  "Integrazione",
  "Integration",
  "インテグレーション",
  "整合",
  "Интеграция",
  "Integratie",
  "İntegrasyon",
  "Integrazione",
  "Integracja",
  "التكامل",
  "Integração",
  "Samþætting",
  "Integratie",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [hasTransitioned, setHasTransitioned] = useState(false); // New state for transition

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (index < words.length - 1) {
          setIndex(index + 1);
        } else {
          setHasTransitioned(true);
        }
      },
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timer);
  }, [index]);

  // Define unique path animations for each SVG
  const createCurvePath = (width, height) => ({
    initial: {
      d: `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
        height + 300
      } 0 ${height} L0 0`,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: `M0 0 L${width} 0 L${width} ${height} Q${
        width / 2
      } ${height} 0 ${height} L0 0`,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  });

  const curve = createCurvePath(dimension.width, dimension.height);

  return (
    <motion.div
      className={`preloader__introduction ${hasTransitioned ? "gradient" : ""}`}
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {words[index]}
          </motion.p>

          <svg className="preloader__svg1">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>

          <svg className="preloader__svg2">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
