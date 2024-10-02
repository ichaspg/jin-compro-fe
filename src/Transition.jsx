import { motion } from "framer-motion";
import { useEffect } from "react";

const Transition = (OgComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }, []);

    return (
      <>
        <OgComponent {...props} />
        <motion.div
          className="reveal-transition"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          exit={{ x: "100%" }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96],
            repeat: 0,
          }}
        />
      </>
    );
  };
};

export default Transition;
