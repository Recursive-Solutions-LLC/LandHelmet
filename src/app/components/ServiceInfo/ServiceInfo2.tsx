// import React, { useEffect, useRef, useState, JSX } from 'react';

// interface ServiceInfo2Model {
//   imageComponent: JSX.Element;
//   textComponent: JSX.Element;
// }

// const ServiceInfo2 = (model: ServiceInfo2Model) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const { imageComponent, textComponent } = model;

//   const imageRef = useRef<HTMLImageElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           if(imageRef.current) {
//             observer.unobserve(imageRef.current);
//           }
          
//           if(textRef.current) {
//             observer.unobserve(textRef.current);
//           }
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if(imageRef.current) {
//         observer.observe(imageRef.current);
//     }

//     if(textRef.current) {
//         observer.observe(textRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="grid my-3 grid-cols-1 md:grid-cols-2 justify-center max-w-2xl mx-auto">
//       <div ref={imageRef} className={`mr-2 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//         { React.cloneElement(imageComponent, { className: 'w-auto max-h-fit rounded-sm' }) }
//       </div>
//       <div ref={textRef} className={`ml-2 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//         { React.cloneElement(textComponent, { className: 'w-auto max-h-fit text-xl text-gray-800 w-2/3' }) }
//       </div>
//     </div>
//   );
// };

// export default ServiceInfo2;

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TwoColumnLayoutProps {
  imageComponent: React.ReactNode;
  textComponent: React.ReactNode;
}

const ServiceInfo2: React.FC<TwoColumnLayoutProps> = ({ imageComponent, textComponent }) => 
{
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      controlsLeft.start({ opacity: 1, x: 0 });
      controlsRight.start({ opacity: 1, x: 0 });
    }
  }, [isSmallScreen, controlsLeft, controlsRight]);

  return (
    <div className="flex flex-col md:flex-row w-full mb-2 overflow-hidden">
      <motion.div ref={containerRef} initial={{ opacity: 0, x: isSmallScreen ? 0 : -100 }} animate={controlsLeft} transition={{ duration: 1 }} className="md:w-1/2 flex justify-center items-center">
        {imageComponent}
      </motion.div>
      {isSmallScreen && (
        <motion.div initial={{ opacity: 0, y: 100 }} animate={controlsRight} transition={{ duration: 1 }} 
          className="md:w-full flex justify-center items-center">
          {textComponent}
        </motion.div>
      )}
      {!isSmallScreen && (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={controlsRight} transition={{ duration: 1 }} 
          className="md:w-1/2 flex justify-center items-center">
          {textComponent}
        </motion.div>
      )}
    </div>
  );
};

export default ServiceInfo2;
