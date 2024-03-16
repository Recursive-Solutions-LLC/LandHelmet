"use client"

import React from "react";
import { CardsProps } from "../model/Cards";
import Card from "./Card";

const CardsContainer: React.FC<CardsProps> = (cardsDetail: CardsProps) => {
    return (
        <div className="grid my-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsDetail.cards.map((card, index) => (
                <Card {...card} key={index} />
            ))}
        </div>
    );
}

export default CardsContainer;
