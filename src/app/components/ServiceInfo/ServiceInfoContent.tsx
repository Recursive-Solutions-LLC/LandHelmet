import { ServiceInfoContainerProps } from '@/app/interfaces'
import React, { FC } from 'react'

const ServiceInfo: FC<ServiceInfoContainerProps> = ({ title, subtitle, text }) => {

    const onlyTitle = (title && !subtitle && !text)  && "pt-25vh"
    const titleClass = `font-title font-semibold	text-5xl text-s1 ${onlyTitle}`
    return (

        <div className="w-4/6 row">
            <div className="col">
                <h2 className={titleClass}>
                    {title}
                </h2>
            </div>
        </div>

    )
}

export default ServiceInfo