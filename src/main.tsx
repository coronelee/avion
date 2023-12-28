import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.tsx";
import "./index.css";
import HeroBlocks from "./components/mainPage/HeroBlocks.tsx";
import Features from "./components/mainPage/Features.tsx";
import Listings from "./components/mainPage/Listings.tsx";
import SignUp from "./components/mainPage/SignUp.tsx";
import About from "./components/mainPage/About.tsx";
import Footer from "./components/Footer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingFull from "./components/listingFull/ListingFull.tsx";
import Basket from "./components/basket/Basket.tsx";
import Baskett from "./components/basket/Baskett.tsx";
import ListingItem from "./components/listingItem/ListingItem.tsx";
const items = [
  {
    id: 1,
    photo: "/public/photoListing/Parent(1).png",
    name: "The Dandy chair",
    price: "£250",
  },
  {
    id: 2,
    photo: "/public/photoListing/Parent(2).png",
    name: "The Dandy chair",
    price: "£250",
  },
  {
    id: 3,
    photo: "/public/photoListing/Parent(3).png",
    name: "The Dandy chair",
    price: "£250",
  },
  {
    id: 4,
    photo: "/public/photoListing/Parent.png",
    name: "The Dandy chair",
    price: "£250",
  },
  {
    id: 5,
    photo: "/public/photoListing/Parent(1).png",
    name: "The Dandy chair",
    price: "£250",
  },
  {
    id: 6,
    photo: "/public/photoListing/Parent(2).png",
    name: "The Dandy chair",
    price: "£250",
  },
  {
    id: 7,
    photo: "/public/photoListing/Parent(3).png",
    name: "The Dandy chair",
    price: "£250",
  },
  {
    id: 8,
    photo: "/public/photoListing/Large.png",
    name: "The Dandy chair",
    price: "£250",
  },
];

const addToCart: any = () => {
  console.log();
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroBlocks />
              <Features />
              <Listings />
              <SignUp />
               <About />
              <Footer /> 
            </>
          }
        />
        <Route
          path="listing"
          element={
            <>
              <Header />
              <ListingFull />
              <Footer />
            </>
          }
        />
        <Route
          path="basket"
          element={
            <>
              <Header />
              <Basket />
              <Footer />
            </>
          }
        />
        <Route
          path="listing-item"
          element={
            <>
              <Header />
              <ListingItem />
              <Listings />
              <Features />
              <SignUp />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
