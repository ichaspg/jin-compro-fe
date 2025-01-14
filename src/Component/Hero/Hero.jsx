import { motion } from "framer-motion";
import "./hero.css";
import HeroArrow from "../../assets/hero_arrow.svg";
import { useNavigate } from "react-router-dom";
import LogoOrangeBig from "../../assets/logo_orange_big.svg";
import LogoOrange from "../../assets/logo_orange.png";
import { Move, MoveDown } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects`);
  };

  return (
    <div
      className="hero__bg h-screen relative flex flex-col"
      data-scroll-section
    >
      <div className="mt-32 padding">
        <span className="font-normal text-4xl sm:text-32xl lg:text-6xl text-center text-white max-w-screen-lg">
          <span className="bg-gradient-to-r from-gray-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
            OUR MISSION
          </span>{" "}
          IS TO ELEVATE HARDWARE <br />
          QUALITY AND STANDARDS FOR EVERY <br /> INDUSTRY, BUSINESS, AND
          SOLUTION <br /> WE PROVIDE.
        </span>
      </div>
      <div className="mt-auto flex">
        <img src={LogoOrangeBig} alt="" className="w-96" />
        <div className=" text-white ml-10">
          <p className="text-lg mb-2 max-w-xs flex items-center leading-tight">
            Let's shape
            <img
              src={LogoOrange}
              alt="Logo Orange"
              className="inline-block mx-1 w-6 h-6"
            />
            the future together
          </p>
          <p className="text-lg flex items-center leading-tight">
            -
            <span
              className="inline-block w-4 h-4 rounded-full"
              style={{ backgroundColor: "#C45324" }}
            ></span>{" "}
            ne connection at a time.
          </p>
          <button
            onClick={handleClick}
            className="flex font-light text-xl items-center gap-2 px-3 py-3 bg-primary-green text-primary-white rounded-xl border-2 border-white hover:bg-opacity-90 transition-all mt-3"
          >
            Start Exploring
            <MoveDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
