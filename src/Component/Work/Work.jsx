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
    <section className="work__container" data-scroll-section>
      <div className="work__content max-container padding">
        <div className="work__header">
          <img 
            src={arrow} 
            alt="Featured Works Arrow" 
            className="work__header-arrow"
          />
          <h2 className="work__header-title">
            OUR FEATURED WORKS
          </h2>
        </div>

        <div className="work__grid">
          {featuredWorksData.map((work, i) => {
            const {
              category: { data: { attributes: { title: categoryTitle } } },
              image: { data: imageUrl },
              title,
              description,
              summary
            } = work.attributes;

            return (
              <div
                key={`work_${i}`}
                className={`work__grid-item ${
                  i % 3 === 2 ? 'work__grid-item' : ''
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
    </section>
  );
};

export default Work;