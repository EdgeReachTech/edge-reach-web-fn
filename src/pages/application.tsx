"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../config/BASE_API";

// Define the shape of the application data
interface ApplicationData {
  full_name: string;
  email: string;
  phone: string;
  course: string;
  location: string;
}

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationData>({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    course: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    // Full Name validation
    if (!formData.full_name) {
      newErrors.full_name = "Full Name is required.";
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits.";
    }

    // Course validation
    if (!formData.course) {
      newErrors.course = "Please select a course.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form before submitting
    if (!validate()) {
      setIsSubmitting(false);
      return; // Prevent form submission if validation fails
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/students/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.message) {
        toast.success(response.data.message);
      } else {
        toast.success("Application submitted successfully");
      }

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        location: "",
        course: "",
      });
      setErrors({});
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage =
          error.response.data.message || "An error occurred. Please try again.";
        console.error(error.response.data);
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
    
      <div className="text-center mb-6">
        <img
          src="/Logo.png" 
          alt="Edge Reach Tech Logo"
          className="mx-auto h-16"
        />
      </div>
      {/* Back Home Button */}
      <a
        href="/"
        className="p-2 fixed top-3 left-1 bg-blue-600 text-white hover:bg-blue-500 rounded-md"
      >
        Back home
      </a>
      {/* Form Heading */}
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
        FILL OUT THE FORM CORRECTLY
      </h2>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">FULL NAME</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className={`mt-2 block w-full px-4 py-3 border ${
              errors.full_name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-200`}
          />
          {errors.full_name && (
            <p className="text-red-500 text-sm">{errors.full_name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="test@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-2 block w-full px-4 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-200`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">PHONE NUMBER</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`mt-2 block w-full px-4 py-3 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-200`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className={`mt-2 block w-full px-4 py-3 border border-gray-300
             rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-200`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">SELECT A COURSE</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`mt-2 block w-full px-4 py-3 border ${
              errors.course ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-200`}
          >
            <option value="" disabled>
              Select course
            </option>
            <option value="Back-end">Backend programming</option>
            <option value="Front-end">Front-end programming</option>
            <option value="Full-Stack">FullStack programming</option>
            <option value="Graphic design">Graphic Design</option>
            <option value="Computer Literacy">Computer Literacy</option>
          </select>
          {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center px-6 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-200"
          >
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
