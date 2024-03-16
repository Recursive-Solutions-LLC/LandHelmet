
import Footer from "../../app/components/layout/Footer";
import Header from "../../app/components/layout/Header";
import "../../app/globals.css";
import Cover from "@/app/components/containers/Cover";
import { NavItems, SubNavItems } from "@/app/interfaces";

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
        < Cover title={"About Us"}     srcMobile={"/images/about-us/mobile/cover.png"} srcDesktop={"/images/about-us/desktop/cover.png "}/>
      <Footer />
    </>
  );
}
export default AboutUs;
