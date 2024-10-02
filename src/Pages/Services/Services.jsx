import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Hero from "../../Component/Hero/Hero";
import Speciality from "../../Component/Speciality/Speciality";
import Transition from "../../Transition";

const Services = () => {
  const location = useLocation(); // Get location object
  const { service } = location.state || {}; // Destructure service from location.state
  console.log(service);

  return (
    <div className="max-container padding">
      <div className="services__header">
        {service ? (
          <>
            <h1>{service.attributes.title}</h1>
            <p>{service.attributes.description}</p>
          </>
        ) : (
          <p>No service data available.</p>
        )}
      </div>
    </div>
  );
};

export default Transition(Services);
