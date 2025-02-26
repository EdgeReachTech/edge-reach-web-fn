import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { API_BASE_URL } from "../config/BASE_API";
import { useAuth } from "../context/AuthContext";

interface PortfolioForm {
  title: string;
  description: string;
  images: string[];
  linkToRepo?: string;
  linkToSite?: string;
}

const CreatingPortfolio = () => {
  const { loggedUser, getUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const portfolioId = searchParams.get("portfolioId");
  const portfolioFromState = location.state?.portfolio;

  const [form, setForm] = useState<PortfolioForm>({
    title: "",
    description: "",
    images: [],
    linkToRepo: "",
    linkToSite: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("Component Mounted");
    console.log("Token:", token);
    console.log("Logged User:", loggedUser);
    console.log("Portfolio ID:", portfolioId);
    console.log("Portfolio from State:", portfolioFromState);

    const initializeAuthAndData = async () => {
      setIsAuthLoading(true);
      console.log("Starting Auth Initialization");

      if (!token) {
        console.log("No token found, redirecting to login");
        setError("No authentication token found. Please log in.");
        navigate("/login");
        return;
      }

      if (!loggedUser) {
        console.log("No loggedUser, calling getUser");
        try {
          await getUser();
          if (!localStorage.getItem("token")) {
            console.log("Token missing after getUser, redirecting to login");
            setError("Authentication failed: Token missing.");
            navigate("/login");
            return;
          }
          if (!loggedUser) {
            console.log("loggedUser still null after getUser, redirecting to login");
            setError("Authentication failed: User not found.");
            navigate("/login");
            return;
          }
        } catch (err) {
          console.error("getUser Error:", err);
          setError("Failed to authenticate. Please log in again.");
          navigate("/login");
          return;
        }
      }

      console.log("Auth successful, checking portfolio data");
      if (portfolioFromState) {
        console.log("Using portfolio from state:", portfolioFromState);
        setForm({
          title: portfolioFromState.title || "",
          description: portfolioFromState.description || "",
          images: portfolioFromState.images || [],
          linkToRepo: portfolioFromState.linkToRepo || "",
          linkToSite: portfolioFromState.linkToSite || "",
        });
      } else if (portfolioId) {
        console.log("Fetching portfolio for ID:", portfolioId);
        try {
          const response = await fetch(`${API_BASE_URL}/portfolio/${portfolioId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch portfolio: ${errorText}`);
          }
          const data = await response.json();
          console.log("Fetched Portfolio Data:", data);
          setForm({
            title: data.title || "",
            description: data.description || "",
            images: data.images || [],
            linkToRepo: data.linkToRepo || "",
            linkToSite: data.linkToSite || "",
          });
        } catch (err) {
          console.error("Fetch Portfolio Error:", err);
          setError("Failed to fetch portfolio data");
        }
      }
      console.log("Auth and Data Initialization Complete");
      setIsAuthLoading(false);
    };

    initializeAuthAndData();
  }, [portfolioFromState, portfolioId, token, loggedUser, getUser, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!token || !loggedUser?._id) {
      console.log("Submit: No token or user ID, redirecting to login");
      setError("User not authenticated or token missing");
      setLoading(false);
      navigate("/login");
      return;
    }

    try {
      const requestBody = {
        ...form,
        userId: loggedUser._id,
        date: new Date(),
      };

      const portfolioIdToUse = portfolioFromState?._id || portfolioId;
const url = portfolioIdToUse
  ? `${API_BASE_URL}/portfolio/updatePortfolio/${portfolioIdToUse}`
  : `${API_BASE_URL}/portfolio/createPortfolio`;

      console.log("Submitting to URL:", url);
      console.log("Request Body:", requestBody);

      const response = await fetch(url, {
        method: portfolioIdToUse ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save portfolio: ${errorText}`);
      }

      console.log("Portfolio saved successfully");
      setSuccess("Project saved successfully!");
      if (!portfolioIdToUse) {
        setForm({
          title: "",
          description: "",
          images: [],
          linkToRepo: "",
          linkToSite: "",
        });
      }
      navigate("/portfolio");
    } catch (err) {
      console.error("Submit Error:", err);
      if (err instanceof Error) {
        setError(err.message || "Error saving portfolio");
      } else {
        setError("Error saving portfolio");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = () => {
    setForm({ ...form, images: [...form.images, ""] });
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...form.images];
    newImages[index] = value;
    setForm({ ...form, images: newImages });
  };

  const handleRemoveImage = (index: number) => {
    const newImages = form.images.filter((_, i) => i !== index);
    setForm({ ...form, images: newImages });
  };

  console.log("Rendering - isAuthLoading:", isAuthLoading);

  if (isAuthLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600">Loading authentication...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {portfolioFromState || portfolioId ? "Edit Project" : "Add New Project"}
      </h2>
      {success && (
        <p className="text-green-600 p-2 rounded bg-green-100 mb-4">{success}</p>
      )}
      {error && (
        <p className="text-red-600 p-2 rounded bg-red-100 mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          placeholder="Project Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <div>
          <label className="block font-medium mb-1 text-gray-700">Image URLs</label>
          {form.images.map((img, index) => (
            <div key={index} className="flex gap-2 items-center mb-2">
              <input
                type="text"
                placeholder={`Image URL #${index + 1}`}
                value={img}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddImage}
            className="px-4 py-2 bg-gray-200 rounded-md mt-2 hover:bg-gray-300"
          >
            Add Image URL
          </button>
        </div>

        <input
          type="text"
          placeholder="GitHub Repository URL (optional)"
          value={form.linkToRepo}
          onChange={(e) => setForm({ ...form, linkToRepo: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Live Demo URL (optional)"
          value={form.linkToSite}
          onChange={(e) => setForm({ ...form, linkToSite: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 transition-colors duration-200"
        >
          {loading ? "Saving..." : "Save Project"}
        </button>
      </form>
      <button
        onClick={() => navigate("/portfolio")}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default CreatingPortfolio;