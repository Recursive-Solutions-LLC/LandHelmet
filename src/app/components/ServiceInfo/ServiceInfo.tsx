import { ServiceInfoProps } from '@/app/interfaces'
import React, { FC } from 'react'
import ServiceInfoContent from './ServiceInfoContent'

const ServiceInfo: FC<ServiceInfoProps> = ({title, subtitle, text, image, callToAction}) => {
    const sectionClass = image ? "" : "w-100 bg-s3 py-32"
    return (
        <section className={sectionClass}>
            
            <div className="mx-auto container">
                <div className="w-4/6 row">
                    <ServiceInfoContent title={title}/>
                </div>
            </div>
            </section>
    )
}

export default ServiceInfo