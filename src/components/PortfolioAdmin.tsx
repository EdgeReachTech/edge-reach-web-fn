import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLoader } from "react-icons/lu";
import { API_BASE_URL } from "../config/BASE_API";
import { formatDate } from "../utils/utils";
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

const PortfolioAdmin = () => {
  const { loggedUser, Logout, getUser } = useAuth();
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState<PortfolioType[]>([]);
  const [fetching, setFetching] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Initialize authentication
  useEffect(() => {
    const initializeAuth = async () => {
      setIsAuthLoading(true);
      if (!token || !loggedUser) {
        try {
          await getUser();
          if (!localStorage.getItem("token") || !loggedUser) {
            setError("User not authenticated. Please log in.");
            navigate("/login");
            return;
          }
        } catch (err) {
          setError("Authentication failed. Please log in again.");
          navigate("/login");
          return;
        }
      }
      setIsAuthLoading(false);
    };

    initializeAuth();
  }, [token, loggedUser, getUser, navigate]);

  // Fetch portfolios
  useEffect(() => {
    if (isAuthLoading || !token || !loggedUser) return;

    const fetchPortfolios = async () => {
      setFetching(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}/portfolio/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          const errorData = await response.json().catch(() => response.text());
          throw new Error(errorData.message || "Failed to fetch portfolios");
        }
        const data = await response.json();
        setPortfolios(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An unknown error occurred");
        console.error("Error fetching portfolios:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchPortfolios();
  }, [token, loggedUser, isAuthLoading]);

  // Handle portfolio deletion
  const handleDelete = async (portfolioId: string) => {
    if (!token || !loggedUser) {
      setError("User not authenticated. Please log in.");
      navigate("/login");
      return;
    }

    const confirmed = window.confirm("Are you sure you want to delete this portfolio?");
    if (!confirmed) return;

    setDeleting(portfolioId);

    try {
      console.log("Deleting portfolio:", portfolioId, "by user:", loggedUser._id);
      const response = await fetch(`${API_BASE_URL}/portfolio/deletePortfolio/${portfolioId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Delete response:", response.status, errorText);
        throw new Error(errorText || "Failed to delete portfolio");
      }

      const result = await response.json();
      console.log("Delete success:", result);
      setPortfolios((prev) => prev.filter((portfolio) => portfolio._id !== portfolioId));
      setError(null);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message.includes("<!DOCTYPE html>")
            ? "Server error: Check the DELETE endpoint configuration."
            : error.message
          : "An unknown error occurred"
      );
      console.error("Error deleting portfolio:", error);
    } finally {
      setDeleting(null);
    }
  };

  // Loading or error states
  if (isAuthLoading || fetching) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LuLoader className="w-6 h-6 animate-spin text-gray-600" />
      </div>
    );
  }

  if (error && !token) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-red-600 text-center p-6 bg-white rounded-lg shadow-lg">
          {error}
          <button
            onClick={Logout}
            className="ml-4 text-blue-600 hover:underline font-semibold"
          >
            Log out and try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-gray-50 px-6 md:px-10 pt-6 md:pt-10 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Portfolio Dashboard</h1>
          <p className="text-base sm:text-lg text-gray-500 mt-1">Manage your projects with ease</p>
        </div>
        <Link
          to="/creatingPortfolio"
          className="px-4 py-2 sm:px-6 sm:py-3 w-32 sm:w-40 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-cyan-700 text-white font-semibold rounded-lg shadow-md hover:from-cyan-600 hover:to-cyan-800 transition-all duration-300"
        >
          Add Project
        </Link>
      </motion.div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg shadow-md text-center">
          {error}{" "}
          <button
            onClick={() => setError(null)}
            className="ml-2 text-blue-600 hover:underline font-semibold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Portfolio Cards with Scroll */}
      {!portfolios.length ? (
        <div className="flex items-center justify-center py-16 text-gray-600">
          <p className="text-lg">
            No projects found.{" "}
            <Link
              to="/creatingPortfolio"
              className="font-semibold text-blue-600 hover:underline"
            >
              Add a new project
            </Link>
          </p>
        </div>
      ) : (
        <div className="h-[calc(100vh-250px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={portfolio.images[0] || "https://via.placeholder.com/300"}
                  alt={portfolio.title}
                  className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300";
                  }}
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {portfolio.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Created: {formatDate(portfolio.createdAt)}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {portfolio.description}
                  </p>
                  <div className="flex justify-between">
                    <button
                      onClick={() =>
                        navigate("/creatingPortfolio", { state: { portfolio } })
                      }
                      className="px-4 py-2 bg-gradient-to-bl from-orange-500 w-32 to-yellow-200 hover:to-yellow-500 rounded-md transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      disabled={deleting === portfolio._id}
                      onClick={() => handleDelete(portfolio._id)}
                      className={`px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 ${
                        deleting === portfolio._id ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {deleting === portfolio._id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default PortfolioAdmin;