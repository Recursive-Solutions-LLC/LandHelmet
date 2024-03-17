"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CoverProps } from "@/app/interfaces";

const Cover: React.FC<CoverProps> = ({ title, srcDesktop, srcMobile }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  const imageSrc = windowWidth <= 768 ? srcMobile : srcDesktop;
  return (
    <>
      <div className="z-1   flex justify-center items-center h-96">
        <h1 className="absolute text-white text-5xl font-bold">{title}</h1>

        <Image
         src={imageSrc}
          alt="about-us-cover"
          width={1500}
          height={600}
          className="   object-cover w-screen h-full"
        />
      </div>
      <div className="my-8 lg:mx-24 md:mx-12 sm:mx-12 xs:mx-12 lg:flex md:flex justify-between lg:gap-72 md:gap-16 sm:gap-12 font-custom ">
        <h2 className="ml-4 font-semibold lg:min-w-[16rem] md:min-w-[14rem] text-black lg:text-4xl text-3xl">
          Our Talented <br />
          <strong className="text-field text-black">Leadership</strong> Team
        </h2>
        <div className=" ml-4 mt-4 space-y-2 md:mt-0  text-black text-2xl">
          <p className="leading-relaxed ">
            Exceptional thinkers, achievers, collaborators, and trailblazers
            fuels every success we accomplish.
          </p>
          <a
            className="text-bold  inline-flex appearance-none items-center py-2 font-medium leading-8 text-field decoration-field underline-offset-8 outline-none transition-all hover:underline focus-visible:underline"
            href="/careers"
          >
            Careers at Shepper
            <svg
              aria-hidden="true"
              width="1rem"
              height="1rem"
              focusable="false"
              data-prefix="fal"
              data-icon="arrow-right"
              className="svg-inline--fa fa-arrow-right ml-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M443.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0L244.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l176-176z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cover;
