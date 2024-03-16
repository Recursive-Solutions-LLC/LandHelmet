import { ReactNode } from 'react';

export interface ServiceInfoProps extends ServiceInfoContentProps {
    image?: ImageType
}
export interface ServiceInfoContainerProps extends ServiceInfoContentProps {

    hasImage: boolean
}

export interface ServiceInfoContentProps {
    title: string;
    subtitle?: string;
    text?: string;
    callToAction?:  ReactNode
}


export type ImageType =  {
    srcDesktop: string;
    srcMobile: string;

    alt: string;
    width?: ImageDimension
    height?: ImageDimension
}

type ImageDimension = number | undefined;


// Technical debt
export interface BannerProps {
    title: string;
    svgs: svg[];
}

interface svg {
    title: string;
    svg: string
}

export interface CoverProps {
    title: string;
    image: string;
}

export interface Product {
    title: string;
    description: string;
    image: string;
    imageArray: string[];
    color: string;
}

export interface DetailProps {

    product: Product[]
}

export interface NavItems {
    title: string;
    link: string;
}

export interface SubNavItems {
    title: string;
    link: string;
}

export interface ShowCaseProps {
    title: string;
    description: string;
    image: string;
    icon: string[];
    variants: any;
}


export interface HeaderProps {
    navItems: NavItems[];
    subNavItems: SubNavItems[][];
}