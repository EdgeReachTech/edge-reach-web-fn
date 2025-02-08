import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthContextAPI from "./context/AuthContext";
import MessageContextAPI from "./context/messageAuth";
import "./index.css";
import AboutUsPage from "./pages/AboutUsPage";
import blogPage from "./pages/blogPage";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/LoginPage";
import MessagePage from "./pages/MessagePage";
import projectPage from "./pages/projectPage";
import SignUpPage from "./pages/SignUpPage";
import Verify from "./pages/Verify";
import OurBlog from "./pages/OurBlog";

import project from "./components/project";
import contactPage from "./pages/contactPage";
import dashboard from "./components/dashboard";


const App: React.FC = () => {
  return (

    <AuthContextAPI >
      <MessageContextAPI>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
          />



          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/register" Component={SignUpPage} />
            <Route path="/verify/:token" Component={Verify} />
            <Route path="/aboutus" Component={AboutUsPage} />
            <Route path="/blogs" Component={OurBlog} />
            <Route path="/blog/id" Component={blogPage} />
            <Route path="/project/:id" Component={projectPage} />
            <Route path="/project" Component={project} />
            <Route path="/contact" Component={contactPage} />
            <Route path="/about" Component={AboutUsPage} />
            <Route path="/message" Component={MessagePage} />

          </Routes>

        </BrowserRouter>
      </MessageContextAPI>
    </AuthContextAPI>
  );
};

export default App;
