import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import React from "react";
import LoginPage from "./pages/LoginPage";
import AuthContextAPI from "./context/AuthContext";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify";
import MessagePage from "./pages/MessagePage";
import MessageContextAPI from "./context/messageAuth";
import projectPage from "./pages/projectPage";
import blogPage from "./pages/blogPage";
const App: React.FC = () => {
  return (
    <AuthContextAPI>
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
            <Route path="/message" Component={MessagePage} />

            {/* **_Happy */}
            <Route path="/blog/id" Component={blogPage} />
            <Route path="/project/:id" Component={projectPage} />
            {/* _** */}
          </Routes>
        </BrowserRouter>
      </MessageContextAPI>
    </AuthContextAPI>
  );
};

export default App;
