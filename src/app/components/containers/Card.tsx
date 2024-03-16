import React, { useRef, useEffect, useState, createRef } from "react";
import { CardsModel } from "../model/Cards";
import Image from "next/image";

const Card: React.FC<CardsModel> = (card: CardsModel) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setIsVisible(true);
                
                if(ref.current) {
                    observer.unobserve(ref.current)
                }
            }
        }, { threshold: 0.5 });

        if(ref.current) {
            observer.observe(ref.current);
        }
    });


    return (
        <div className={`max-w-sm rounded overflow-hidden shadow-lg transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
            <Image className="w-full rounded-xl md:rounded-3xl object-cover object-center aspect-[3/4]" src={card.image} alt="character avatar" width={600} height={900}/>
            <div className="mt-4 flex justify-between">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">{card.title}</div>
                    <p className="text-gray-700 text-base">{card.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href={card.profileUrl || '#'} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon />
                     </a>
                </div>
            </div>
        </div>
    )
}


const FacebookIcon = () => {
    return (
        <svg className="h-6 w-6 mr-2 inline"
            viewBox="0 0 310 310"
            xmlns="http://www.w3.org/2000/svg">
                <path d="M81.703 165.106h33.981V305a5 5 0 0 0 5 5H178.3a5 5 0 0 0 5-5V165.765h39.064a5 5 0 0 0 4.967-4.429l5.933-51.502a5 5 0 0 0-4.966-5.572h-44.996V71.978c0-9.732 5.24-14.667 15.576-14.667h29.42a5 5 0 0 0 5-5V5.037a5 5 0 0 0-5-5h-40.545A39.746 39.746 0 0 0 185.896 0c-7.035 0-31.488 1.381-50.804 19.151-21.402 19.692-18.427 43.27-17.716 47.358v37.752H81.703a5 5 0 0 0-5 5v50.844a5 5 0 0 0 5 5.001z"/>
        </svg>
    );
}

const TwitterIcon = () => {
    return (
        <svg className="h-6 w-6 mr-2 inline"
            viewBox="0 0 33.88 33.88">
                <path d="M30.414 10.031c.014.297.021.595.021.897 0 9.187-6.992 19.779-19.779 19.779A19.66 19.66 0 0 1-.001 27.584c.546.063 1.099.095 1.658.095 3.26 0 6.254-1.107 8.632-2.974a6.958 6.958 0 0 1-6.491-4.828c.424.082.858.125 1.308.125a6.89 6.89 0 0 0 1.83-.244 6.958 6.958 0 0 1-5.576-6.815v-.087c.939.521 2.01.833 3.15.869a6.95 6.95 0 0 1-3.091-5.787c0-1.274.343-2.467.94-3.495a19.733 19.733 0 0 0 14.327 7.263 7.056 7.056 0 0 1-.18-1.584 6.95 6.95 0 0 1 6.953-6.949 6.94 6.94 0 0 1 5.07 2.192 13.944 13.944 0 0 0 4.416-1.686 6.964 6.964 0 0 1-3.057 3.844 13.834 13.834 0 0 0 3.991-1.092 14.104 14.104 0 0 1-3.465 3.6z"/>
        </svg>
    );
}

const LinkedinIcon = () => {
    return (
        <svg className="h-6 w-6 mr-2 inline"
            viewBox="0 0 32 32">
                <path d="M17.303 14.365a.246.246 0 0 0 .031-.048v.048h-.031zM32 0v32H0V0h32zM9.925 12.285H5.153v14.354h4.772V12.285zm.312-4.438c-.03-1.41-1.035-2.482-2.668-2.482-1.631 0-2.698 1.072-2.698 2.482 0 1.375 1.035 2.479 2.636 2.479h.031c1.664 0 2.699-1.104 2.699-2.479zm16.892 10.561c0-4.408-2.355-6.459-5.494-6.459-2.531 0-3.664 1.391-4.301 2.368v-2.032h-4.77c.061 1.346 0 14.354 0 14.354h4.77v-8.016c0-.434.031-.855.157-1.164.346-.854 1.132-1.746 2.448-1.746 1.729 0 2.418 1.314 2.418 3.246v7.68h4.771l.001-8.231z"/>
        </svg>
    );
}

export default Card;
