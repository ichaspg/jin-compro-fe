import React from "react";
import Section from "../../Component/Anim/Section";
import ProductCard from "../../Component/ProductCard/ProductCard";
import Transition from "../../Transition";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";

const Product = ({ products }) => {
  const productData = products.data;

  return (
    <>
      <Section>
        <div className="w-full padding" data-scroll-section>
          <div className="padding-y">
            <p className="font-bold mt-5 text-3xl lg:text-5xl text-primary-white tracking-wider leading-none lg:w-[800px]">
              ELEVATE YOUR GAME AND SOAR WITH THIS BREAKTHROUGH PRODUCT
            </p>
            <p className="font-light text-secondary-white lg:w-[500px] my-5">
              Take your performance to the next level with this revolutionary
              product, designed to help you reach new heights effortlessly!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                title={product.attributes.title}
                img={product.attributes.image.data}
                desc={product.attributes.description}
                summary={product.attributes.summary}
                useCase={product.attributes.use_cases}
                id={product.id}
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

export default Transition(Product);
