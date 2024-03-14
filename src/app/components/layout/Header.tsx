"use client"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { FC, Fragment } from "react";
import HeaderNavItem from "../model/HeaderNavItem";
import { NavItems, SubNavItems } from "../model/NavItem";
import Image from "next/image";
interface HeaderProps {
    navItems: NavItems[];
    subNavItems: SubNavItems[][];
}


const Header: FC<HeaderProps> = ({ navItems, subNavItems }) => {
    return (
        <Popover className={"font-custom text-[#000] container mx-auto flex justify-between items-center border-b-2 border-black text-2xl px-6 py-2 h-24 mb-8 z-1"}>
            <a className="flex-none text-xl font-custom text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">
                <Image src="/images/logo.png" width={170} height={50} alt="logo" className="invert"/>
            </a>
            <div className="grow">
                <div className="hidden md:flex items-center justify-end mr-10 gap-2 md:gap-8">
                    {navItems.map((navItem, index) => (
                        <HeaderNavItem
                            key={index}
                            navItem={navItem}
                            subNavItems={subNavItems[index] || []}
                        />
                    ))}
                </div>
            </div>
            <div className="flex grow items-center justify-end md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md 
                bg-[#fff] p-2 text-[#000] hover:bg-gray-500 focus:outline-none focus:ring-2
                focus:ring-inset focus:ring-indigo-500 block">
                    <span className="sr-only">
                        Open menu
                    </span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
            </div>
            <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
            <Transition
                as={Fragment}
                enter="transform duration-300 ease-out transition"
                enterFrom="opacity-0 scale-95"
                enterTo=" scale-100"
                leave="transform duration-100 ease-in transition"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 right-0 origin-top-right transform p-2
                transition md:hidden block opacity-100">
                    <div className="rounded-lg bg-[#fff] shadow-lg ring-1  divide-y-2 opacity-100 block
                    divide-gray-50">
                        <div className="px-5 pt-5 pb-6 opacity-100">
                            <div className="flex items-center justify-between">
                                <h1 className="font-bold text-black">Page Title</h1>
                                <div className="-nr-2">
                                    <Popover.Button className="inline-flex items-center justify-centar rounded-md
                                        bg-[#fff] p-2 text-[#000] hover:bg-gray-100 hover:text-gray-500 focus:outline-none
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6 opacity-100">
                                <nav className="grid gap-y-8">
                                    {navItems.map((navItem, index) => (
                                        <HeaderNavItem
                                            key={index}
                                            navItem={navItem}
                                            subNavItems={subNavItems[index] || []}
                                        />
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
            <a
              className="hidden md:flex inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-gray-900 to-gray-700 hover:from-gray-900 hover:to-gray-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#"
            >
              GET A QUOTE
              <svg
                className=" size-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
            </a>
        </Popover>
    );
};

export default Header;