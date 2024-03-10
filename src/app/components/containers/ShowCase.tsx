
"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"

interface ShowCaseProps {
  title: string;
  description: string;
  image: string;
  icon: string[]
  variants: any
}

const ShowCase: React.FC<ShowCaseProps> = ({ title, description, image,icon ,variants }) => {
  const IconHtml = icon.map((ico) =>{
  
    // eslint-disable-next-line react/jsx-key
    return (  <a key={Math.random()}
      href="#"
      className="p-2 cursor-pointer pointer-events-auto w-15 h-15 border-2 border-gray-400 border-opacity-30 float-left relative mr-3.5 rounded-lg box-border transition-all duration-300 flex justify-center items-center"
    >
     
      <Image height={30} width={30} src={ico} alt="icon"></Image>
    </a>)
  });
  return (
    <div className="flex min-h-screen flex-row items-center justify-between p-15">
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex">
        <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear", duration: 2}}
    >
          <Image src={image} alt="mockup" width={1500} height={1500}></Image>
    </motion.main>
   
        </div>

        <div className=" place-self-center mt-5 lg:col-span-7">
          <div className="grid grid-cols-6 lg:mx-24  ">
            {IconHtml}
           
          </div>
          <h1 className="font-custom max-w-4xl lg:mx-24  font-semibold  mb-4 mt-8  text-3xl  tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {title}
          </h1>
          <p className="max-w-5xl lg:mx-24 mb-6 font-light text-gray-500  lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {description}
          </p>
        
        </div>
      </div>
    </div>
  );
};
export default ShowCase;
