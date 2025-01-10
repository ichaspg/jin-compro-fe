import { motion } from "framer-motion";
import "./hero.css";
import HeroArrow from "../../assets/hero_arrow.svg";
import { useNavigate } from "react-router-dom";
import LogoGray from "../../assets/logo_grey.png"
import LogoOrange from "../../assets/logo_orange.png"
import { Move, MoveDown } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects`);
  };

  return (
      <div className="hero__bg h-screen relative flex flex-col padding" data-scroll-section>
        <div
          className="flex-1 flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${LogoGray})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "15%",
            backgroundPosition: "center",
          }}
        >
          <span className="font-bold text-4xl sm:text-32xl lg:text-6xl text-center text-white max-w-screen-lg">
            Fusing Forward with <br />
            Connected Technology<span className="ml-0 inline">.</span>
          </span>
          <span className="font-normal text-sm md:text-base lg:text-lg text-center text-white mt-5 max-w-screen-md">
            To provide a solution for seamless connection between Tech & Human
          </span>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
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
            ></span> ne connection at a time.
          </p>
          <button 
            onClick={handleClick}
            className="flex font-light text-xl items-center gap-2 px-3 py-3 bg-primary-green text-primary-white rounded-xl border-2 border-white hover:bg-opacity-90 transition-all mt-3"
          >
            Start Exploring
            <MoveDown/>
          </button>
        </div>
      </div>
  );
};

export default Hero;