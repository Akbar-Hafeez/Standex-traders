import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/Logo/logo.jpg";
import Mail from "../../../public/mail.png";
import Phone from "../../../public/phone.png";
import location from "../../../public/location.png"
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white md:block hidden  ">
      <div className="container-fluid mx-16 flex justify-between items-center">
        {/* Logo-Start-Start */}
       <Link href="/">
        <Image src={Logo} alt="Logo" className="w-28  h-20 py-1" /></Link>
        {/* Logo-Start-End */}

        <div className="flex space-x-5  ">
         
          <div className="flex items-center gap-3">
            <Image
              src={location}
              width={50}
              className=" "
              alt="mail_image"
            />

            <p className="text-sm font-sans font-semibold">
             
              2303 Park Avenue W  <br />Hainesport,
New Jersey 08036


            </p>
          </div>
          <div className="flex items-center">
            <Image
              src={Mail}
              width={70}
              className=" "
              alt="mail_image"
            />

            <p className="text-sm font-sans font-semibold">
              Email Us <br />
              standextrader@gmail.com
            </p>
          </div>
          {/* COntact  */}
          <div className="flex items-center">
            <Image
              src={Phone}
              width={60}
              className=" text-blue-600 "
              alt="phone_image"
            />

            <p className="text-sm font-sans font-semibold ">
              Contact Us <br />
              +267 412 8822
              {/* <br />
              +92 336 816 5605 */}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
