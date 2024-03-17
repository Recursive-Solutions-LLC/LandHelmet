import React, { useRef, useEffect, useState, createRef } from "react";
import { CardsModel } from "./Cards.model";
import Image from "next/image";
import LinkedinIcon from "../icons/LinkedinIcon";

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
        <div className={`max-w-sm rounded overflow-hidden m-3 shadow-lg transition-opacity duration-500 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
            <Image className=" w-full rounded-xl md:rounded-3xl object-cover object-center aspect-[3/4]" src={card.image} alt="character avatar" width={600} height={900}/>
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


export default Card;
