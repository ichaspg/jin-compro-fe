import "./mailer.css";
import arrow_right from "../../assets/arrow_right.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/card_arrow.svg";

const Mailer = () => {
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
    <div className="mailer__container" data-scroll-section>
      <div className="max-container padding">
        <div className="mailer___header">
          <div className="flex flex-row justify-start items-center">
            <p className="text-4xl mr-20 text-primary-white font-bold">
              Let's Collaborate
            </p>
            <img src={arrow} alt="Arrow" className="w-14" />
          </div>
          <p className="text-2xl my-3 font-light text-primary-white">
            Interested in learning more? <br /> Let's discuss your possible
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
                    isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
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
  );
};

export default Mailer;
