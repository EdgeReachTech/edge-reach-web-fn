import React from "react";
import Dashboard from "../components/dashboard";
import BlogComponent from "../components/blogComponent";

const AdminBlogPage = () => {
  return <Dashboard MainComponent={BlogComponent} />;
};

export default AdminBlogPage;
