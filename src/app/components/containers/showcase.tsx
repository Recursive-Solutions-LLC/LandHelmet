import React from "react";
import Image from "next/image";
interface ShowCaseProps {
  title: string;
  description: string;
  image: string;
}

const ShowCase: React.FC<ShowCaseProps> = ({ title, description, image }) => {
  return (
    <div className="lex min-h-screen flex-row items-center justify-between p-15">
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex">
          <Image src={image} alt="mockup" width={1500} height={1500}></Image>
        </div>

        <div className=" place-self-center lg:col-span-7">
          <h1 className="font-personalizada max-w-4xl font-semibold lg:mx-24 mb-4 mt-8  text-3xl  tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {title}
          </h1>
          <p className="max-w-5xl mb-6 font-light text-gray-500 lg:mx-24 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {description}
          </p>
          <a
            href="#"
            className="lg:mx-24 inline-flex items-center justify-center  py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Helmets with this feature
            <svg
              className="hover:animate-ping w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ShowCase;
