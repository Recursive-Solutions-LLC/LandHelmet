export interface Product{
    title: string;
    description: string;
    image: string;
    imageArray: string[];
    color: string;
  }

export  interface DetailProps {
 
    product: Product[]
    }