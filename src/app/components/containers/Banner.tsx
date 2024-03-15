"use client"
import React from "react";
import Image from "next/image";
import ReactHtmlParser from 'react-html-parser'

interface ShowCaseProps {
    title: string;
    svgs: svg[];
}

interface svg {
    title: string;
    svg: string
}

const Banner: React.FC<ShowCaseProps> = ({
    title,
    svgs
}) => {
    return (
        <>
            <div className="lg:flex md:flex sm: z-1 font-custom  m-9 items-center h-96 bg-[#78797e] rounded-rounded-lg rounded-t-3xl rounded-b-3xl">
                <div id="1" className="flex-1 h-60 flex lg:px-24 pd:mx-12 sm:px-12 xs:px-12 items-center justify-center">
                    <h1 className="text-gray-100 justify-center text-center text-6xl font-bold ">{ReactHtmlParser(title)}</h1>
                </div>
                <div className="flex-1 flex items-center h-24 justify-center">
                    <div id="2" className=" flex gap-8 justify-center items-center lg:px-24 pd:mx-12 sm:px-12 xs:px-12 ">
                        {svgs.map((svg, index) => (
                            <div>
                                <div className="border border-gray-100 p-3 rounded-t-2xl rounded-b-2xl">
                                    <Image height={40} width={40} src={svg.svg} alt="icon" className="text-white" />
                                </div>
                                <h1 className="mt-2 text-gray-100 justify-center text-center text-2xl font-bold ">{svg.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
