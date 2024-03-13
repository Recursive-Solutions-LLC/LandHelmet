
import ShowCase from "@/app/components/containers/ShowCase";
import About1 from "@/app/components/containers/About";
import Footer from "../../app/components/layout/Footer";
import Header from "../../app/components/layout/Header";
import Details from "@/app/components/containers/Details";
import Quote from "@/app/components/containers/Quote";
import { Product, DetailProps } from "@/app/components/model/Product";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { NavItems, SubNavItems } from "@/app/components/model/NavItem";

const AboutUs = () => {
  const navItems: NavItems[] = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
  ];

  const subNavItems: SubNavItems[][] = [
    [
      { title: "Sub Item 1", link: "/sub-item-1" },
      { title: "Sub Item 2", link: "/sub-item-2" },
    ],
    [
      { title: "Sub Item 3", link: "/sub-item-3" },
      { title: "Sub Item 4", link: "/sub-item-4" },
    ]
  ];
  return (
    <>
      <Header navItems={navItems} subNavItems={subNavItems} />


      <Footer />
    </>
  );
}
export default AboutUs;
