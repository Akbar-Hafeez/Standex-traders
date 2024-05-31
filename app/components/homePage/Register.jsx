"use client"
import { AuthContext } from "@/app/context/AuthContext";
import axios from "axios";
import Link from "next/link";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const {checkAuthStatus, isAuthenticated } = useContext(AuthContext);
  const handleLogout = async (e) => {
    try {
      const response = await axios.post(
        "https://standex-traders.onrender.com/api/v1/auth/signout",
        {},
        { withCredentials: true }
      );

      console.log("this is my logout response", response.data);
      if (!response.data.success) {
        toast.error(response.data);
        console.log("signout error:", response.data);
        return;
      }

      toast.success("Log Out Successfully !!");
      checkAuthStatus();
    } catch (error) {
        console.error("Error while logging out:", error.response?.data?.message || error.message);
        toast.error(error.response?.data?.message || "Error while logging out");
    }
  };
  return (
    <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
        <Toaster/>
     {isAuthenticated ? (
        <button onClick={handleLogout} className="button button-gradient  px-5 py-2.5 text-sm font-medium text-white shadow">
          Logout
        </button>
      ) : (
        <Link
          href={"/login"}
          className="button button-gradient  px-7 py-2.5 text-sm font-medium text-white shadow"
        >
          LogIn
        </Link>
      )}
      <div className=" ">
        <Link href={"/register"}>
          <button
            disabled={isAuthenticated}
            className="button button-gradient  px-5 py-2.5 text-sm font-medium text-white shadow"
          >
            {isAuthenticated ? "Registered" : "Register"}
          </button>
        </Link>
        </div>
    </div>
  );
}
