
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function BannerOne() {
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
        className={`relative w-full h-max bg-cover bg-center my-10 ${
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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="my-container relative grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* div one */}
          <div className="col-span-1">
            <div className="flex py-4 md:py-20 lg:py-4 justify-center lg:justify-start items-center">
              <Image
                className={`pt-8 lg:pt-2 ${
                  isHovered ? 'animate__animated animate__fadeInLeft' : ''
                }`}
                src="/truck.png"
                alt='truck'
                width={270}
                height={90}
              />
            </div>
          </div>
          {/* Wrapper for div two and three at md breakpoint */}
          <div className="md:col-span-1 lg:col-span-2 grid md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            {/* div two */}
            <div
              className={`flex flex-col justify-center text-4xl heading text-gradient py-16 md:col-span-1 lg:col-span-1 ${
                isHovered ? 'animate__animated animate__flipInY' : ''
              }`}
            >
              <h1 className="pb-2 lg:pb-4">Do You Have Used Items ?</h1>
              <p>+19092340010</p>
            </div>
            {/* div three */}
            <div
              className={`flex justify-center items-center pb-10 lg:pb-0 md:col-span-1 lg:col-span-1 ${
                isHovered ? 'animate__animated animate__lightSpeedInRight' : ''
              }`}
            >
              <button className="button button-gradient flex items-center justify-center gap-2">
                <span>Get In Touch</span>
                <span>
                  <Image
                  unoptimized
                    src="/arrow.gif"
                    className=""
                    width={30}
                    height={24}
                    alt="arrow"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
