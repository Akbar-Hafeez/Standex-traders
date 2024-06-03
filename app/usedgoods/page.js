import React from "react";
import GoodsCarousel from "../components/goodsCarousel/GoodsCarousel";
import Image from "next/image";
import BannerTwo from "../components/homePage/BannerTwo";
export const metadata = {
  title: "Standex traders | Used Goods",
  description: "This is Used Goods page of standex traders",
};
export default function page() {
  return (
    <>
      <div className="">
        <h1 className="heading text-gradient py-8 px-8">
          Used Bags | Wholesale Used Toys
        </h1>
        <GoodsCarousel />
        <div className="my-container">
          <h1 className="heading text-gradient py-7">Other Used Goods</h1>
          <h1 className="text-4xl heading text-gradient py-6">
            HARD AND SOFT TOYS
          </h1>
          <p className="para py-4">
            Soft toy loads consist of clean stuffed toys with the larger ones
            removed. Soft toys can be baled because it doesn’t consist of any
            fragile items. Hard toy loads are packaged in Gaylord boxes to
            prevent broken toys due to baling. These loads consist of a
            variation of the following items: Games, Puzzles, Action
            figures/Dolls, Musical Instrumental Toys, Building Blocks, Arts and
            Craft Supplies, Collectibles, etc.
          </p>
          <p className="para py-4">
            WE PURCHASE MIXED AND FULL LOADS OF CREDENTIAL AND THRIFT SURPLUS
            USED TOYS.
          </p>
          <h1 className="text-4xl heading text-gradient py-7">
            ACCESSORIES: BELTS & PURSES, HATS:
          </h1>

          <p className="para">
            We regularly buy institutional baled belts, purses, hats for export.
            The following items are packaged together in Gaylord boxes or bales.
            Mix contains of Purses, wallets, Backpacks, School Bags, Belts, Caps
            and Hats. We can buy credential/original belts, purses, hats as
            well.
          </p>
          <p className="para py-2">
            WE PURCHASE FULL LOADS OF USED ACCESSORIES.
          </p>

          <h1 className="text-4xl heading text-gradient py-7">
            BRIC BRAC / KITCHENWARE:
          </h1>
          <p className="para">
            These are products we accept furniture, kitchenware, glassware,
            dishes, pots and pans, utensils, dinnerware, storage containers,
            school supplies, office supplies, frames/photo albums, home decor
            items, wooden objects, non-electronic decorations, collectibles,
            etc.
          </p>
          <p className="para py-5">
            The products that we do not accept are: DVDs, CDs, Books, Liquids,
            Cosmetics, and Large Items like bikes. Most importantly there should
            be NO ELECTRONICS in any of the bric-a-brac loads.
          </p>
          <h1 className="text-4xl heading text-gradient py-7">USED BOOKS:</h1>
          <p className="para">
            We buy full loads of used books both hardcover and softcover. We do
            not accept magazines, encyclopedias, damaged books (trash),
            multimedia, and books that are volumes in a series. We also do not
            buy loads of books that have already been scanned for online sale.
          </p>
          <p className="para py-5">WE PURCHASE FULL LOADS OF USED BOOKS</p>

          <div className="grid  lg:grid-cols-2  gap-16 py-8  ">
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/bag4.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/bag1.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/bag2.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/bag3.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/bag5.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/bag6.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/bag7.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/usedthree.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/usedtwo.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="shoesImg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                  src="/usedone.jpg"
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
