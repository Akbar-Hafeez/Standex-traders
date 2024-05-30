"use client"

import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const shoesCarouselData = [
  {
    image:  '/shoes.jpeg',
  },
  {
    image: '/shoes.jpg',
  },
  {
    image: '/shoes1.jpg',
  },
  {
    image: '/shoes3.jpg',
  },
  {
    image: '/shoes4.jpg',
  },
 


]


export default function ShoesCarousel() {
  const items = shoesCarouselData.map((item,index) => <Image key={index} width={800} height={800} className='cursor-pointer w-full h-[34rem]' role='presentation' src={item.image} alt='image' />)
  return (

    <div className=' bg-white' >
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite

      />
    </div>
  )
}
