import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Transition from "../../Transition";
import Section from "../../Component/Anim/Section";
import ImageCarousel from "../../Component/ImageCarousel/ImageCarousel";
import MoreUseCase from "../../Component/MoreUseCase/MoreUseCase";
import arrow from "../../assets/arrow_90.svg";
import ProductCard from "../../Component/ProductCard/ProductCard";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";
import UseCaseCardSm from "../../Component/UseCaseCardSm/UseCaseCardSm";

const UseCaseDetail = ({ products, useCases, locomotiveInstance }) => {
  const location = useLocation();
  const { title, desc, summary, img, id } = location.state || {};
  const [currentProduct, setCurrentProduct] = useState({});

  
  const filteredProducts = products.data.filter((product) =>
    product.attributes.use_cases.data.some(
      (useCase) => useCase.attributes.title === title
    )
  );


  useEffect(() => {
    setCurrentProduct(location.state || {});

    if (locomotiveInstance) {
      locomotiveInstance.scrollTo(0, { duration: 0, disableLerp: true });
      locomotiveInstance.update();
    }
  }, [location, locomotiveInstance]);

          

  return (
    <>
      <Section>
        <div className="max-container w-full padding" data-scroll-section>
          <div className="mt-10">
            <h1 className="pt-5 text-4xl font-bold tracking-wide text-primary-white">
              {title || "Default Use Case Title"}
            </h1>
            <p className="text-xl font-light text-primary-white lg:w-2/4 m-2">
              {summary || "Default short description"}
            </p>
          </div>
          <div className="text-left mt-5">
            <ImageCarousel images={img} />
          </div>
          <div className="flex flex-col py-10">
            <div className="flex gap-5">
              <img src={arrow} alt="" />
              <p className="text-2xl lg:text-4xl  text-primary-white font-light">
                WHAT WE IMPROVED
              </p>
            </div>
            <p className="text-primary-white text-xl my-2">
              {desc || "Default detailed description about the use case..."}
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row gap-5 items-center self-end">
            <p className="text-2xl lg:text-4xl  text-primary-white font-light">
                PRODUCT USED
              </p>
              <img src={arrow} alt="" className="rotate-180" />
            </div>
          </div>
 
          <div className="lg:flex lg:justify-center lg:items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.attributes.title}
                  img={product.attributes.image.data}
                  desc={product.attributes.description}
                  summary={product.attributes.summary}
                  useCase={product.attributes.use_cases}
                  id={product.attributes.products}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col py-10">
            <div className="flex gap-5">
              <img src={arrow} alt="" />
              <p className="text-2xl lg:text-4xl  text-primary-white font-light">
                EXPLORE ANOTHER USECASE
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 self-center mt-5 cursor-pointer">
              {useCases.data.map((useCase) => (
                <UseCaseCardSm
                  key={useCase.id}
                  title={useCase.attributes.title}
                  summary={useCase.attributes.summary}
                  description={useCase.attributes.description}
                  date={useCase.attributes.author}
                  img={useCase.attributes.image.data}
                />
              ))}
            </div>
          </div>
        </div>
        <Mailer />
        <Footer />
      </Section>
    </>
  );
};

export default Transition(UseCaseDetail);
