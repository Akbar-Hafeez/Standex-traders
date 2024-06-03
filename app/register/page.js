"use client";
import Image from "next/image";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Error from "../../public/assets/error.svg";
import toast, { Toaster } from "react-hot-toast";
import SideBg from "../../public/clothone.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import CookieModal from "../components/modal/CookieModal";


function Register() {
  const { checkAuthStatus } = useContext(AuthContext);

  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post(
        "https://standex-traders.onrender.com/api/v1/auth/signup",
        input,
        { withCredentials: true }
      );

      console.log("this is my register response", response.data);
      if (!response.data.success) {
        toast.error(response.data);
        console.log("User registration error:", response.data);
        return;
      }

      toast.success("Registration successful!");
      checkAuthStatus();
      setInput({ name: "", email: "", password: "" });

      setTimeout(() => {
        router.push("/contact");
      }, 2000);
    } catch (error) {
      console.error(
        "Error in registering the user:",
        error.response.data.message
      );
      toast.error(error.response.data.message);
    }
  };
  const [showCookieModal, setShowCookieModal] = useState(false);

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      setShowCookieModal(true);
      const hideModalTimeout = setTimeout(() => {
        setShowCookieModal(false);
      }, 9000); // Hide modal after 5 seconds
      return () => clearTimeout(hideModalTimeout);
    }, 3000); // Show modal after 10 seconds

    return () => clearTimeout(modalTimeout);
  }, []);
  return (
    <>
    <div>

  { showCookieModal && <CookieModal/>}
    </div>
      <div className="grid items-center grid-cols-1 gap-4 mx-auto my-10 lg:grid-cols-2 lg:gap-8 lg:mx-28 ">
        <Toaster />
        {/* Image-Section */}
        <div className="hidden lg:block xl:block border-gray-400">
          <div>
            <Image src={SideBg} alt="side_bg" />
          </div>
        </div>
        {/* Form-Section */}
        <div className="mx-auto">
          <form
            className="w-full p-8 bg-white border border-gray-500 rounded-lg shadow-lg py-7 md:w-96 lg:w-96"
            onSubmit={handleSubmit(onSubmit)}
            onChange={handleChange}
          >
            <h1 className="flex items-center justify-center font-sans text-2xl font-bold text-gradient">
              REGISTRATION
            </h1>
            <div className="mt-4 mb-4">
              <label
                className="block pb-1 mx-2 text-sm text-gray-500"
                htmlFor="name"
              >
                Name
              </label>
              <input
                value={input.name}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Full Name"
                type="text"
                id="name"
                name="name"
                {...register("name", {
                  required: { value: true, message: "this field is required" },
                  minLength: { value: 4, message: "min length should be 4" },
                  maxLength: { value: 20, message: "max length should be 20" },
                })}
              />
              {errors.name && (
                <div className="text-md font-medium px-3 pt-1">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className="mt-4 mb-4">
              <label
                className="block pb-1 mx-2 text-sm text-gray-500"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                value={input.email}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Registered email address"
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="text-md font-medium px-3 pt-1">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div>
              <label
                className="block pb-1 mx-2 mt-2 text-sm text-gray-500"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                value={input.password}
                required
                className="w-full p-3 text-sm border rounded-lg border-black-200"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                {...register("password", {
                  required: { value: true, message: "this field is required" },
                  minLength: { value: 4, message: "min length should be 4" },
                  maxLength: { value: 15, message: "max length should be 15" },
                })}
              />
              {errors.password && (
                <div className="text-md font-medium px-3 pt-1">
                  {errors.password.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="button-gradient  w-full p-2 mt-3 text-white  rounded-md hover:text-gray-700 hover:shadow-2xl  hover:shadow-orange-400 "
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
            {errors.specificerror && <div>{errors.specificerror.message}</div>}

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link
                href="/login"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline hover:text-orange-500"
              >
                or sign in
              </Link>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;