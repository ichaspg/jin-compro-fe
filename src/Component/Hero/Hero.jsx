import { motion } from "framer-motion";
import "./hero.css";
import HeroArrow from "../../assets/hero_arrow.svg";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects`);
  };
  return (
    <div className="hero__bg" data-scroll-section>
      <div className="flex flex-col justify-center items-center h-screen">
        <span className="font-bold text-6xl text-center text-white max-w-screen-lg">
          Connecting Your World <br /> Seamlessly
        </span>
        <span className="font-normal text-base text-center text-white mt-5 max-w-screen-md">
          At our core, we are committed to seamlessly connecting your world
          through innovative technology solutions.
        </span>
        <div className="mt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mt-6 px-8 py-3 bg-primary-white text-primary-orange font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300"
            onClick={handleClick}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
