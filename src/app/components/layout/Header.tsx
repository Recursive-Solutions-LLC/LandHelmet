"use client"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Fragment } from "react";

const Header = () => {
    return (
        <Popover className={"font-custom text-[#000] container mx-auto flex items-center border-b-2 border-black text-2xl px-6 py-2 h-24 mb-8 z-999"}>
            <h1 className="font-bold">Page Title</h1>
            <div className="grow">
                <div className="hidden md:flex items-center justify-center gap-2 md:gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/">Home</Link>
                    <Link href="/">Home</Link>
                    <Link href="/">Home</Link>
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
                transition md:hidden block opacity-100 z-998">
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
                                    <Link href="/" className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">Home</Link>
                                    <Link href="/" className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">Home</Link>
                                    <Link href="/" className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">Home</Link>
                                    <Link href="/" className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">Home</Link>
                                    <Link href="/" className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">Home</Link>
                                </nav>
                            </div>
                            <div className="mt-6 flex flex-col items-center gap-2 opacity-100">
                                <Link href="register" className="rounded-md bg-[#fff] px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2
                                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                                    Sign up
                                </Link>
                                <Link href="register" className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium md:text-xl w-full
                                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
            <div className="hidden md:block">
                <Link href="register" className="mr-4 font-bold">
                    Sign up
                </Link>
                <Link href="register" className="font-bold">
                    Login
                </Link>
            </div>
        </Popover>
    );
};

export default Header;