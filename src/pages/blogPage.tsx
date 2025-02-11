import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { CardType } from "../types/types";
import { LuLoader } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../config/BASE_API";
// import { useAuth } from "../context/AuthContext";

const BlogPage: React.FC = () => {
  const [blog, setBlog] = useState<CardType>();
  const [deleting, setDeleting] = useState(false);
  const { id } = useParams();
  const [fetching, setFetching] = useState(false);
  // const { loggedUser } = useAuth();

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        if (id) {
          setFetching(true);
          const response = await fetch(
            `${API_BASE_URL}/blog/singleBlog/${id}`,
            {
              method: "GET",
            }
          );

          const contentType = response.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Received non-JSON response");
          }

          if (!response.ok) throw new Error("Network response wasn't ok");

          const data = await response.json();
          setBlog(data);
        }
      } catch (error) {
        console.log("Error fetching blogs", error);
      } finally {
        setFetching(false);
      }
    };
    getSingleBlog();
  }, [id]);

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

  if (fetching)
    return <LuLoader className="mt-10 w-4 h-4 animate-spin mx-auto" />;

  return (
    <>
      <Navbar />
      <div className="bg-[#C0C0C0] pt-16 lg:pt-32 ">
        <div className="container mx-auto">
          {!blog ? (
            <div className="flex flex-col items-center justify-center h-screen">
              <h2 className="text-2xl font-bold text-center">Blog not found</h2>
              <Link
                to="/"
                className="mt-5 bg-white text-black rounded-lg px-4 py-2 font-bold"
              >
                Back to Homepage
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-between">
                <p className="text-[28px] p-5 font-bold">
                  <span className="bg-[#00FFFF] rounded-[10px_0px_0px_10px] px-[5px]">
                    BLOG
                  </span>
                  PAGE
                </p>

                {/* {loggedUser && loggedUser._id === blog.userId && ( */}
                <div className="space-x-4 pr-2">
                  <Link
                    to={`/creatingBlog?blogId=${blog._id}`}
                    className="border py-2 px-4 rounded-md"
                  >
                    Edit
                  </Link>
                  <button
                    disabled={deleting}
                    onClick={() => handleDelete(blog._id)}
                    className="border bg-red-600 py-2 px-4 rounded-md"
                  >
                    {deleting ? "Deleting..." : "Delete"}
                  </button>
                </div>
                {/* )} */}
              </div>

              <div className="my-10 w-fit mx-auto">
                <h3 className="text-3xl text-black font-bold">Read The Blog</h3>
              </div>

              <div className="flex flex-col w-full lg:w-[70%] mx-auto gap-5 lg:10 px-3">
                <img
                  src={blog.image}
                  alt=""
                  className="w-full mx-auto border-[7px] border-yellow-500 h-[500px] object-cover rounded-lg flex-shrink-0"
                />
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <div>
                    <p>{blog.description}</p>
                  </div>
                  <button className="my-4 font-bold text-xl w-full text-center text-[#02BCFF]">
                    Visit
                  </button>
                </div>
              </div>

              <div className="w-full text-center py-5 flex justify-around">
                <button className="bg-[#FFA500] rounded-[30px] w-[200px] py-3 text-[12px] text-white">
                  COMMENT
                </button>
                <button className="bg-[#00FFFF] rounded-[30px] w-[200px] py-3 text-[12px] text-white">
                  LIKE
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
