"use client"

import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const clothCarouselData = [
  {
    image:  '/clothone.jpg',
  },
  {
    image: '/clothtwo.jpg',
  },
  {
    image: '/cloththree.jpeg',
  },
  {
    image: '/clothfour.jpg',
  },
  {
    image: '/clothfive.jpg',
  },
 


]


export default function ClothCarousel() {
  const items = clothCarouselData.map((item) => <Image width={800} height={800} className='cursor-pointer w-full h-[34rem]' role='presentation' src={item.image} alt='image' />)
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