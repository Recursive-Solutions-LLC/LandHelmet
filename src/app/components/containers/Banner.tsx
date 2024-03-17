"use client"
import React from "react";
import Image from "next/image";
import ReactHtmlParser from 'react-html-parser'
import { BannerProps } from "@/app/interfaces";





const Banner: React.FC<BannerProps> = ({
    title,
    svgs
}) => {

    const renderSvgs = svgs.map((svg, index) => (
        <div key={index}>
            <div className="justify-center flex border border-gray-100 mx-2 p-4 lg:p-7 rounded-3xl ">
                <Image height={40} width={40} src={svg.svg} alt="icon" className=" text-white" />
            </div>
            <h1 className="m-2 text-gray-100 justify-center text-center text-lg font-medium leading-6">{svg.title}</h1>
        </div>
    ))
    
    return (
        <>
            <div className="lg:flex  sm:z-1 font-custom  m-9 items-center h-96 bg-[#78797e] rounded-rounded-lg rounded-t-3xl rounded-b-3xl">
                <div id="1" className="flex-1 h-60 flex lg:px-24 pd:mx-12 sm:px-12 xs:px-12 items-center justify-center">
                    <h1 className=" text-gray-100 justify-center text-center lg:text-6xl text-3xl font-medium ">{ReactHtmlParser(title)}</h1>
                </div>
                <div className="flex-1 flex items-center h-24 justify-center">
                    <div id="2" className=" flex gap-8 justify-center items-center lg:px-24 pd:mx-12 sm:px-12 xs:px-12 ">
                        {renderSvgs}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
