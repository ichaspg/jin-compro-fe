import "./workcard.css";
import { BASE_API } from "../../../constant/endpoint";
import arrow from "../../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WorkCard = ({
  title,
  description,
  imageUrl,
  large,
  categoryTitle,
  id,
  summary,
}) => {
  const navigate = useNavigate();
  const firstImageUrl = imageUrl?.[0]?.attributes?.url;
  

  const handleClick = () => {
    navigate(`/workdetail`, {
      state: {
        title,
        description,
        summary,
        images: imageUrl,
        category: categoryTitle,
      },
    });
  };

  return (
    <div className="workcard__container">
      <div className="workcard__card">
        <div className="workcard__header" onClick={handleClick}>
          <div className="flex flex-col py-2 pb-0">
          <p className="text-primary-white font font-semibold text-2xl min-h-[60px] flex items-center">
            {title}
          </p>
            <p className="text-primary-white font-light">{categoryTitle}</p>
          </div>
          <motion.button
            className="flex flex-row text-xl items-center font-light tracking-wider"
            whileHover={{
              scale: 1.15,

              transition: { duration: 0.3 },
            }}
          >
            <img src={arrow} alt="" className="size-10" />
          </motion.button>
        </div>
        <img
          src={`${BASE_API}${firstImageUrl}`}
          alt=""
          className={`workcard__img ${large ? "workcard__img-large" : ""}`}
        />
      </div>
    </div>
  );
};

export default WorkCard;
