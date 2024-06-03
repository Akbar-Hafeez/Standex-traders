"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import MainCarousel from "./components/carousel/MainCarousel";
import Welcome from "./components/homePage/Welcome";
import WhatWeBuy from "./components/homePage/WhatWeBuy";
import BannerOne from "./components/homePage/BannerOne";

import FormOne from "./components/homePage/FormOne";
import BannerTwo from "./components/homePage/BannerTwo";
import CookieModal from "./components/modal/CookieModal";


export default function Home() {
  const [showCookieModal, setShowCookieModal] = useState(false);

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      setShowCookieModal(true);
      const hideModalTimeout = setTimeout(() => {
        setShowCookieModal(false);
      }, 7000); // Hide modal after 5 seconds
      return () => clearTimeout(hideModalTimeout);
    }, 10000); // Show modal after 10 seconds

    return () => clearTimeout(modalTimeout);
  }, []);
  return (
    <>
   <div>
        {showCookieModal && <CookieModal />}
      </div>
 <MainCarousel/>
  <Welcome/>
  <WhatWeBuy/>
  <BannerOne/>
  <FormOne/> 
  <BannerTwo/>
   </>
  );
}
