import React from "react";
import BannerTwo from "../components/homePage/BannerTwo";
import ClothCarousel from "../components/clothCarousel/ClothCarousel";
import Image from "next/image";
export const metadata = {
  title: "Used Clothes",
  description: "This is Used Clothes page of standex traders",
};
export default function page() {
  return (
    <>
      <div className="">
        <h1 className="heading text-gradient py-8 px-8">
          Mixed Rags | Buy Wholesale Used Clothing
        </h1>
        <ClothCarousel />
        <div className="my-container">
          <h1 className="heading text-gradient py-7">USED CLOTHING</h1>
          <h1 className="text-4xl heading text-gradient py-6">
            MIXED RAGS / INSTITUTIONAL CLOTHING
          </h1>
          <p className="para py-4">
            We are in search of dependable suppliers who can provide us with
            Institutional Mixed Rags. Secondhand used clothing is unsorted
            clothing collected by charitable institutions and organizations such
            as Goodwill Industries, Salvation Army, Value Village, Savers and
            various non-profit organizations throughout the USA. It is a mix of
            unsold clothing and fresh donations which is baled and exported.
            (Thrift Surplus and Salvage Clothing)
          </p>
          <p className="para py-4">
            WE PURCHASE FULL LOADS OF MIXED RAGS AND THRIFT SURPLUS CLOTHING.
          </p>
          <h1 className="text-4xl heading text-gradient py-7">
            CREDENTIAL CLOTHING / ORIGINAL CLOTHING
          </h1>

          <p className="para">
            We buy credential used clothing on a consistent basis. Credential
            Clothing / Original Clothing is untouched, unsorted used clothing in
            exactly the same condition as it was donated. The original clothing
            has to be donated directly from individuals, clothing drop boxes or
            door to door pickup services. These items are untouched and are not
            to be sorted or gone through.
          </p>
          <p className="para py-2">
            WE PURCHASE FULL LOADS OF BALED AND LOOSE CREDENTIAL CLOTHING.
          </p>

          <h1 className="text-4xl heading text-gradient py-7">
            CLOSEOUT CLOTHING / STORE RETURN CLOTHING
          </h1>
          <p className="para">
            Closeout clothing, overstock clothing, and discontinued clothing are
            all terms that describe first quality wholesale clothing that is
            being closed out and liquidated at drastically reduced prices. First
            quality clothing by definition is new merchandise free of defects.
          </p>

          <div className="grid  lg:grid-cols-2  gap-16 py-8  ">
            <div className="sm:flex  sm:justify-center">
              {" "}
              <div className="md:mx-auto border-2  w-[440px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/clothone.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="sm:flex  sm:justify-center">
              {" "}
              <div className="md:mx-auto border-2  w-[440px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/clothtwo.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="sm:flex  sm:justify-center">
              {" "}
              <div className="md:mx-auto border-2  w-[440px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/clothfour.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="sm:flex  sm:justify-center">
              {" "}
              <div className="md:mx-auto border-2  w-[440px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/clothfive.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerTwo />
    </>
  );
}
