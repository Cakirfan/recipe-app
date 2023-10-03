import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const AppRouter = () => {
  return (
  <BrowserRouter>
    <Navbar/>
    <Footer/>
  </BrowserRouter>
  );
};

export default AppRouter;
