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
import ListingItem from "./components/listingItem/ListingItem.tsx";



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
