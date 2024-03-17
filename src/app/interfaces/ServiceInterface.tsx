import { ImageType } from "."
import { ReactNode } from 'react';

export enum ServiceComponents{
  cover,
  info1,
  info2
}

export interface Content {
  component: ServiceComponents,
  content: ServiceInfoProps
}

export interface ServiceContent {
  content: Content[]
}

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

