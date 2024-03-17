"use client"

import React, { useState, useEffect, useRef, JSX } from 'react';

interface TypingInfo {
    WrappedComponent: string;
    typingSpeed: number;
}

const TypingAnimationComponent: React.FC<TypingInfo> = (data: TypingInfo) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    let currentCharIndex = 0;

    useEffect(() => {

        const typeChar = () => {
            setDisplayedText(prev => prev + data.WrappedComponent[currentCharIndex]);
            currentCharIndex++;

            if(currentCharIndex < data.WrappedComponent.length) {
                setTimeout(typeChar, data.typingSpeed);
            }
        };

        typeChar();

        return () => {
            setDisplayedText('');
        }
    }, []);

    return (
        <h1 className='text-black text-3xl mt-2'>{displayedText}</h1>
    );
  };

export default TypingAnimationComponent;
