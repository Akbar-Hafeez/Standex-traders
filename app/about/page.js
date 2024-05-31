import React from 'react'
import MainCarousel from '../components/carousel/MainCarousel'
import AboutUs from '../components/about/AboutUs'
import BannerTwo from '../components/homePage/BannerTwo'
export const metadata = {
  title: "Standex traders | About",
  description: "This is About page of standex traders",
};
export default function page() {
  return (
    <>
    <MainCarousel/>
    <AboutUs/>
    <BannerTwo/>
    </>
  )
}
