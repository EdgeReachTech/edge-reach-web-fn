import React, { ChangeEvent, useEffect, useState } from "react";

import ImageUploaderComponent from "../components/ImageUploaderComponent";
import { useLocation } from "react-router-dom";
import { CardType } from "../types/types";
import { LuLoader } from "react-icons/lu";
import { API_BASE_URL } from "../config/BASE_API";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: [] as File[], // Store images as File objects
  });
  const [uploading, setUploading] = useState(false);
  const [blog, setBlog] = useState<CardType>();

  const location = useLocation();

  const getBlogId = (url: string) => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(url);
  };

  const blogId = getBlogId("blogId");

  useEffect(() => {
    if (blogId) {
      const getBlogToUpdate = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${API_BASE_URL}/blog/userBlog/${blogId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) throw new Error("Network error: ");
        const blogToUpdate = await response.json();
        setBlog(blogToUpdate);
      };

      getBlogToUpdate();
    }
  }, [blogId]);

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        description: blog.description,
        images: [blog.image as any], // Reset images array when a blog is updated
      });
    }
  }, [blog]);

  if (blogId && !blog)
    return <LuLoader className="mt-10 w-4 h-4 animate-spin mx-auto" />;

  const handleFormChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageSelection = (selectedFiles: File[]) => {
    setFormData((prevData) => ({
      ...prevData,
      images: selectedFiles,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    if (formData.images.length > 0) {
      formDataToSend.append("image", formData.images[0]);
    }
    const token = localStorage.getItem("token");

    try {
      if (blogId) {
        const response = await fetch(
          `${API_BASE_URL}/blog/updateBlog/${blogId}`,
          {
            method: "PATCH",
            body: formDataToSend,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          window.location.href = "/";
        }
      } else {
        const response = await fetch(`${API_BASE_URL}/blog/createBlog`, {
          method: "POST",
          body: formDataToSend,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          window.location.href = "/";
        }
      }
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-md text-lg">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        {blogId ? "Update " : "Create "} Blog Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-screen-md mx-auto"
      >
        <div className="flex flex-col gap-8">
          <div className="w-full flex-1">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-md font-semibold text-gray-400"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-2xl font-bold"
                placeholder="Title..."
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-md font-semibold text-gray-400"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                rows={6}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                placeholder="Description..."
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-md font-semibold text-gray-400"
              >
                Image
              </label>
              <ImageUploaderComponent
                fieldChange={handleImageSelection}
                mediaUrl={(formData as any).images.map(
                  (image: string, index: string) => ({
                    id: index.toString(),
                    url: image,
                  })
                )}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition"
          >
            {blogId
              ? uploading
                ? "Updating..."
                : "Update blog"
              : uploading
              ? "Creating..."
              : "Create Blog Post"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
