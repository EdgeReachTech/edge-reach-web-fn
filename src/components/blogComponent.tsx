import { useEffect, useState } from "react";
import { CardType } from "../types/types";
import { formatDate } from "../utils";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { API_BASE_URL } from "../config/BASE_API";
import { LuLoader } from "react-icons/lu";
import { MdClose } from "react-icons/md";

const BlogComponent = () => {
  const [cards, setCards] = useState<CardType[] | undefined>();
  const [fetching, setFetching] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [viewBlog, setViewBlog] = useState(false);
  const [singleCard, setSingleCard] = useState<CardType | null>(null);

  useEffect(() => {
    const getAllBlogs = async () => {
      setFetching(true);
      try {
        const response = await fetch(`${API_BASE_URL}/blog/blogs`, {
          method: "GET",
        });

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }

        if (!response.ok) throw new Error("Network response wasn't ok");

        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.log("Error fetching blogs", error);
      } finally {
        setFetching(false);
      }
    };
    getAllBlogs();
  }, []);

  const handleDelete = async (blogId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) {
      return; // Exit the function if the user cancels
    }

    setDeleting(true);
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${API_BASE_URL}/blog/deleteBlog/${blogId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the blog");
      }

      window.location.href = "/";
    } catch (error) {
      console.error("Error sending request:", error);
      setDeleting(false);
    }
  };

  const readBlog = (blogId: string) => {
    if (blogId) {
      const singleBlog = cards?.find((card) => card._id === blogId);
      setSingleCard(singleBlog || null); // Set to null if no match
      setViewBlog(true); // Ensure the viewBlog state is set to true when opening the blog
      console.log(singleBlog);
    }
  };

  if (fetching)
    return <LuLoader className="mt-10 w-4 h-4 animate-spin mx-auto" />;
  return (
    <>
      <div className="p-10">
        <h1 className="font-bold text-3xl font-sans">Blogs</h1>
        <p className="my-2 text-lg font-semibold text-gray-600">Manage blogs</p>
      </div>
      {!cards?.length ? (
        <div className="flex items-center justify-center py-16 text-red-700 underline underline-offset-8">
          <p>No blog posts found. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4 px-4 pb-4">
          {cards.map((card: CardType) => (
            <div
              key={card._id}
              className="bg-white border border-black w-full rounded-lg overflow-hidden"
            >
              <img
                src={card.image}
                alt={card._id}
                className="w-full h-72 lg:h-48 object-cover hover:opacity-60"
              />
              <div className="p-4 flex flex-col h-[calc(100%-192px)] justify-between">
                <div className="flex flex-row gap-2">
                  <div className="h-[2px] w-[25px] mt-14 bg-gradient-to-r from-[#FFA500] to-[#FFE600] rounded-md" />
                  <div className="flex flex-col max-w-[250px] p-2">
                    <p className="text-sm font-loboto text-gray-500">
                      {formatDate(card.createdAt)}
                    </p>
                    <p className="mt-2 text-[13px] font-bold font-loboto text-gray-800 line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1 ml-10 bg-blue-700 px-3 py-2 w-fit rounded-lg my-2">
                  <Link to={`/blog/${card._id}`}>
                    <p className="text-sm cursor-pointer hover:underline text-white">
                      Read Full Post
                    </p>
                  </Link>
                  <FaArrowRight className="w-[13px] h-[13px] text-white" />
                </div>

                <div className="space-x-4 pr-2 flex items-center justify-center mt-2">
                  <button
                    onClick={() => {
                      readBlog(card._id);
                      setViewBlog(true);
                    }}
                    className="border py-2 px-4 rounded-md border-gray-500"
                  >
                    view
                  </button>
                  <Link
                    to={`/creatingBlog?blogId=${card._id}`}
                    className="border py-2 px-4 rounded-md bg-gray-300"
                  >
                    Edit
                  </Link>
                  <button
                    disabled={deleting}
                    onClick={() => handleDelete(card._id)}
                    className="border bg-red-600 py-2 px-4 rounded-md"
                  >
                    {deleting ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewBlog && (
        <div className="fixed inset-0 bg-black/15 flex items-start pt-5 justify-center px-3">
          <div className="relative bg-white p-4 w-full md:w-1/2 mx-auto rounded-md">
            <div>
              <button
                className="absolute top-2 right-2 bg-blue-700 rounded-full p-1 text-white"
                onClick={() => setViewBlog(false)}
              >
                <MdClose />
              </button>
              <h2 className="text-center text-2xl font-semibold">
                Read a blog post
              </h2>
              <p className="mt-4 text-gray-700 text-lg">
                Click on a blog post to read its content.
              </p>
            </div>

            {/* Blog */}
            {singleCard && (
              <div className="h-[70vh] overflow-y-auto mt-2 pb-3">
                <div className="flex flex-col w-full lg:w-[70%] mx-auto gap-5">
                  <img
                    src={singleCard.image}
                    alt="blog image"
                    className="w-full mx-auto border-[7px] border-yellow-500 h-[300px] object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold">{singleCard.title}</h3>
                    <div>
                      <p>{singleCard.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogComponent;
