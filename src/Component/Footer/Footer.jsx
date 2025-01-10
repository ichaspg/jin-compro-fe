import "./footer.css";
import { images } from "./data";
import logo from "../../assets/logo_shadow.svg";
import { useNavigate } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const email = "code@jayaintegrasi.id";
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  const handleEmailClick = () => {
    navigate("/contact");
  };

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start((i) => ({
      color: "#D9683C",
      scale: 1.1,
      transition: { delay: i * 0.03, duration: 0.3 },
    }));
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start((i) => ({
      color: "rgb(255, 255, 255)",
      scale: 1,
      transition: { delay: i * 0.03, duration: 0.3 },
    }));
  };

  return (
    <div
      className="footer__container rounded-t-[200px]"
      data-scroll-section
      style={{
        background: "linear-gradient(to top, #000000 20%, #2b2c2e 130%)",
      }}
    >
      <div className="max-container padding">
        <div className="flex flex-col gap3">
          <p className="text-sm lg:text-lg text-primary-white">
            ready to collaborate?
          </p>
          <motion.div
            className="lg:text-8xl font-bold tracking-tighter cursor-pointer w-fit text-3xl"
            onClick={handleEmailClick}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          >
            {email.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                animate={controls}
                initial={{ color: "rgb(255, 255, 255)", scale: 1 }}
                style={{ display: "inline-block" }}
                className="w-fit"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <div className="image__container flex flex-row justify-between items-center self-start mt-8">
            <div className="flex flex-row gap-5">
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={image.alt} width="30" height="30" />
                </div>
              ))}
            </div>
          </div>
          <hr className="mt-12 bg-[#68696A] h-[2px] border-none" />
          <img
            src={logo}
            className="w-[274px] h-[274px] mt-40 self-center justify-end"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
