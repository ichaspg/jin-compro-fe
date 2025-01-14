/* eslint-disable react/prop-types */
import Category from "./Category/Category";
import "./speciality.css";

const Speciality = ({ services, updateScroll, steps }) => {
  return (
    <div className="speciality__container" data-scroll-section id="service">
      <div className="flex flex-col px-4 md:px-8 lg:px-16  mx-auto h-full mt-36">
        <div className="text-white font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight ml-2">
          OUR SPECIALITY <br /> PROVIDED SPECIALLY FOR YOU
        </div>
        <Category
          services={services}
          updateScroll={updateScroll}
          selectedSteps={steps}
        />
      </div>
    </div>
  );
};

export default Speciality;
