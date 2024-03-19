import { ImageType } from "."
import { ReactNode } from 'react';



export interface Content {
  component: string,
  content: ServiceInfoProps
}

export interface ServiceContent {
  content: Content[]
}

export interface ServiceInfoProps extends ServiceInfoContentProps {
  image?: ImageType
  isCover: boolean
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

