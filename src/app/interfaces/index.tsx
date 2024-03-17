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
    srcDesktop: string;
    srcMobile: string;
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
    right: boolean;
}


export interface HeaderProps {
    navItems: NavItems[];
    subNavItems: SubNavItems[][];
}
export interface TestimonialProps{
    text: string;
    name:string
}