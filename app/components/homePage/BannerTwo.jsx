"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BannerTwo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`relative w-full h-max bg-cover bg-center my-24  ${
          isHovered ? 'hovered' : ''
        }`}
        style={{ 
          backgroundImage: "url('/bg.jpg')",
          transition: 'background-image 0.5s ease'
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onFocus={handleHover}
        onBlur={handleLeave}
      >
        <div className="absolute inset-0 bg-black opacity-50 animate__animated animate__rubberBand"></div>
       <div className='my-container relative flex flex-col justify-center items-center py-24 gap-10'>
        <h1 className={`md:text-6xl heading text-gradient ${isHovered ? 'animate__animated animate__bounceInDown' :""}`}>We Reuse. We Reduce. We Recycle.</h1>
       <Link href='/contact'> <button className={`button button-gradient ${isHovered ? 'animate__animated animate__bounceInUp' : ''}`}>Contact Us Now</button></Link>
       </div>
      </div>
    </>
  );
}
