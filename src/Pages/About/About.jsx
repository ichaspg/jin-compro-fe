import React from "react";
import Transition from "../../Transition";
import { motion } from "framer-motion";
import team from "../../assets/team.png";
import { useEffect } from "react";
import arrow from "../../assets/arrow_90.svg";
import Mailer from "../../Component/Mailer/Mailer";
import Section from "../../Component/Anim/Section";
import Footer from "../../Component/Footer/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact`);
  };
  useEffect(() => {
    if (window.locomotiveScroll) {
      window.locomotiveScroll.update();
    }
  }, []);
  
  return (
    <>
      <Section>
        <div data-scroll-section className="max-container padding">
          {/* Main Introduction Section */}
          <div className="py-20 bg-primary-orange h-content rounded-2xl my-20 items-center flex flex-col">
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="text-4xl text-primary-white font-bold tracking-wide leading-none text-center md:w-2/3">
                Effortlessly Connecting Your World, Creating Seamless
                Experiences Everywhere
              </p>
              <p className="text-xl text-secondary-white font-light py-2 md:w-1/2 text-center">
                At our core, we are dedicated to seamlessly connecting your
                world by delivering cutting-edge technology solutions that
                simplify and enhance your everyday experiences.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="mt-6 px-6 py-3 bg-primary-white text-primary-orange font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300"
                onClick={handleClick}
              >
                Let's Talk
              </motion.button>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="self-start">
            <div className="flex flex-col md:flex-row">
              <div className="mx-12">
                <p className="text-xl mb-4 ml-2 text-primary-white tracking-wide">
                  Our Values
                </p>
                <p className="text-4xl md:text-6xl text-primary-white font-medium tracking-tighter">
                  Connecting Solutions, Empowering Success.
                </p>
                <p className="mt-4 text-primary-white font-light max-w-xl">
                  At Jaya Integrasi, we specialize in delivering seamless
                  integration solutions that connect your business systems
                  effortlessly. With a focus on innovation and reliability, we
                  help streamline your operations, ensuring that your
                  technology works in harmony to drive efficiency and growth.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <img src={team} alt="Team" className="w-full md:w-[400px] rounded-xl lg:w-[716px]" />
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="self-end mt-20">
            <div className="flex flex-col md:flex-row">
              <div className="mt-4 md:mt-0 mx-12">
                <img src={team} alt="Team" className="w-full md:w-[400px] rounded-xl lg:w-[716px]" />
              </div>
              <div className="text-center md:text-right">
                <p className="text-xl mb-4 ml-2 text-primary-white tracking-wide">
                  Our Mission
                </p>
                <p className="text-4xl md:text-6xl text-primary-white font-medium tracking-tighter">
                  Seamless Integration, Lasting Impact.
                </p>
                <p className="mt-4 text-primary-white font-light max-w-xl">
                  Our mission is to deliver innovative integration solutions
                  that empower businesses to operate efficiently, securely,
                  and seamlessly. We are committed to fostering long-term
                  success by connecting technology with business goals,
                  ensuring smooth, scalable, and reliable operations for our
                  clients.
                </p>
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

export default Transition(About);
