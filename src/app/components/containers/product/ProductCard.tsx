"use client"
import "./Product.scss";
import React, { useRef } from "react";
import Image from "next/image";
import { animate, motion,useInView } from "framer-motion";

const ProductCard = (data:any) => {
    const variants ={
        initial:{
            x:-500,
            y:100,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        }
    }
  return (
    <motion.div className="product w-screen h-screen text-black  mb-10 justify-between "   viewport={{ once: true, amount: 0.5 }} whileInView="animate" initial="initial" >

      <motion.div className="text-container gap-5 " variants={variants}>
        <div className="font-medium text-md text-gray-600 text-right">
          {" "}
       
      {data.lines.map((line:string, index:number) => (
        <p key={index}>{line}</p>
      ))}
 
        </div>
        <hr/>
      </motion.div>
      <motion.div className="title-container "variants={variants}>
        <div className="title">
          <Image   src={data.img} alt="people" />
          <h1>
            <b className="hover:text-[#B0A47F]">Unique</b> Ideas
          </h1>
        </div>
        <div className="title  ">
          <h1>
            <b className="hover:text-[#B0A47F]">For Your</b> Business{" "}
          </h1>
          <button>What we do?</button>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 px-4 sm:px-6 lg:px-8 lg:grid-cols-4">
      {data.card.map((box:any, index:number) => (
         <motion.div key={index} className="card-container  " variants={variants}>
         <div className="box hover:bg-gray-700 hover:text-white">
           <h2 className="text-lg font-semibold" >Branding</h2>
           <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry standard dummy text
             ever since the 1500s,
           </p>
           <button className="text-white hover:animate-pulse"  >What we do?</button>
         </div>
      
       </motion.div>
      ))}
      </div>
  
   
    </motion.div>
  );
};
export default ProductCard;
