import React, { useRef } from "react";
import Hero from "../../Component/Hero/Hero";
import Speciality from "../../Component/Speciality/Speciality";
import Work from "../../Component/Work/Work";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";
import Partner from "../../Component/Partner/Partner";
import Transition from "../../Transition";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const HomeContent = ({ categories, services, works, steps }) => {
  return (
    <>
      <Section>
        <Hero />
        <Speciality categories={categories} services={services} steps={steps} />
        <Work works={works} />
        <Partner />
        <Mailer />
        <Footer />
      </Section>
    </>
  );
};

const Home = ({ categories, services, works, isLoading, steps }) => {
  const TransitionedHomeContent = Transition(HomeContent);
  return isLoading ? null : (
    <TransitionedHomeContent
      categories={categories}
      services={services}
      works={works}
      steps={steps}
    />
  );
};

export default Home;
