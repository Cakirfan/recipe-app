import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";

const APP_ID = "7b1599a4";

const APP_KEY = "5078677c9e74fcf8adbb37e32aa9e854";

const Home = () => {
  const [query, setQuery] = useState("");
  const [ogun, setOgun] = useState("Breakfast");

  const [yemekler, setYemekler] = useState([]);
  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ogun}`;

  const getData = async () => {
    const veri = await axios.get(url);
    setYemekler(veri.data.hits);
    console.log(veri);
  };
  console.log(yemekler);

  return (
    <div>
      <Header setQuery={setQuery} setOgun={setOgun} getData={getData} />

      {yemekler.length > 0 ? (
        <div>
          <RecipeCard yemekler={yemekler} />
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
