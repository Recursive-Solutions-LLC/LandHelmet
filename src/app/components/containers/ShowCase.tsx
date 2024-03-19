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
  right,
}) => {
  const IconHtml = icon.map((ico) => {
    return (
      <a
        key={Math.random()}
        href="#"
        className="p-2 cursor-pointer pointer-events-auto w-15 h-15 border-2 border-black border-opacity-60 float-left relative mr-3.5 rounded-lg box-border transition-all duration-300 flex justify-center items-center"
      >
        <Image
          height={30}
          width={30}
          src={ico}
          alt="icon"
          className="text-black"
        />
      </a>
    );
  });
  const variantText = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  const variantLeft = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  const variantRight = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  const renderImage = (
    <motion.div
      variants={right ? variantRight : variantLeft}
      initial="hidden"
      whileInView="enter"
      viewport={{ once: true }}
      transition={{ type: "linear", duration: 2 }}
      className="flex"
    >
      <Image src={image} alt="helmet" width={1500} height={1500} />
    </motion.div>
  );
  const renderText = (
    <div className=" place-self-center mt-5 lg:col-span-7">
      <motion.div  initial="hidden"
        variants={variantText}
        transition={{ type: "linear", duration: 2 }}
        whileInView="enter"
        viewport={{ once: true }} className="grid grid-cols-6 lg:mx-24  ">{IconHtml}</motion.div>
      <motion.h1
        initial="hidden"
        variants={variantText}
        transition={{ type: "linear", duration: 2 }}
        whileInView="enter"
        viewport={{ once: true }}
        className="max-w-4xl lg:mx-24  font-custom  mb-4 mt-8  text-3xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-black"
      >
        {title}
      </motion.h1>
      <motion.p
        initial="hidden"
        variants={variantText}
        transition={{ type: "linear", duration: 3 }}
        whileInView="enter"
        viewport={{ once: true }}
        className="max-w-5xl lg:mx-24 mb-6 font-light text-black  lg:mb-8 md:text-lg lg:text-xl dark:text-black"
      >
        {description}
      </motion.p>
    </div>
  );

  return (
    <motion.div className="flex  flex-row items-center justify-between ">
      <motion.main>
        <div className="z-10  w-[80%] items-center justify-between font-mono lg:flex text-sm ">
          {right ? (
            <>
              {renderImage}
              {renderText}
            </>
          ) : (
            <>
              {renderText}
              {renderImage}
            </>
          )}
        </div>
      </motion.main>
    </motion.div>
  );
};
export default ShowCase;
