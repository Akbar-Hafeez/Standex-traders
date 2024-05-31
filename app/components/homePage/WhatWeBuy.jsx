
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function WhatWeBuy() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="py-14 my-container"
      onMouseEnter={handleHover}
      onFocus={handleHover}
    >
      <div className='flex flex-col justify-center items-center'>
        <Image  width={30} height={10} src="/star.png" alt="nn" />
        <h1
          className={`heading text-gradient pt-2 ${
            isHovered ? 'animate__animated animate__slideInDown' : ''
          }`}
        >
          What We Buy
        </h1>
      </div>
      <div className='grid lg:grid-cols-3 gap-10 pt-10 md:px-20 lg:px-10'>
       <Link href="/usedshoes"> <div
          className={`border-2 border-gray-400 p-4 ${
            isHovered ? 'animate__animated animate__slideInLeft' : ''
          }`}
        >
          <div className='w-full lg:h-48 flex justify-center'>
            <Image
              src="https://www.caltextraders.com/wp-content/uploads/2024/01/us.png"
              width={620}
              height={180}
              alt="Used Shoes"
            />
          </div>
          <h3 className='text-2xl heading text-gradient flex justify-center py-2'>
            Used Shoes
          </h3>
        </div></Link>
        <Link href="/usedgoods"> <div
          className={`border-2 border-gray-400 p-4 ${
            isHovered ? 'animate__animated animate__slideInUp' : ''
          }`}
        >
          <div className='w-full lg:h-48 flex justify-center'>
            <Image
              src="https://www.caltextraders.com/wp-content/uploads/2024/01/ug-e1705733426327.png"
              width={620}
              height={48}
              alt="Others Used Goods"
            />
          </div>
          <h3 className='text-2xl heading text-gradient flex justify-center py-2'>
            Others Used Goods
          </h3>
        </div></Link>
        <Link href="/usedcloth"> <div
          className={`border-2 border-gray-400 p-4 ${
            isHovered ? 'animate__animated animate__slideInRight' : ''
          }`}
        >
          <div className='w-full lg:h-48 flex justify-center'>
            <Image
              src="https://www.caltextraders.com/wp-content/uploads/2024/01/uc.png"
              width={620}
              height={180}
              alt="Used Clothes"
            />
          </div>
          <h3 className='text-2xl heading text-gradient flex justify-center py-2'>
            Used Clothes
          </h3>
        </div></Link>
      </div>
    </div>
  );
}
