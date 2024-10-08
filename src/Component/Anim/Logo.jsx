import { motion } from "framer-motion";
import "./logo.css";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.3;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 2,
          bounce: 0,
        },
        opacity: {
          delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };
  },
};

const Logo = () => {
  return (
    <div className="svg-container">
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2.59527 0H19.2271C19.3998 0 19.5561 0.102769 19.6245 0.261431L28.817 21.6399L38.0096 0.261431C38.078 0.102769 38.2343 0 38.4071 0H55.0389C55.4244 0 55.614 0.470362 55.3422 0.743834C52.2661 3.8385 49.4942 6.74138 46.9811 9.37308C38.6078 18.1419 33.1092 23.9929 28.817 23.8039C24.5248 23.9929 19.0264 18.1419 10.653 9.37308C8.13996 6.74138 5.36799 3.8385 2.29197 0.743834C2.02014 0.470362 2.20968 0 2.59527 0Z"
          fill="#E8ECEE"
          variants={draw}
          initial="hidden"
          animate="visible"
          custom={0}
        />
        <motion.path
          d="M2.59527 58H19.2271C19.3998 58 19.5561 57.8972 19.6245 57.7386L28.817 36.3601L38.0096 57.7386C38.078 57.8972 38.2343 58 38.4071 58H55.0389C55.4244 58 55.614 57.5296 55.3422 57.2562C52.2661 54.1615 49.4942 51.2586 46.9811 48.6269C38.6078 39.8581 33.1092 34.0071 28.817 34.1961C24.5248 34.0071 19.0264 39.8581 10.653 48.6269C8.13996 51.2586 5.36799 54.1615 2.29197 57.2562C2.02014 57.5296 2.20968 58 2.59527 58Z"
          fill="#E8ECEE"
          variants={draw}
          initial="hidden"
          animate="visible"
          custom={1}
        />
        <motion.path
          d="M58 2.99421V19.6258C58 19.7985 57.8972 19.9548 57.7386 20.0232L36.3598 29.2156L57.7386 38.408C57.8972 38.4765 58 38.6327 58 38.8055V55.437C58 55.8226 57.5296 56.0121 57.2562 55.7403C54.1614 52.6644 51.2585 49.8924 48.6268 47.3794C39.8578 39.0062 34.0067 33.5077 34.1958 29.2156C34.0067 24.9234 39.8578 19.4251 48.6268 11.0518C51.2585 8.53882 54.1614 5.76689 57.2562 2.69092C57.5296 2.41909 58 2.60863 58 2.99421Z"
          fill="#E8ECEE"
          variants={draw}
          initial="hidden"
          animate="visible"
          custom={2}
        />
        <motion.path
          d="M2.29238e-06 2.99421L1.56538e-06 19.6258C1.55783e-06 19.7985 0.102772 19.9548 0.261436 20.0232L21.6402 29.2156L0.261435 38.408C0.102771 38.4765 7.34551e-07 38.6327 7.26998e-07 38.8055L0 55.437C-1.68546e-08 55.8226 0.470369 56.0121 0.743845 55.7403C3.83856 52.6644 6.74148 49.8924 9.37322 47.3794C18.1422 39.0062 23.9933 33.5077 23.8042 29.2156C23.9933 24.9234 18.1422 19.4251 9.37322 11.0518C6.74148 8.53882 3.83856 5.76689 0.743847 2.69092C0.470371 2.41909 2.30924e-06 2.60863 2.29238e-06 2.99421Z"
          fill="#E8ECEE"
          variants={draw}
          initial="hidden"
          animate="visible"
          custom={3}
        />
        <motion.path
          d="M32.4603 28.9636C32.4603 30.8759 30.9101 32.426 28.9979 32.426C27.0856 32.426 25.5355 30.8759 25.5355 28.9636C25.5355 27.0514 27.0856 25.5013 28.9979 25.5013C30.9101 25.5013 32.4603 27.0514 32.4603 28.9636Z"
          fill="#E8ECEE"
          variants={draw}
          initial="hidden"
          animate="visible"
          custom={4}
        />
      </svg>
    </div>
  );
};

export default Logo;
