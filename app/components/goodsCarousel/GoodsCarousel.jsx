"use client"

import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const goodsCarouselData = [
  {
    image:  '/usedone.jpg',
  },
  {
    image: '/usedtwo.jpg',
  },
  {
    image: '/usedthree.jpg',
  },
  {
    image: '/usedfour.jpg',
  },
  {
    image: '/usedfive.jpg',
  },
 


]


export default function GoodsCarousel() {
  const items = goodsCarouselData.map((item) => <Image width={800} height={800} className='cursor-pointer w-full h-[34rem]' role='presentation' src={item.image} alt='image' />)
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
