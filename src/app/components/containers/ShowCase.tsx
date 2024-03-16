"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShowCaseProps } from "@/app/interfaces";



const ShowCase: React.FC<ShowCaseProps> = ({
  title,
  description,
  image,
  icon,
  variants,
}) => {
  
  const IconHtml = icon.map((ico) => {
    // eslint-disable-next-line react/jsx-key
    return (
      <a
        key={Math.random()}
        href="#"
        className="p-2 cursor-pointer pointer-events-auto w-15 h-15 border-2 border-black border-opacity-60 float-left relative mr-3.5 rounded-lg box-border transition-all duration-300 flex justify-center items-center"
      >
        <Image height={30} width={30} src={ico} alt="icon" className="text-black" />
      </a>
    );
  });

  return (
    <motion.div  initial={{opacity:0.5 , scale:0.5} }  transition={{duration:2}} whileInView={{opacity:1, scale:1}} className="flex  flex-row items-center justify-between ">
      <motion.main drag  dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
        variants={variants}
        initial="hidden"

        animate="enter"
        transition={{ type: "linear", duration: 2 }}
      >
        <div className="z-10  w-[80svw] items-center justify-between font-mono lg:flex text-sm ">
          <div className="flex">

            <Image src={image} alt="helmet" width={1500} height={1500} />
       

          </div>

          <div className=" place-self-center mt-5 lg:col-span-7">
            <div className="grid grid-cols-6 lg:mx-24  ">{IconHtml}</div>
            <h1 className="max-w-4xl lg:mx-24  font-custom  mb-4 mt-8  text-3xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
              {title}
            </h1>
            <p className="max-w-5xl lg:mx-24 mb-6 font-light text-black  lg:mb-8 md:text-lg lg:text-xl dark:text-black">
              {description}
            </p>
          </div>
        </div>
      </motion.main>
    </motion.div>
  );
};
export default ShowCase;
