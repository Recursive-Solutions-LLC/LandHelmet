import { ServiceInfoProps } from '@/app/interfaces'
import React, { FC } from 'react'
import ServiceInfoContent from './ServiceInfoContent'

const ServiceInfo: FC<ServiceInfoProps> = ({title, subtitle, text, image, callToAction}) => {
    return (
        <section className="">
            
            <div className="container">
                <div className="w-4/6 row">
                    <ServiceInfoContent title={title}/>
                </div>
            </div>
            </section>
    )
}

export default ServiceInfo