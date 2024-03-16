
"use client"
import ShowCase from "../app/components/containers/ShowCase";
import About1 from "../app/components/containers/About";
import Footer from "../app/components/layout/Footer";
import Header from "../app/components/layout/Header";
import Details from "../app/components/containers/Details";
import Quote from "../app/components/containers/Quote";
import { Product,DetailProps } from "../app/components/model/Product";
import { NavItems, SubNavItems } from "./components/model/NavItem";
import ParallaxText from "../app/components/containers/MagicScroll"
import ItemProduct from "./components/containers/ItemProduct";
import Parallax from "./components/containers/parallax/Parallax";
import ServiceInfo from "./components/containers/ServiceInfo";
import { motion, useScroll } from "framer-motion";
import CardsContainer from "./components/containers/CardsContainer";
import ServiceInfo2 from "./components/containers/ServiceInfo2";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0},
  }

  const { scrollYProgress } = useScroll();

  const products: Product[] = [{
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    image: "https://www.myhqbc.com/images/helmet-feature4.png",
    imageArray: ["https://www.myhqbc.com/images/helmet-feature3.png","https://www.myhqbc.com/storage/images/thumb_1564739456_PaulLange_Prilba_09-copy.jpg","https://www.myhqbc.com/images/helmet-feature5.png"],
    color: "bg-blue-500",
  },
  {
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    image: "https://www.myhqbc.com/images/helmets_main.jpg",
    imageArray: ["https://www.myhqbc.com/images/helmet-feature2_part1.png","https://www.myhqbc.com/storage/images/thumb_1564740528_Q090363_1-copy.jpg","https://www.myhqbc.com/images/helmet-feature5.png"],
    color: "bg-red-500",
  }
]

  const navItems: NavItems []= [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
  ];

  const subNavItems:SubNavItems[][]= [
    [
        { title: "Sub Item 1", link: "/sub-item-1" },
        { title: "Sub Item 2", link: "/sub-item-2" },
    ],
    [
        { title: "Sub Item 3", link: "/sub-item-3" },
        { title: "Sub Item 4", link: "/sub-item-4" },
    ]
  ];

  const cards = [
    { 
      title: 'John Doe', 
      description: 'Frontend Developer', 
      image: '/images/posters-unknown-person-silhouette-whith-red-tie.jpg.jpg',
      profileUrl: '#'
    },
    { 
      title: 'John Doe', 
      description: 'Frontend Developer', 
      image: '/images/posters-unknown-person-silhouette-whith-red-tie.jpg.jpg',
      profileUrl: '#'
    },
    { 
      title: 'John Doe', 
      description: 'Frontend Developer', 
      image: '/images/posters-unknown-person-silhouette-whith-red-tie.jpg.jpg',
      profileUrl: '#'
    },
    { 
      title: 'John Doe', 
      description: 'Frontend Developer', 
      image: '/images/posters-unknown-person-silhouette-whith-red-tie.jpg.jpg',
      profileUrl: '#'
    },
    { 
      title: 'John Doe', 
      description: 'Frontend Developer', 
      image: '/images/posters-unknown-person-silhouette-whith-red-tie.jpg.jpg',
      profileUrl: '#'
    },
    { 
      title: 'John Doe', 
      description: 'Frontend Developer', 
      image: '/images/posters-unknown-person-silhouette-whith-red-tie.jpg.jpg',
      profileUrl: '#'
    },
    { 
      title: 'John Doe', 
      description: 'Frontend Developer', 
      image: '/images/posters-unknown-person-silhouette-whith-red-tie.jpg.jpg',
      profileUrl: '#'
    },
  ];

  //this 2 components are only for testing the service info 2 component
  const mockServiceInfoImg = <img src="/images/progressive-big2-1080x-q72-1080x-q72-540x-q72.webp" className="" alt="mock image" width={600} height={900}/>;
  const mockServiceInfoText = (
  <div>
    <h1 className="text-black mb-2">LOREM IPSUM</h1>
    <p className=" mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Nisl condimentum id venenatis a condimentum vitae sapien.</p>
    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Nisl condimentum id venenatis a condimentum vitae sapien.</p>
  </div>);

  return (
    <>
      <Header  navItems={navItems} subNavItems={subNavItems}/>
   
      <ServiceInfo img="url(/images/service.jpg)" title="What is Lorem Ipsum?" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" subtitle="PREPARED TO PRODUCE YOUR COMPONENTS IN HIGH VOLUME"/>
      <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 px-10">
     <ShowCase title="NOT JUST AN ORDINARY SHELL" description="InMould technology makes the helmet lighter and very firm. This technology is currently the best one for making ultralight helmets and providing you maximum protection. How does InMould work? Expandable polystyrene is injected into our polycarbonate shells under pressure, heat and steam. The inner and outer shell are just one piece, they will not separate, so you can enjoy your ride to the fullest." image="/images/helmet-feature1@2x.png" icon={['/images/icon_pc.svg', "/images/icon_inmold.svg"]} variants={variants}></ShowCase>
        <ShowCase title="NOT JUST AN ORDINARY SHELL" description="InMould technology makes the helmet lighter and very firm. This technology is currently the best one for making ultralight helmets and providing you maximum protection. How does InMould work? Expandable polystyrene is injected into our polycarbonate shells under pressure, heat and steam. The inner and outer shell are just one piece, they will not separate, so you can enjoy your ride to the fullest." image="/images/helmet-feature1@2x.png" icon={['/images/icon_pc.svg', "/images/icon_inmold.svg"]} variants={variants}></ShowCase>
        <ShowCase title="NOT JUST AN ORDINARY SHELL" description="InMould technology makes the helmet lighter and very firm. This technology is currently the best one for making ultralight helmets and providing you maximum protection. How does InMould work? Expandable polystyrene is injected into our polycarbonate shells under pressure, heat and steam. The inner and outer shell are just one piece, they will not separate, so you can enjoy your ride to the fullest." image="/images/helmet-feature1@2x.png" icon={['/images/icon_pc.svg', "/images/icon_inmold.svg"]} variants={variants}></ShowCase>
     
        <Details product={products} />
        <About1/>
        <Quote/>
        <section>
        <Parallax  className="w-screen h-screen"  type={"services"}/>
        <Parallax  className="w-screen h-screen"  type={""}/>
        </section>
  
        <section>

     <CardsContainer cards={cards} />
     <ServiceInfo2 imageComponent={mockServiceInfoImg} textComponent={mockServiceInfoText} />
    </section>

    
      </main>
      <Footer/>
    </>
  );
}
