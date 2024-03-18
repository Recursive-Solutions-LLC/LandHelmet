"use client"

import React, { useState, useEffect, useRef, JSX, ComponentType } from 'react';

export interface TypingAnimationProps {
    text: string;
    speed: number;
}

//este es el de tratar de leer el inner html
export function TypingAnimationHOC<T extends object>(Component: ComponentType<T>) {
    const WithTypingAnimation: React.FC<T & TypingAnimationProps> = ({speed = 150, ...props}) => {
        const [displayedText, setDisplayedText] = useState<string>('');
        let currentCharIndex = 0;
        const text = 'lorem ipsum';

        let current = '';

        useEffect(() => {

            const typeChar = () => {
                current += text[currentCharIndex];
                setDisplayedText(current);
    
                currentCharIndex++;
    
                if(currentCharIndex < text.length) {
                    setTimeout(typeChar, speed);
                }
            };
    
            typeChar();

            return () => {
                setDisplayedText('');
            }
        }, []);//

        return (<Component {...props as T}>{displayedText}</Component>);
    };

    return WithTypingAnimation;
}

// este es pasandoselo por la property text de la interface
export function TypingAnimationHOC2<P extends object>(WrappedComponent: ComponentType<P>) {
    const WithTypingAnimation: React.FC<P & TypingAnimationProps> = ({text, speed, ...props}) => 
    {
      
        const [displayText, setDisplayText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);
    
        useEffect(() => {
            const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
            }, speed);
    
            return () => clearInterval(interval);
        }, [currentIndex, text, speed]);

        return <WrappedComponent {...props as P} text={displayText} />;
    };
  
    return WithTypingAnimation;
};
