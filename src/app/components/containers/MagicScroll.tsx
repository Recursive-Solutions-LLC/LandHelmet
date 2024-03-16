// ProjectMain component
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrone from "../../../../public/images/logo.png";

gsap.registerPlugin(ScrollTrigger);

interface History {
  histories: SimpleHistory[]
}

interface SimpleHistory {
  title: string;
  img: string;
  description: string;
}

const ProjectMain: React.FC<History> = ({
  histories
}) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${900 * histories.length}px`, // Adjust the distance based on the number of elements
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${600*histories.length}px`, // Adjust the end scroll position based on the number of elements
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, [histories.length]);

  return (
    <section style={{ backgroundImage: 'url("/images/history-background.png")', backgroundSize: 'cover' }} >
      <div ref={triggerRef} className="w-screen font-custom scroll-section-outer">
        <h2 className="pl-10 pt-10 text-white text-6xl">Our Roots History</h2>
        <div className="h-screen w-screen flex overflow-x-auto">
          <div ref={sectionRef} className="scroll-section-inner flex">
            {histories.map((history, index) => (
              <div key={index} className={`m-9 ml-48 flex-shrink-0 ${index % 2 === 0 ? 'mt-12' : 'mt-40'}`}>
                <div className={`project-sl__single  flex`}>
                  <div className="flex" >
                    <div className="flex items-center">
                      <Image src={history.img} alt="Image" width={300} height={450} className="rounded-lg rounded-t-3xl rounded-b-3xl" />
                    </div>
                    <div className="content m-2" style={{ width: "25rem" }}>
                      <h2 className="opacity-100">
                        <p className="text-white text-7xl">
                          {history.title}
                        </p>
                        <p className="text-white text-2xl">
                          {history.description}
                        </p>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectMain;