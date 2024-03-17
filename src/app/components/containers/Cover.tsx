import React from "react";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';
import { CoverProps } from "@/app/interfaces";

const Cover: React.FC<CoverProps> = ({ title, srcDesktop, srcMobile }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const imageSrc = isMobile ? srcMobile : srcDesktop;

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
      <div className="my-8 mx-12 lg:mx-24 flex justify-between gap-12 md:gap-16 lg:gap-72 font-custom">
        <h2 className="ml-4 text-3xl lg:text-4xl font-semibold text-black">
          Lorem Ipsum Dolor Sit <br />
          <strong className="text-field">Amet Consectetur</strong> Adipiscing
        </h2>
        <div className="ml-4 mt-4 md:mt-0 space-y-2 text-2xl text-black">
          <p className="leading-relaxed">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            className="inline-flex items-center py-2 font-medium leading-8 text-field decoration-field underline-offset-8 outline-none transition-all hover:underline focus-visible:underline"
            href="/opportunities"
          >
            Explore Opportunities
            <svg
              aria-hidden="true"
              width="1rem"
              height="1rem"
              className="ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M443.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 240H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h377.4L244.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l176-176z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cover;
