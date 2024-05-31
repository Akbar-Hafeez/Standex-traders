"use client";

import Image from "next/image";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const mainCarouselData = [
  {
    image: "/Shoes.jpeg",
  },
  {
    image: "/cloththree.jpeg",
  },
  {
    image: "/clothfive.jpg",
  },
  {
    image: "/clothtwo.jpg",
  },
  {
    image: "/Shoes1.jpg",
  },
  {
    image: "/usedthree.jpg",
  },
];

export default function MainCarousel() {
  const items = mainCarouselData.map((item, index) => (
    <Image
      key={index}
      width={800}
      height={800}
      className="cursor-pointer w-full h-[34rem]"
      role="presentation"
      src={item.image}
      alt="image"
    />
  ));
  return (
    <div className=" bg-white">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        items={items}
        disableButtonsControls
      />
    </div>
  );
}
