
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