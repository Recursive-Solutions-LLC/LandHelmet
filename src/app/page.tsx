import ShowCase from "./components/containers/ShowCase";
import About1 from "./components/containers/About";
import Footer from "./components/layout/footer";
import Header from "./components/containers/Header";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },

  }
  return (
    <>
      <Header/>

      <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 px-10">
        <ShowCase title="NOT JUST AN ORDINARY SHELL" description="InMould technology makes the helmet lighter and very firm. This technology is currently the best one for making ultralight helmets and providing you maximum protection. How does InMould work? Expandable polystyrene is injected into our polycarbonate shells under pressure, heat and steam. The inner and outer shell are just one piece, they will not separate, so you can enjoy your ride to the fullest." image="/images/helmet-feature1@2x.png" icon={['/images/icon_pc.svg', "/images/icon_inmold.svg"]} variants={variants}></ShowCase>
        <About1></About1>
      </main>
      <Footer></Footer>
    </>
  );
}
