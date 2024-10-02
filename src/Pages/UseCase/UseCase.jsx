import React from "react";
import Transition from "../../Transition";
import UseCaseCard from "../../Component/UseCaseCard/UseCaseCard";
import Section from "../../Component/Anim/Section";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";

const UseCase = ({ useCases }) => {
  const useCaseData = useCases.data;

  return (
    <>
      <Section>
        <div
          className="max-container w-full flex flex-col justify-center items-center padding min-h-screen"
          data-scroll-section
        >
          <div className="padding-y">
            <p className="text-6xl font-bold tracking-wider text-primary-white w-[900px] text-center">
              BRINGING IDEAS TO LIFE: HOW{" "}
              <span className="text-primary-orange">TECHNOLOGY </span>SOLVES
              REAL PROBLEMS
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {useCaseData.map((useCase) => (
              <UseCaseCard
                key={useCase.id}
                title={useCase.attributes.title}
                summary={useCase.attributes.summary}
                desc={useCase.attributes.description}
                date={useCase.attributes.publishedAt}
                img={useCase.attributes.image.data}
              />
            ))}
          </div>
        </div>
        <Mailer />
        <Footer />
      </Section>
    </>
  );
};

export default Transition(UseCase);
