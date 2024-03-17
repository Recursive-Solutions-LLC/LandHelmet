import React, { useEffect, useRef, useState, JSX } from 'react';

interface ServiceInfo2Model {
  imageComponent: JSX.Element;
  textComponent: JSX.Element;
}

const ServiceInfo2 = (model: ServiceInfo2Model) => {
  const [isVisible, setIsVisible] = useState(false);

  const { imageComponent, textComponent } = model;

  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if(imageRef.current) {
            observer.unobserve(imageRef.current);
          }
          
          if(textRef.current) {
            observer.unobserve(textRef.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if(imageRef.current) {
        observer.observe(imageRef.current);
    }

    if(textRef.current) {
        observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid my-3 grid-cols-1 md:grid-cols-2 justify-center max-w-2xl mx-auto">
      <div ref={imageRef} className={`mr-2 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        { React.cloneElement(imageComponent, { className: 'w-auto max-h-fit rounded-sm' }) }
      </div>
      <div ref={textRef} className={`ml-2 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        { React.cloneElement(textComponent, { className: 'w-auto max-h-fit text-xl text-gray-800 w-2/3' }) }
      </div>
    </div>
  );
};

export default ServiceInfo2;
