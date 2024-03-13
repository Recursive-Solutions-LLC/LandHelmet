"use client";
import { useState } from 'react';
import { NavItems, SubNavItems } from "../model/NavItem";

const HeaderNavItem = ({ navItem, subNavItems }: { navItem: NavItems; subNavItems: SubNavItems[] }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="z-1 relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <a href={navItem.link} className="hidden md:flex">
                {navItem.title}
            </a>
            <a href={navItem.link} className="md:hidden block text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">
                {navItem.title}
            </a>
            {subNavItems.length > 0 && (
                <div
                    className={`z-20 justify-left absolute top-full left-5 bg-white shadow-md p-2 w-5rem border-2 border-black ${isHovered ? 'block' : 'hidden'}`}
                >
                    {subNavItems.map((subNavItem, index) => (
                        <div key={index} style={{ width: '7rem' }}>
                            <a href={subNavItem.link} className='hidden md:flex'>{subNavItem.title}</a>
                            <a href={subNavItem.link} className='md:hidden block text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'>{subNavItem.title}</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}; export default HeaderNavItem;