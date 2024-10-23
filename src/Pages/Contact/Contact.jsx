import React from "react";
import Transition from "../../Transition";
import chat from "../../assets/chat.svg";
import { useState } from "react";
import phone from "../../assets/phone.svg";
import map from "../../assets/map.svg";
import logo from "../../assets/logo_full_green.svg";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Section from "../../Component/Anim/Section";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EMAILJS_CONFIG from "../../constant/mailer";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loadingToast = toast.loading("Sending your message...");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,         
        to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
        phone_number: formData.phoneNumber,
        message: formData.message,
        subject: `New Contact Form Message from ${formData.name}`,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.update(loadingToast, {
          render: "Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast.update(loadingToast, {
        render: "Failed to send message. Please try again later!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <Section>
      <ToastContainer
          position="bottom-right"
          theme="dark"
          pauseOnFocusLoss={false}
        />
        <div className="max-container padding" data-scroll-section>
          <div className="bg-primary-white w-full rounded-xl border-black my-20 p-5 md:p-10 lg:p-14 flex flex-col lg:flex-row">
            <div className="flex flex-col gap-10 mb-10 lg:mb-0">
              <div>
                <img src={logo} alt="" className="size-20" />
              </div>
              <ContactInfo 
                imgSrc={chat} 
                title="Chat to us" 
                description="Our team is ready to help." 
                contactInfo="code@jayaintegrasi.id" 
              />
              <ContactInfo 
                imgSrc={map} 
                title="Visit Us" 
                description="Come to our office and have a chat." 
                contactInfo="Fajar Raya Estate Blok A1 No.8 Cimahi Utara" 
              />
              <ContactInfo 
                imgSrc={phone} 
                title="Call Us" 
                description="Every Day Every Hour" 
                contactInfo="0855-7190-021" 
              />
            </div>
            <div className="bg-primary-green w-full lg:w-7/12 rounded-xl p-8">
              <div className="flex flex-col">
                <p className="font-semibold text-3xl md:text-4xl text-primary-white leading-none">
                  Let's collaborate on your next big project.
                </p>
                <p className="text-lg md:text-xl font-light text-secondary-white tracking-wide my-3 w-full md:w-2/3">
                  Interested in learning more? Let's discuss your possible solutions.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <FormInput 
                  label="Name" 
                  placeholder="Johnny Doe" 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                />
                <FormInput 
                  label="Email" 
                  placeholder="JohnnyDoe@mail.com" 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                <FormInput 
                  label="Phone Number" 
                  placeholder="089221412412" 
                  type="tel" 
                  name="phoneNumber" 
                  value={formData.phoneNumber} 
                  onChange={handleChange} 
                />
                <div className="mt-8">
                  <label htmlFor="message" className="block text-2xl font-medium text-primary-white">Message</label>
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
                      boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`submit-button mt-8 py-2 bg-primary-white rounded-full flex items-center overflow-hidden ${isHovered ? "justify-between" : "justify-center"}`}
                  initial={{ width: "56px" }}
                  whileHover={{ width: "168px" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <motion.span
                    className="button-text whitespace-nowrap ml-5 text-2xl font-bold text-primary-green flex gap-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {"SEND".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
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


const ContactInfo = ({ imgSrc, title, description, contactInfo }) => (
  <div className="flex flex-row">
    <img src={imgSrc} alt={title} className="size-10 my-3 mr-3" />
    <div className="flex flex-col">
      <p className="font-medium text-lg">{title}</p>
      <p className="text-sm">{description}</p>
      <p className="text-xl font-bold my-2">{contactInfo}</p>
    </div>
  </div>
);

const FormInput = ({ label, placeholder, type, name, value, onChange }) => (
  <div className="mt-8">
    <label htmlFor={name} className="my-4 block text-2xl font-medium text-primary-white">
      {label}
    </label>
    <motion.input
      placeholder={placeholder}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
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
);

export default Transition(Contact);
