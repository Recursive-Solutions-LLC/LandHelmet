import { ServiceInfoContainerProps } from '@/app/interfaces'
import React, { FC } from 'react'

const ServiceInfo: FC<ServiceInfoContainerProps> = ({ title, subtitle, text }) => {


    return (

        <div className="w-4/6 row">
            <div className="col">
                <h2 className="font-title font-semibold	text-5xl ">{title}</h2>
            </div>
        </div>

    )
}

export default ServiceInfo