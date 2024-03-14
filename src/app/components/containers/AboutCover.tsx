"use client"
import React from "react";
import Image from "next/image";

interface ShowCaseProps {
    title: string;
    image: string;
}

const Cover: React.FC<ShowCaseProps> = ({
    title,
    image
}) => {
    return (
        <>
            <div className="font-custom relative m-9 flex justify-center items-center h-96 overflow-hidden">
                <h1 className="absolute text-white text-5xl font-bold">{title}</h1>
                <img src={image} alt="about-us-cover" width={1500} height={600} className="border-1 rounded-rounded-lg rounded-t-3xl rounded-b-3xl object-cover w-full h-full" />
            </div>
        </>
    );
};

export default Cover;
