import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../config/BASE_API";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import axios from "axios";

interface PortfolioType {
  _id: string;
  title: string;
  description: string;
  images: string[];
  linkToRepo?: string;
  linkToSite?: string;
  createdAt: string;
  userId?: string;
}

const Portfolio: React.FC = () => {
  const { loggedUser, getUser } = useAuth();
  const [portfolios, setPortfolios] = useState<PortfolioType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}/portfolio`);
        if (response.data && Array.isArray(response.data)) {
          setPortfolios(response.data.slice(0, 6)); // Limit to 6 portfolios
        } else if (response.data.portfolios) {
          setPortfolios(response.data.portfolios.slice(0, 6));
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        setError("An error occurred while fetching portfolios");
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" },
  };

  return (
    <div id="home" className="relative min-h-screen p-5 md:p-10 bg-gray-100">
      <div className="pt-20 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center mb-10"
        >
          <h5 className="my-5 text-3xl text-gray-800 font-bold">
            <span className="bg-gradient-to-br from-orange-400 to-yellow-300 m-2 rounded-md px-2 py-1 text-white">
              PORT
            </span>
            FOLIO
          </h5>
          <p className="text-2xl md:text-4xl text-gray-600">
            Showcase of Our Work
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6">
          {loading ? (
            <p className="text-center text-gray-500">Loading portfolios...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : portfolios.length === 0 ? (
            <p className="text-center text-gray-500">No portfolios available</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolios.map((portfolio) => (
                <motion.div
                  key={portfolio._id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover="hover"
                  className="w-full rounded-lg overflow-hidden bg-white shadow-md"
                >
                  <img
                    className="h-64 w-full object-cover transition-opacity duration-300 hover:opacity-90"
                    src={portfolio.images[0] || "https://via.placeholder.com/300"}
                    alt={portfolio.title}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300";
                    }}
                  />
                  <div className="p-6">
                    <h5 className="text-xl font-bold text-gray-800 mb-3">
                      {portfolio.title}
                    </h5>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {portfolio.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full text-center mt-10 mb-10 flex flex-row justify-center items-center"
      >
        <h5 className="text-xl p-3 font-bold text-gray-800">
          <a href="/portfolioAdmin" className="hover:underline">
            VIEW ALL PORTFOLIO
          </a>
        </h5>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-xl mx-2 p-4 cursor-pointer text-gray-800"
        />
      </motion.div>
    </div>
  );
};

export default Portfolio;