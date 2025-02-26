import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../config/BASE_API";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const portfoliosPerPage = 6; // Increased for better large-screen usage

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPortfolios = async () => {
      setLoading(true);
      setError(null);
      try {
        if (token && !loggedUser) {
          await getUser();
        }

        const response = await fetch(
          `${API_BASE_URL}/portfolio?page=${currentPage}&limit=${portfoliosPerPage}`,
          {
            headers: token
              ? {
                  Authorization: `Bearer ${token}`,
                }
              : {},
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch portfolios");
        }
        const data = await response.json();

        console.log("Fetched Data:", data);

        if (Array.isArray(data)) {
          setPortfolios(data);
          setTotalPages(Math.ceil(data.length / portfoliosPerPage));
        } else if (data.portfolios && data.total) {
          setPortfolios(data.portfolios);
          setTotalPages(Math.ceil(data.total / portfoliosPerPage));
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "An error occurred while fetching portfolios");
        } else {
          setError("An error occurred while fetching portfolios");
        }
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, [token, currentPage, loggedUser, getUser]);

  // Pagination handlers
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // Client-side pagination
  const paginatedPortfolios = Array.isArray(portfolios)
    ? portfolios.slice(
        (currentPage - 1) * portfoliosPerPage,
        currentPage * portfoliosPerPage
      )
    : portfolios;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" },
  };

  return (
    <div id="home" className="relative min-h-screen p-5 md:p-10 bg-gray-100">
      <div className="pt-20 flex flex-col">
        {/* Header Section */}
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
          ) : paginatedPortfolios.length === 0 ? (
            <p className="text-center text-gray-500">No portfolios available</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPortfolios.map((portfolio) => (
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

        {/* Pagination Controls (only shown if needed) */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row justify-center mt-10"
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={handlePrev}
              className={`text-xl mx-2 p-3 bg-gray-400 rounded-full hover:bg-gray-500 cursor-pointer text-white transition-colors duration-200 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-disabled={currentPage === 1}
            />
            <span className="text-gray-600 mx-4 self-center">
              Page {currentPage} of {totalPages}
            </span>
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={handleNext}
              className={`text-xl mx-2 p-3 bg-gray-400 rounded-full hover:bg-gray-500 cursor-pointer text-white transition-colors duration-200 ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-disabled={currentPage === totalPages}
            />
          </motion.div>
        )}
      </div>

      {/* Footer Link */}
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