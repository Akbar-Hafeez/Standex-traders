import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <div className='my-container py-12'>
        <div className='flex flex-col justify-center items-center pb-8'>
     <Image width={30} height={30} src="/star.png" alt="nn" srcSet="" />
    <h1 className=" heading text-gradient pt-2 animate__animated animate__slideInDown">ABOUT US</h1>
 </div>
 <p className='para pb-5'>
 Standex Traders is a global wholesale supplier of second hand clothing and shoes. We sort, grade, export and are independent agents of Used Shoes, Unsorted Institutional Clothing, Belts & Purses, Caps/ Hats, Soft Toys, etc.
 </p>
 <p className='para pb-5'>
 We have a dedicated well educated work force that is specialized in grading and sorting and have supplied and delivered millions of pairs of new and gently worn shoes to micro-enterprises worldwide. We are located in Hainesport New Jersey and have a well established reputation with our suppliers and customers.
 </p>
 <p className='para pb-5'>
 We work close with our suppliers/distributors to make sure that the quality of our goods is superior to the competition. Our double quality control ensures that our goods meet and/or exceed the end users expectations.We are always looking for new suppliers from whom we can buy used shoes, used footwear, secondhand clothing, institutional clothing, mixed rags, etc.
 </p>
 <p className='para pb-5'>
 We take pride in maintaining a positive image by building strong connections with institutions, charities and non-profit organizations through our professionalism of paying on time, visiting our vendors on a regular basis, monitoring and evaluating the quality of the used goods we purchase, and adding suppliers as our needs grow.
 </p>
 <p className='para pb-5'>
 We take great care and consideration to ensure that our clients are completely satisfied with our company.
 </p>
    </div>
  )
}
