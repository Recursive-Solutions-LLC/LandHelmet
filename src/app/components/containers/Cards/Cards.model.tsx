export interface CardsModel {
    title: string;
    description: string;
    image: string;
    profileUrl?: string;
}

export interface CardsProps {
    cards: CardsModel[]
}