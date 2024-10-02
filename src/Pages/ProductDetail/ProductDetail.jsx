import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Transition from "../../Transition";
import Section from "../../Component/Anim/Section";
import ImageCarousel from "../../Component/ImageCarousel/ImageCarousel";
import MoreUseCase from "../../Component/MoreUseCase/MoreUseCase";
import arrow from "../../assets/arrow_90.svg";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";
import ProductCard from "../../Component/ProductCard/ProductCard";

const ProductDetail = ({ products, useCases, locomotiveInstance }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(location.state || {});

  useEffect(() => {
    setCurrentProduct(location.state || {});

    if (locomotiveInstance) {
      locomotiveInstance.scrollTo(0, { duration: 0, disableLerp: true });
      locomotiveInstance.update();
    }
  }, [location, locomotiveInstance]);

  const { title, img, desc, summary, useCase, id } = currentProduct;

  const useCaseIds = useCase?.data?.map((item) => item.id) || [];

  const useCaseData = useCases.data
    ? useCases.data.filter((caseItem) => useCaseIds.includes(caseItem.id))
    : [];

  const featuredProducts = products.data
    ? products.data.filter((product) => product.attributes.featured === true)
    : [];
  
  const handleProductSelect = (newProduct) => {
    navigate(location.pathname, { state: newProduct, replace: true });
  };

  
  return (
    <Section key={location.key}>
      {" "}
      {/* Use location.key to force full re-render */}
      <div className="max-container w-full padding" data-scroll-section>
        <div className="mt-10">
          <h1 className="text-4xl font-bold tracking-wide text-primary-white">
            {title || "Product Title"}
          </h1>
          <p className="text-xl font-light text-primary-white w-5/12 my-2">
            {summary || "Short description"}
          </p>
        </div>

        <div className="text-left mt-5">
          <ImageCarousel images={img} />
        </div>

        <div className="flex flex-col py-10">
          <div className="flex gap-5">
            <img src={arrow} alt="" />
            <p className="text-4xl text-primary-white font-light">WHAT WE DO</p>
          </div>
          <p className="text-primary-white text-xl my-2">
            {desc || "Detailed description about the product..."}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex flex-row gap-5 items-center">
            <p className="text-4xl text-primary-white font-light">
              WHAT WE USE THE PRODUCT FOR
            </p>
            <img src={arrow} alt="" className="rotate-180" />
          </div>
          <div className="flex flex-col">
            {useCaseData.map((cases) => (
              <MoreUseCase
                key={cases.id}
                title={cases.attributes.title}
                summary={cases.attributes.summary}
                desc={cases.attributes.description}
                date={cases.attributes.publishedAt}
                img={cases.attributes.image.data}
                id={cases.id}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="flex gap-5">
            <img src={arrow} alt="" />
            <p className="text-4xl text-primary-white font-light">
              SEE ANOTHER PRODUCT
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.attributes.title}
                img={product.attributes.image.data}
                desc={product.attributes.description}
                summary={product.attributes.summary}
                useCase={product.attributes.use_cases}
                id={product.attributes.products}
                onClick={() =>
                  handleProductSelect({
                    title: product.attributes.title,
                    img: product.attributes.image.data,
                    desc: product.attributes.description,
                    summary: product.attributes.summary,
                    useCase: product.attributes.use_cases,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
      <Mailer />
      <Footer />
    </Section>
  );
};

export default Transition(ProductDetail);
