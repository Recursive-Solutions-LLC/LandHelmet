
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
export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 0.8, x: 0, y: 0},
  }
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
  return (
    <>
      <Header  navItems={navItems} subNavItems={subNavItems}/>
      <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 px-10">
        <ShowCase title="NOT JUST AN ORDINARY SHELL" description="InMould technology makes the helmet lighter and very firm. This technology is currently the best one for making ultralight helmets and providing you maximum protection. How does InMould work? Expandable polystyrene is injected into our polycarbonate shells under pressure, heat and steam. The inner and outer shell are just one piece, they will not separate, so you can enjoy your ride to the fullest." image="/images/helmet-feature1@2x.png" icon={['/images/icon_pc.svg', "/images/icon_inmold.svg"]} variants={variants}></ShowCase>
        <Details product={products} />
        <About1/>
        <Quote/>
        <section>
  
      <ParallaxText baseVelocity={5}> <ItemProduct title="NOT JUST AN ORDINARY SHELL" description="InMould technology makes the helmet lighter and very firm. This technology is currently the best one for making ultralight helmets and providing you maximum protection. How does InMould work? Expandable polystyrene is injected into our polycarbonate shells under pressure, heat and steam. The inner and outer shell are just one piece, they will not separate, so you can enjoy your ride to the fullest." image="/images/helmet-feature1@2x.png" icon={[]} variants={undefined} />
     </ParallaxText>
     
    </section>
      </main>
      <Footer/>
    </>
  );
}
