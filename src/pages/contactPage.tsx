import React, { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#C0C0C0] min-h-screen pt-24 pb-10">
        <div>
          <p className="text-[20px] p-5 font-bold">
            <span className="bg-[#00FFFF] rounded-[10px_0px_0px_10px] px-[5px]">
              CON
            </span>
            TACT PAGE
          </p>
        </div>

        <div className="my-4 w-fit mx-auto">
          <h3 className="text-3xl text-black font-bold">
            Get in Touch with Us Today!
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:flex flex-col w-[90%] mx-auto gap-5 lg:10">
            <img
              src="https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg"
              alt="contact"
              className="w-[380px] mx-auto h-[400px] object-cover rounded-lg flex-shrink-0"
            />
          </div>

          <div className="flex flex-col w-[90%] mx-auto gap-5 lg:10">
            <form onSubmit={handleSubmit} className=" ">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-[#D9D9D9]"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-[#D9D9D9]"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-[#D9D9D9]"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-[#D9D9D9]"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-[#D9D9D9]"
                  required
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-[30px] hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
