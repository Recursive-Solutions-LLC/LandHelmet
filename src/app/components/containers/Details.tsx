"use client"

import { motion } from "framer-motion";
import React, { useState } from "react"
import { DetailProps, Product} from "../model/Product"

  const Details: React.FC<DetailProps> = (imageDetail:DetailProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedProduct,setSelectedProduct] = useState(imageDetail.product[0]);
 
  
 
   const htmlRender = imageDetail.product.map((product:Product,index)=>{
   const style= "h-8 w-8 rounded-full border  ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200 "+product.color
    

return  <button key={index}   onClick={ ()=>{
    setSelectedProduct(product)
}} type="button" className={style}></button>
         
   })

 
   const variants = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
    },
    animate: {
      x: 100, // Mueve el elemento hacia la derecha.
      y: [0, -50, 0], // Efecto de salto.
      scale: [1, 1.1, 1],
      rotateY: [0, 360],
      opacity: [1, 0.5, 1],
      transition: { 
        duration: 1,

      }
    }
  };

    return ( <div   className=" py-6 sm:py-8">
    <div className="mx-auto max-w-screen-lg px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-1">
    
        <div className="grid gap-4 lg:grid-cols-5">
          <div className="order-last flex gap-4 lg:order-none lg:flex-col">
            <div  onClick={() => {
                setIsClicked(!isClicked)
                let aux: Product = selectedProduct
                aux.image =selectedProduct.imageArray[0];
                aux.imageArray[0] = selectedProduct.image
                setSelectedProduct(aux)
                }} className="overflow-hidden rounded-lg border-gray-900 hover:border-gray-700 cursor-pointer border">
              <img src={selectedProduct.imageArray[0]} loading="lazy" alt="Image Product" className="h-full w-full object-cover object-center" />
            </div>
    
            <div className="overflow-hidden rounded-lg border-gray-900 hover:border-gray-700 cursor-pointer border">
              <img src={selectedProduct.imageArray[1]} loading="lazy" alt="Image Product" className="h-full w-full object-cover object-center" />
            </div>
    
            <div className="overflow-hidden rounded-lg border-gray-900 hover:border-gray-700 cursor-pointer border">
              <img src={selectedProduct.imageArray[2]} loading="lazy" alt="Image Product" className="h-full w-full object-cover object-center" />
            </div>
          </div>
    
          <div className="relative overflow-hidden  lg:col-span-4">
          <motion.main
              variants={variants}
              initial="initial"
              animate={isClicked ? "animate" : "initial"}
      
        onClick={() => setIsClicked(!isClicked)}
            >
            <img src="https://www.myhqbc.com/images/helmet-feature4.png" loading="lazy" alt="Photo by Himanshu Dewangan" className=" h-full w-full object-cover object-center " />
            </motion.main>
            
       
          </div>
        </div>
    
        <div className="md:py-8">
    
          <div className="mb-2 md:mb-3">
          <h1 className="   font-custom mt-8  text-xl  tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
          {selectedProduct.title}
            </h1>
            <p className=" font-light text-gray-500  lg:mb-8 md:text-lg lg:text-xl dark:text-black">
            {selectedProduct.description}
            </p>
           
          </div>
     
    
    
          <div className="mb-4 md:mb-6">
            <span className="mb-3 inline-block font-light text-white   md:text-lg lg:text-xl ">Color</span>
    
            <div className="flex flex-wrap gap-2">
            {htmlRender}
               </div>
          </div>
          <div className="flex gap-2.5">
          <div className=" gap-3 flex justify-center">
        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-gray-900 to-gray-700 hover:from-gray-900 hover:to-gray-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
      GET A QUOTE
        <svg  className=" size-5"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z" fill="#ffffff"></path> </g></svg>
            </a>
      </div>  </div>
    
        </div>
    
      </div>
    </div>
    </div>)
}
export default Details