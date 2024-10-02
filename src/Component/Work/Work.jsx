import "./work.css";
import arrow from "../../assets/arrow_90.svg";
import WorkCard from "./WorkCard/WorkCard";

const Work = (works) => {
  const worksData = works?.works?.data;
  const featuredWorksData = worksData?.filter(
    (work) => work.attributes.Featured === true
  );
  

  if (!worksData) {
    console.log("No works data available");
    return null;
  }

  return (
    <div className="work__container" data-scroll-section>
      <div className="work__content max-container padding">
        <div className="flex flex-row gap-3">
          <img src={arrow} alt="" />
          <p className="text-4xl tracking-wide text-secondary-white font-light">
            OUR FEATURED WORKS
          </p>
        </div>
        <div className="work__body work-grid-container py-6">
          {featuredWorksData.map((work, i) => {
            const categoryTitle =
              work.attributes.category.data.attributes.title;
            const imageUrl = work.attributes.image?.data;
            const title = work.attributes.title;
            const description = work.attributes?.description;
            const summary = work.attributes.summary;

            return (
              <div
                key={`p_${i}`}
                className={`work-grid-item ${
                  i % 3 === 2 ? "work-grid-item-large" : ""
                }`}
              >
                <WorkCard
                  categoryTitle={categoryTitle}
                  imageUrl={imageUrl}
                  title={title}
                  description={description}
                  summary={summary}
                  large={i % 3 === 2}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
