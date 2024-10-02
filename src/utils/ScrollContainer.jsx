import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function ScrollContainer({ children }) {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }

      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.05,
        multiplier: 1,
        getDirection: true,
      });
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

export default ScrollContainer;
