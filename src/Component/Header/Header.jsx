import { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HeaderButton from "./Button/HeaderButton";
import Nav from "./Nav/Nav";
import logo_complete from "../../assets/logo_complete.svg";
import "./header.css";
import { links } from "./Nav/data";
import wa from "../../assets/whatsapp.svg";
const menu = (isMobile) => ({
  open: isMobile
    ? {
        width: "105vw",
        height: "105vh",
        top: "-70px",
        right: "-70px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
      }
    : {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
      },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
});

const backgroundVariants = {
  transparent: {
    backgroundColor: "rgba(1, 90, 106, 0)",
    backdropFilter: "blur(0px) saturate(100%)",
    WebkitBackdropFilter: "blur(0px) saturate(100%)",
    borderColor: "rgba(255, 255, 255, 0)",
  },
  solid: {
    backgroundColor: "rgba(1, 90, 106, 0.37)",
    backdropFilter: "blur(14px) saturate(147%)",
    WebkitBackdropFilter: "blur(14px) saturate(147%)",
    borderColor: "rgba(255, 255, 255, 0.125)",
  },
};

const navListVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItemVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const MenuItem = ({ href, title, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="menu-item-container"
      variants={navItemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        to={href}
        className={`header__menu-item ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {title}
        <motion.div
          className="hover-background"
          initial={{ height: 0 }}
          animate={{
            height: isHovered || isActive ? "100%" : 0,
            transition: { duration: 0.35, ease: "easeOut" },
          }}
        />
      </Link>
    </motion.div>
  );
};

export default function Header({ scrollYRef }) {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLogoClick = () => {
    navigate("/home");
  };

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(scrollYRef.current > 50);
    };

    const intervalId = setInterval(checkScroll, 100);
    return () => clearInterval(intervalId);
  }, [scrollYRef]);

  return (
    <motion.div
      className="header"
      initial="transparent"
      animate={isScrolled ? "transparent" : "transparent"}
      variants={backgroundVariants}
      transition={{ duration: 0.3 }}
    >
      <button className="header__logo" onClick={handleLogoClick}>
        <img src={logo_complete} alt="Logo" />
      </button>

      <AnimatePresence mode="wait">
        {!isActive && !isMobile && (
          <motion.nav
            className="header__menu-list"
            variants={navListVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {links.map((link) => (
              <MenuItem
                key={link.title}
                href={link.href}
                title={link.title}
                isActive={location.pathname === link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.href);
                  handleCloseMenu();
                }}
              />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="header__right" ref={menuRef}>
        {isMobile ? (
          <>
            <motion.div
              className="header__menu"
              variants={menu(isMobile)}
              animate={isActive ? "open" : "closed"}
              initial="closed"
            >
              <AnimatePresence mode="wait">
                {isActive && <Nav onCloseMenu={handleCloseMenu} />}
              </AnimatePresence>
            </motion.div>
            <HeaderButton isActive={isActive} toggleMenu={toggleMenu} />
          </>
        ) : (
          <motion.button
            className="contact-button"
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-row bg-primary-orange p-3 rounded-full">
              <p className="font-medium mx-2 text-lg text-primary-white">
                Contact Us!
              </p>
              <img src={wa} alt="" />
            </div>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
