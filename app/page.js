import Image from "next/image";
import MainCarousel from "./components/carousel/MainCarousel";
import Welcome from "./components/homePage/Welcome";
import WhatWeBuy from "./components/homePage/WhatWeBuy";
import BannerOne from "./components/homePage/BannerOne";

import FormOne from "./components/homePage/FormOne";
import BannerTwo from "./components/homePage/BannerTwo";
import CookieModal from "./components/modal/CookieModal";


export default function Home() {
  return (
    <>
    <CookieModal/>
   <MainCarousel/>
  <Welcome/>
  <WhatWeBuy/>
  <BannerOne/>
  <FormOne/> 
  <BannerTwo/>
   </>
  );
}
