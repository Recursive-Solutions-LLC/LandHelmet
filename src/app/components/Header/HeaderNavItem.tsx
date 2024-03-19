"use client";
import { useState } from 'react';
import { HeaderLink } from "@/app/interfaces";
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const HeaderNavItem = ({ header }: { header: HeaderLink }) => {
    const [isHovered, setIsHovered] = useState(false);
    console.log("este" + JSON.stringify(header.img))
    return (
        <div className="z-1 relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="hidden md:flex px-4">
                <Link href={header.link}>
                    {header.title}
                    <div className={` ${isHovered ? 'block' : 'hidden'} border-2 border-b border-black`} />
                </Link>
            </div>
            <div className="md:hidden block text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">
                {header.title}
            </div>
            {header.sublinks.length > 0 && (
                <div className={`z-20 text-white pt-10 group w-full ${isHovered ? 'block' : 'hidden'} dropdown `} >
                    <div className="fixed left-0 w-full">
                        <div className={` group-hover  flex  justify-left  bg-gray-700 shadow-md w-full border-2 border-black relative`}>
                            <div className="container medium single-dropdown w-full">
                                <div className="flex gap-6 w-2/3">
                                    <div className="flex flex-col gap-3 flex-1">
                                        <h1 className='text-6xl text-title'><Link href={header.link}>{header.title}</Link> </h1>
                                        <h2 className='text-3xl text-body text-bold text-p1'>{header.subtitle}</h2>
                                        <p className='text-lg text-body'>{header.text}</p>
                                    </div>
                                    <div className="flex flex-col flex-1 ">
                                        <div className="border-b border-white">
                                            {header.sublinks.map((subLink, index) => (
                                                <div key={index} className="m-0 p-0 gap-0">
                                                    <div className={` border-t border-white items-center`}>
                                                        <Link href={subLink.link} className='text-body text-bold  py-3 hidden text-lg md:flex text-gray-300 hover:text-p1'><h1>{subLink.title}</h1></Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='dropdown-image absolute w-full'>
                                <figure className='overlay relative'>
                                    <picture className='styled-image overlay relative'>
                                        <div className={`absolute top-0 right-0 z-999 w-full h-full bg-cover bg-center')]`} style={{backgroundImage: `url(${header.img})`}} />                       
                                        <div className="absolute right-0 top-0 z-999 right-0  top-0 w-full h-full overlay-gradient" />
                                    </picture>
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}; export default HeaderNavItem;