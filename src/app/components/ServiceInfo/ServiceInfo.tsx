import { ServiceInfoProps } from '@/app/interfaces'
import React, { FC } from 'react'
import ServiceInfoContent from './ServiceInfoContent'

const ServiceInfo: FC<ServiceInfoProps> = (props) => {
    const { title, subtitle, text, image, callToAction } = props
    const sectionClass = image ? `bg-[url('/images/services/banners/quality/desktop/quality.png')]` : "w-100 bg-s3 py-32"
    return (
        <section className={sectionClass}>

            <div className="mx-auto container">
                <div className="">

                </div>
                <div className="w-4/6 row">
                    <ServiceInfoContent title={title} subtitle={subtitle} text={text} callToAction={callToAction} />
                </div>
            </div>
        </section>
    )
}

export default ServiceInfo