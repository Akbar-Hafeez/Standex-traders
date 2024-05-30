"use client"

import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { mainCarouselData } from './MainCarouselData';

const mainCarouselData = [
  {
    image:  '/shoes.jpeg',
  },
  {
    image: '/cloththree.jpeg',
  },
  {
    image: '/clothfive.jpg',
  },
  {
    image: '/clothtwo.jpg',
  },
  {
    image: '/shoes1.jpg',
  },
  {
    image: '/usedthree.jpg',
  },


]


export default function MainCarousel() {
  const items = mainCarouselData.map((item,index) => <Image key={index} width={800} height={800} className='cursor-pointer w-full h-[34rem]' role='presentation' src={item.image} alt='image' />)
  return (

    <div className=' bg-white' >
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite

      />
    </div>
  )
}
