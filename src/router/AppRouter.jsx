import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
};

export default AppRouter;
