"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const handleHover = () => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
  };

  return (
    <div
      className="my-container grid lg:grid-cols-2 py-6 lg:gap-10"
      onMouseEnter={handleHover}
      onFocus={handleHover}
    >
      <div>
        <h1
          className={`heading text-gradient py-4 ${
            animationPlayed ? 'animate__animated animate__flip' : ''
          }`}
        >
          Welcome To Standex Traders​
        </h1>
        <p
          className={`para ${
            animationPlayed ? 'animate__animated animate__slideInLeft' : ''
          }`}
        >
          Established in 2010, Standex Traders has built long lasting, strong
          relationships with non-profits, thrift stores, graders, brokers, and
          international buyers. Through the years we have built a strong
          network of sources as well as clientele whom rely on our quality and
          expertise.
        </p>
        <div className="flex justify-center lg:justify-start items-center">
          <Link href="/about"><button
            className={`button button-gradient my-7 ${
              animationPlayed ? 'animate__animated animate__slideInRight' : ''
            }`}
          >
            Read More
          </button></Link>
        </div>
      </div>
      <div
        className={`py-4 flex justify-center lg:justify-end ${
          animationPlayed ? 'animate__animated animate__slideInUp' : ''
        }`}
      >
        <video
          className="border-2 border-gray-400 rounded-lg shadow-lg object-cover"
          width="500"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}


