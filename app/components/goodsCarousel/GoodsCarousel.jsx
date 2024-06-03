"use client"
import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const goodsCarouselData = [
  
  {
    image:  '/bag1.jpeg',
  },
  
  {
    image: '/usedtwo.jpg',
  },
  {
    image: '/usedthree.jpg',
  },
  {
    image: '/bag3.jpeg',
  },
  {
    image: '/usedfour.jpg',
  },
  {
    image: '/usedfive.jpg',
  },
  {
    image: '/bag6.jpeg',
  }
 
]


export default function GoodsCarousel() {
  const items = goodsCarouselData.map((item,index) => <Image key={index} width={800} height={800} className='cursor-pointer w-full h-[34rem]' role='presentation' src={item.image} alt='image' />)
  return (

    <div className=' bg-white'>
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
  )
}
