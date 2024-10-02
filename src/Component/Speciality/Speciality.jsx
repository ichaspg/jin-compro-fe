/* eslint-disable react/prop-types */
import Category from "./Category/Category";
import "./speciality.css";

const Speciality = ({ services, updateScroll, steps }) => {
  return (
    <div className="speciality__container" data-scroll-section id="service">
      <div className="flex flex-col padding max-container h-full">
        <div
          className="text-white text-4xl font-light"
          style={{ lineHeight: "1.2" }}
        >
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
