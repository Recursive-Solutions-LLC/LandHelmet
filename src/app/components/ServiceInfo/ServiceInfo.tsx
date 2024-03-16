import { ServiceInfoProps } from '@/app/interfaces'
import React, { FC } from 'react'

const ServiceInfo: FC<ServiceInfoProps> = ({title, subtitle, text, image, callToAction}) => {
    return (
        <section className="w-4/6 container">{title}</section>
    )
}

export default ServiceInfo