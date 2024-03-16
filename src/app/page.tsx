
"use client"
import ShowCase from "../app/components/containers/ShowCase";
import Footer from "../app/components/layout/Footer";
import Header from "../app/components/layout/Header";
import Details from "../app/components/containers/Details";
import Quote from "../app/components/containers/Quote";
import { Product, DetailProps } from "../app/components/model/Product";
import { NavItems, SubNavItems } from "./components/model/NavItem";
import ItemProduct from "./components/containers/ItemProduct";
import Banner from "./components/containers/Banner";
import ServiceInfo from "./components/containers/ServiceInfo";
import { motion, useScroll } from "framer-motion";
import ProductCard from "./components/containers/product/ProductCard";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  }
  const { scrollYProgress } = useScroll();

  const products: Product[] = [{
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    image: "https://www.myhqbc.com/images/helmet-feature4.png",
    imageArray: ["https://www.myhqbc.com/images/helmet-feature3.png", "https://www.myhqbc.com/storage/images/thumb_1564739456_PaulLange_Prilba_09-copy.jpg", "https://www.myhqbc.com/images/helmet-feature5.png"],
    color: "bg-blue-500",
  },
  {
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    image: "https://www.myhqbc.com/images/helmets_main.jpg",
    imageArray: ["https://www.myhqbc.com/images/helmet-feature2_part1.png", "https://www.myhqbc.com/storage/images/thumb_1564740528_Q090363_1-copy.jpg", "https://www.myhqbc.com/images/helmet-feature5.png"],
    color: "bg-red-500",
  }
  ]

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

  const histories = [
    { img: "/images/History-picture.png", title: "2019", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: "/images/History-picture.png", title: "2020", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: "/images/History-picture.png", title: "2021", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: "/images/History-picture.png", title: "2022", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: "/images/History-picture.png", title: "2023", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: "/images/History-picture.png", title: "2024", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  ]

  // TODO: refactor this so it can have a proper structure
  const productHighlight = [
    {
      title: "Branding",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      link: "/"
    }
    , {
      title: "Branding",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", link: "/"
    }
    ,
    {
      title: "Branding",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      link: "/"
    },
    {
      title: "Branding",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      link: "/"
    }]

  return (
    <>  <motion.div
      className="progress-bar rounded-lg"
      style={{ scaleX: scrollYProgress }}
    />
      <Header navItems={navItems} subNavItems={subNavItems} />

      <ServiceInfo img="url(/images/service.jpg)" title="What is Lorem Ipsum?" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" subtitle="PREPARED TO PRODUCE YOUR COMPONENTS IN HIGH VOLUME" />
      <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 px-10">
        <ProductCard img="/images/service.jpg" card={productHighlight}
          lines={["Lorem Ipsum is simply dummy text of the", "printing and typesetting industry"]} />
        <ShowCase title="NOT JUST AN ORDINARY SHELL" description="InMould technology makes the helmet lighter and very firm. This technology is currently the best one for making ultralight helmets and providing you maximum protection. How does InMould work? Expandable polystyrene is injected into our polycarbonate shells under pressure, heat and steam. The inner and outer shell are just one piece, they will not separate, so you can enjoy your ride to the fullest." image="/images/helmet-feature1@2x.png" icon={['/images/icon_pc.svg', "/images/icon_inmold.svg"]} variants={variants}></ShowCase>
        <Details product={products} />
        <Quote />
      </main>
      <Banner title={"Heating in winter, <br/> cooling in summer"} svgs={[{ title: "Lore Ip", svg: '/images/icon_pc_white.svg' }, { title: "Lore Ip", svg: '/images/icon_pc_white.svg' }, { title: "Lore Ip", svg: '/images/icon_pc_white.svg' }]} />
      <Footer />
    </>
  );
}
