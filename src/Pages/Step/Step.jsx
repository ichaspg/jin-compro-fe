import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";

export default function Step() {
  const containerRef = useRef(null);
  const location = useLocation();
  const { title, selectedSteps } = location.state || {
    title: "",
    selectedSteps: [],
  };

  const stepData = selectedSteps.data;

  const filteredSteps = stepData.filter(
    (step) => step.attributes.service.data.attributes.title === title
  );

  const StepItem = ({ step, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const { title: stepTitle, description } = step.attributes;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.17, 0.55, 0.55, 1],
        }}
        className="relative border-b border-teal-600/30"
      >
        <div className="py-8">
          <div className="flex gap-6 items-center text-primary-white mb-3">
            <span className="text-6xl font-medium text-primary-orange">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-3xl lg:text-6xl font-bold leading-none">{stepTitle}</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xl pl-[6rem]">
            {description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div data-scroll-section>
        <div className="max-container padding mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl font-light mb-16 text-right"
          >
            {title} Process
          </motion.h1>

          <div ref={containerRef} className="space-y-0">
            {filteredSteps.length > 0 ? (
              filteredSteps.map((step, index) => (
                <StepItem key={step.id} step={step} index={index} />
              ))
            ) : (
              <p className="text-white">No steps available for this service.</p>
            )}
          </div>
        </div>
      </div>
      <Mailer />
      <Footer />
    </>
  );
}
