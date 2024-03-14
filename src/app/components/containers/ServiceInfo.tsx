"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ServiceInfo =(data:any) => {
  const animationVariants = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      opacity: [0, 1, 0], // starts from invisible, becomes fully visible, and fades out
      scale: [1, 1.05, 1], // slightly scale up and down to simulate expansion
      backgroundColor: ["#ffffff00", "#ffffff", "#ffffff00"], // flash color
      transition: {
        duration: 0.5, // duration of the whole animation
        ease: "easeInOut",
      },
    },
  };


    return (
        <div className="relative overflow-hidden h-[90vh] flex items-center justify-start serviceinfo " style={{background:data.img}}>
      <motion.div
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration:  1.5}}
       
     className=" w-full z-10 px-12 lg:px-24 py-10 lg:py-16" >
          <div className="max-w-2xl text-left ">
            <p className="inline-block font-semibold  text-7xl">
        {data.title}
            </p>
            <div className="mt-5 max-w-3xl">
              <p className="text-xl  text-gray-600 dark:text-gray-400">
            {data.subtitle}   </p>
            </div>
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-light text-white text-2xl   ">
             {data.description}
              </h1>
            </div>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-gray-900 to-gray-700 hover:from-gray-900 hover:to-gray-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#"
            >
              GET A QUOTE
              <svg
                className=" size-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>
         

          </div>
        </motion.div>
      </div>
   


    )
};
export default ServiceInfo;