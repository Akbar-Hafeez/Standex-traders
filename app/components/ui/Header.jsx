"use client";
import Link from "next/link";
import React, {  useState } from "react";
import "@/app/globals.css";
import {
  Drawer,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  ModalClose,
} from "@mui/joy";
import Navbar from "./Navbar";
import Image from "next/image";
import Logo from "../../../public/assets/Logo/logo.jpg";
import DrawerLogo from "../../../public/assets/Logo/logo.jpg";
import Mail from "../../../public/mail.png";
import Phone from "../../../public/phone.png";
import location from "../../../public/location.png"

import { ArrowDropDown } from "@mui/icons-material";

import Register from "../homePage/Register";


function Header() {
  
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen("success");
    
  };

  const dropsLink = [
    { href: "/usedshoes", label: "Used Shoes" },
    { href: "/usedcloth", label: "Used Clothing" },
    { href: "/usedgoods", label: "Other Used Goods" },

  ];
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQs" },
  ];
  return (
    < >
      <Navbar />

    <div className="sticky top-0  w-full z-50">
      <header className="   gradient">
        <div className="max-w-screen-xl px-4 m-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" md:items-center md:gap-12 md:hidden">
              <Link className="block text-teal-600" href={"/"}>
                <Image src={Logo} alt="logo_icon" width={55} className="rounded-md" />
              </Link>
            </div>

            <div className=" hidden md:block">
              <nav aria-label="Global ">
                <ul className="flex items-center gap-6 text-sm">
                  <Link
                 
                    href={"/"}
                    className="text-white transition hover:text-slate-300 "
                  >
                    Home
                  </Link>

                  <Dropdown>
                    <MenuButton
                      variant="plain"
                      size="sm"
                      endDecorator={<ArrowDropDown />}
                      className="font-sans text-sm text-white hover:bg-transparent hover:text-slate-300"
                    >
                      We Buy
                    </MenuButton>
                    <Menu size="sm">
                      {dropsLink.map((drop) => (
                        <>
                          <Link href={drop.href} className="px-4 ">
                            <MenuItem>{drop.label}</MenuItem>
                          </Link>
                        </>
                      ))}
                    </Menu>
                  </Dropdown>

                  {navLinks.map((link) => (
                    <>
                      <Link
                        href={link.href}
                        className="text-white transition hover:text-slate-300 "
                      >
                        {link.label}
                      </Link>
                    </>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Register/>

              {/* Toggle-Btn  */}
              <div className="block md:hidden">
                <button
                  onClick={openDrawer}
                  type="button"
                  className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Drawer  */}
                {open === "success" && (
                  <>
                    <Drawer open={open} onClose={() => setOpen(false)}>
                      <ModalClose />
                      <div className="flex flex-col justify-between h-screen bg-white border-e">
                        <div className="">
                          <Image
                            src={DrawerLogo}
                            alt="Logo"
                            width={100}
                            className="mx-5"
                          />

                          <ul className="px-6 mt-6 space-y-4 font-sans font-semibold text-black text-md">
                            <li>
                              <Link
                                href={"/"}
                                className="block hover:text-blue-500"
                              >
                                Home
                              </Link>
                            </li>

                            <li>
                              <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center cursor-pointer hover:text-blue-500">
                                  We Buy <ArrowDropDown />
                                </summary>

                                {dropsLink.map((drop) => (
                                  <>
                                    <Link
                                      href={drop.href}
                                      className="block px-6 my-2 text-black hover:text-blue-500"
                                    >
                                      {drop.label}
                                    </Link>
                                  </>
                                ))}
                              </details>
                            </li>

                            {navLinks.map((links) => (
                              <>
                                <Link
                                  href={links.href}
                                  className="block hover:text-blue-500"
                                >
                                  {links.label}
                                </Link>
                              </>
                            ))}
                          </ul>
                        </div>

                        <div className="sticky  flex flex-col justify-start  inset-x-0 bottom-0 mb-5 border-t border-gray-100">
                          
                          <div className="px-2 flex items-center gap-3">
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
          <div className="px-2 flex items-center">
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
                    </Drawer>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      </div>
    </>
  );
}

export default Header;
