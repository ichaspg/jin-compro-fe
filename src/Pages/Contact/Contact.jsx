import React from "react";
import Transition from "../../Transition";
import chat from "../../assets/chat.svg";
import { useState } from "react";
import phone from "../../assets/phone.svg";
import map from "../../assets/map.svg";
import logo from "../../assets/logo_full_green.svg";
import { motion } from "framer-motion";
import arrow_right from "../../assets/arrow_right.svg";
import Section from "../../Component/Anim/Section";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <Section>
        <div className="max-container padding" data-scroll-section>
          <div className="bg-primary-white w-full rounded-xl border-black my-20 p-14 flex flex-row">
            <div className="flex flex-col gap-10">
              <div className="">
                <img src={logo} alt="" className="size-20" />
              </div>
              <div className="flex flex-row">
                <img src={chat} alt="" className="size-10 my-3 mr-3" />
                <div className="flex flex-col">
                  <p className="font-medium text-lg">Chat to us</p>
                  <p className="text-sm">Our team is ready to help.</p>
                  <p className="text-xl font-bold my-2">
                    code@jayaintegrasi.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <img src={map} alt="" className="size-10 size-10 my-3 mr-3" />
                <div className="flex flex-col">
                  <p className="font-medium text-lg">Visit Us</p>
                  <p>Come to our office and have a chat.</p>
                  <p className="text-xl font-bold my-2">
                    Fajar Raya Estate Blok A1 No.8 <br /> Cimahi Utara
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <img src={phone} alt="" className="size-10 size-10 my-3 mr-3" />
                <div className="flex flex-col">
                  <p className="font-medium text-lg">Call Us</p>
                  <p className="text-sm">Every Day Every Hour</p>
                  <p className="text-xl font-bold my-2">0855-7190-021</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-green w-7/12 ml-auto rounded-xl p-8">
              <div className="flex flex-col">
                <p className="font-semibold text-4xl text-primary-white leading-none">
                  Let's collaborate on your next big project.
                </p>
                <p className="text-xl font-light text-secondary-white tracking-wide my-3 w-2/3">
                  Interested in learning more? Let's discuss your possible
                  solutions.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="mt-8">
                  <label
                    htmlFor="name"
                    className="my-4 block text-2xl font-medium text-primary-white"
                  >
                    Name
                  </label>
                  <motion.input
                    placeholder="Johnny Doe"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-transparent border-b border-primary-white focus:outline-none text-xl text-secondary-white my-2 py-2"
                    required
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{
                      scale: 1.05,
                      borderColor: "#fff",
                      boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-8">
                  <label
                    htmlFor="email"
                    className="my-4 block text-2xl font-medium text-primary-white"
                  >
                    Email
                  </label>
                  <motion.input
                    placeholder="JohnnyDoe@mail.com"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-transparent border-b border-primary-white focus:outline-none text-xl text-secondary-white my-4 py-2"
                    required
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{
                      scale: 1.05,
                      borderColor: "#fff",
                      boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-8">
                  <label
                    htmlFor="phoneNumber"
                    className="my-4 block text-2xl font-medium text-primary-white"
                  >
                    Phone Number
                  </label>
                  <motion.input
                    placeholder="089221412412"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-transparent border-b border-primary-white focus:outline-none text-xl text-secondary-white my-4 py-2"
                    required
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{
                      scale: 1.05,
                      borderColor: "#fff",
                      boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-8">
                  <label
                    htmlFor="message"
                    className="block text-2xl font-medium text-primary-white"
                  >
                    Message
                  </label>
                  <motion.textarea
                    placeholder="I want to build something"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-transparent border-b border-primary-white focus:outline-none text-xl text-secondary-white my-2 py-2"
                    rows="2"
                    required
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{
                      scale: 1.05,
                      borderColor: "#fff",
                      boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.button
                  type="submit"
                  className={`submit-button mt-8 py-2 bg-primary-white rounded-full flex items-center overflow-hidden ${
                    isHovered ? "justify-between" : "justify-center"
                  }`}
                  initial={{ width: "56px" }}
                  whileHover={{ width: "168px" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <motion.span
                    className="button-text whitespace-nowrap ml-5 text-2xl font-bold text-primary-green flex gap-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {"SEND".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isHovered
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.img
                    src={arrow_right}
                    alt="Submit arrow"
                    className="size-10 mr-24"
                    initial={{ x: 5 }}
                    animate={isHovered ? { x: 20 } : { x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Transition(Contact);
