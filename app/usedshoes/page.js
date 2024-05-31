import React from "react";
import ShoesCarousel from "../components/shoesCarousel/ShoesCarousel";
import Image from "next/image";
import BannerTwo from "../components/homePage/BannerTwo";
export const metadata = {
  title: "Standex traders | Used Shoes",
  description: "This is Used Shoes page of standex traders",
};
export default function page() {
  return (
    <>
      <div className="">
        <h1 className="heading text-gradient py-8 px-8">
          Used Footwear | Used Shoes | Credential Shoes
        </h1>
        <ShoesCarousel />
        <div className="my-container">
          <h1 className="heading text-gradient py-7">SHOES:</h1>
          <h1 className="text-4xl heading text-gradient py-6">
            THRIFT SURPLUS SHOES / UNSORTED SHOES
          </h1>
          <p className="para py-4">
            We are looking for consistent suppliers who can provide us with
            unsorted paired used shoes. Unsorted shoes should consist of
            assorted styles and grades. Shoes must contain a mix of Men, Sports,
            Children and Ladies.
          </p>
          <h1 className="text-4xl heading text-gradient py-7">
            We Buy Paired Unsorted Shoes In Gaylord Boxes And/Or Bags.
          </h1>
          <div className="grid gap-2 pb-6 px-3">
            <li className="para">No Broken Soles or Peeling Shoes</li>
            <li className="para">No High Heels</li>
            <li className="para">
              No Boots (Ladies Boots, Winter Boots, Gum Boots, etc.)
            </li>
          </div>
          <p className="para">NO TRASH PLEASE.</p>
          <p className="para py-2">All footwear must be paired and banded.</p>
          <p className="para">WE PURCHASE FULL LOADS OF USED SHOES.</p>
          <h1 className="text-4xl heading text-gradient py-7">
            CREDENTIAL SHOES / ORIGINAL SHOES
          </h1>
          <p className="para">
            We are looking for consistent suppliers who can offer us untouched
            used credential shoes. These shoes are included with credential
            clothing but are separated due to the damages that occur to the
            shoes during the baling process. These shoes are untouched and have
            not been sorted.
          </p>
          <p className="para py-5">
            We buy full loads of credential shoes from donation bin collectors,
            graders, and other sources that separate their credential clothing
            and accessories for specific markets.
          </p>
          <p className="para pb-5">
            Credential shoes must be packed in boxes, bags, or large cap sacks.
            All footwear must be banded and paired.
          </p>
          <p className="para">WE PURCHASE FULL LOADS OF CREDENTIAL SHOES.</p>
          <h1 className="text-4xl heading text-gradient py-7">
            CLOSEOUT SHOES / STORE RETURN SHOES
          </h1>
          <p className="para">
            Closeout (also called store stock) falls into two categories:
            Salvage and Job Outs.
          </p>
          <p className="para py-5">
            Salvage merchandise consists of customer returns, damaged floor
            stock and samples. Closeout shoes are the remaining inventory of a
            style that is no longer manufactured (discontinued).
          </p>
          <p className="para">
            Job out merchandise is product that was marked down and did not
            sell. When it’s time to stock the floors with new inventory, the old
            merchandise is “pulled” from the shelves or racks. Job out
            merchandise is often called closeout, floor overstock, or shelf
            pulls.
          </p>
          <h1 className="text-4xl heading text-gradient py-7">
            SORTED USED SHOES
          </h1>
          <p className="para">
            We buy sorted used shoes through many reputable graders; we are
            always seeking new relationships with dependable suppliers.
          </p>
          <p className="para py-5">
            These loads are graded for our clients in East Africa, West Africa,
            Eastern Europe, Central America, South America, Middle East, etc.
            The shoes are sorted into combinations of Men, Sports, Children, and
            Ladies shoes. They are then packaged in polypropylene bags weighing
            50lbs or 55lbs per bag.
          </p>
          <p className="para">
            We buy sorted used shoes in the following categories: #1 shoes /
            Grade A shoes, #2 shoes / Grade B shoes, Flip flops / sandals,
            Canvas shoes, Work Boots, etc.
          </p>
          <p className="para py-5">
            We are looking for sorted shoes that are clean, good quality,
            colorful with no rips, no tears, no holes and no damage or peeling.
            Every grader has a different quality/combination of shoes. Please
            provide us with pictures and list of combinations of shoes to
            further conduct business.
          </p>
          <div className="grid  lg:grid-cols-2  gap-16 py-8  ">
            <div className="flex flex-col  justify-center items-center">
              {" "}
              <div className="md:mx-auto border-2  w-[300px] md:w-[500px] h-[360px] border-gray-400 shadow-2xl shadow-orange-500 relative">
                <Image
                
                  src="/Shoes1.jpg"
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
                  src="/Shoes.jpg"
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
                  src="/Shoes3.jpg"
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
                  src="/Shoes4.jpg"
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
