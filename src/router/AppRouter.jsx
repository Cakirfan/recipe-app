import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
