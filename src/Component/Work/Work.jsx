import "./work.css";
import arrow from "../../assets/arrow_90.svg";
import WorkCard from "./WorkCard/WorkCard";
import WorkCardFeatured from "../WorkCardFeatured/WorkCardFeatured";

const Work = (works) => {
  const worksData = works?.works?.data;
  
  const featuredWorksData = Array.isArray(worksData)
  ? worksData.filter((work) => work?.attributes?.Featured === true)
  : [];


  if (!featuredWorksData?.length) {
    console.log("No featured works available");
    return null;
  }

  return (
    <section className="work__container" data-scroll-section>
      <div className="work__content max-container padding">
        <div className="work__header">
          <img
            src={arrow}
            alt="Featured Works Arrow"
            className="work__header-arrow"
          />
          <h2 className="work__header-title">
            FEATURED WORKS
          </h2>
        </div>
        <div className="flex flex-row gap-10">
          {featuredWorksData.map((work, i) => {
            const categoryTitle = work?.attributes?.category?.data?.attributes?.title;
            const imageUrl = work?.attributes?.image?.data;
            const {
              title,
              description,
              summary
            } = work?.attributes || {};
            if (!categoryTitle || !imageUrl || !title) {
              return null;
            }

            return (
              <div
                key={`work_${i}`}
          
              >
                <WorkCardFeatured
                  categoryTitle={categoryTitle}
                  imageUrl={imageUrl}
                  title={title}
                  description={description || ''}
                  summary={summary || ''}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;