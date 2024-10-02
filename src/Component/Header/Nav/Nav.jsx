import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { links, footerLinks } from "./data";
import { perspective, slideIn, blur } from "./anim";
import "./nav.css";

export default function Nav({ onCloseMenu }) {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = () => {
    onCloseMenu();
  };

  return (
    <div className="nav">
      <div className="nav__body">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.div
              key={`b_${i}`}
              className="nav__linkContainer"
              onMouseOver={() => setSelectedLink(i)}
              onMouseLeave={() => setSelectedLink(null)}
              variants={blur}
              animate={
                selectedLink !== null && selectedLink !== i ? "open" : "closed"
              }
            >
              <Link to={href} onClick={handleLinkClick}>
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  {title}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
      <motion.div className="nav__footer">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <Link to={href} key={`f_${i}`} onClick={handleLinkClick}>
              <motion.div
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {title}
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
