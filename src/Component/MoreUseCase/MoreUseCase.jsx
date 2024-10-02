import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../../constant/endpoint";

const MoreUseCase = ({ title, desc, summary, img, date }) => {
  const navigate = useNavigate();
  const imageUrl = img?.[0]?.attributes?.url;
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = String(date.getDate()).padStart(2, "0");
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };


  

  const formattedDate = formatDate(date);

  const handleNavigate = () => {
    navigate("/showcasedetail", {
      state: {
        title,
        desc,
        summary,
        img,
        date,
      },
    });
  };

  return (
    <motion.div
      className="bg-transparent text-white my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <motion.p
              className="text-teal-300 text-sm mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {formattedDate}
            </motion.p>
            <motion.h2
              className="text-3xl font-bold mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-teal-100 mb-1 w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {summary}
            </motion.p>
          </div>
          <motion.button
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors self-start md:self-end mt-2 md:mt-0 mr-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={handleNavigate}
          >
            LEARN MORE!
          </motion.button>
        </div>
        <motion.div
          className="md:w-1/2 bg-teal-700 rounded-lg overflow-hidden mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <img
            src={`${BASE_API}${imageUrl}`}
            alt={title}
            className="w-full h-[350px] object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoreUseCase;
