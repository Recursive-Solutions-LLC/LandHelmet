"use client"

import React, { FC } from 'react'
import ServiceInfoContent from './ServiceInfoContent'
import { ServiceInfoProps } from '@/app/interfaces/ServiceInterface'

const ServiceInfo: FC<ServiceInfoProps> = (props) => {
    // TODO: add responsiveness 
    const { title, subtitle, text, image, callToAction, isCover } = props
    console.log('%csrc/app/components/ServiceInfo/ServiceInfo.tsx:9 image',
        'color: white; background-color: #007acc;', image);
    const backgroundStyle = image ? {
        backgroundImage: `url('${image.srcDesktop}')`,
        backgroundSize: 'cover',
    } : {

        backgroundColor: '#EDEAE0',
    };
    const onlyTitle = (title && !subtitle && !text) ? true : false
    const onlyTitleStyle = onlyTitle ? "pb-32 pt-25vh" : "py-32"

    const sectionStyling = `w-full  bg-cover ${onlyTitleStyle}`

    const hasImage = image ? false : false
    return (
        <section
            style={backgroundStyle}
            className={sectionStyling}>

            <div className="mx-auto  container container-padding">
                <div className="">

                </div>
                <div className="w-100 md:w-4/6 row">
                    <ServiceInfoContent hasImage={hasImage} title={title} subtitle={subtitle} text={text} callToAction={callToAction} />
                </div>
            </div>
        </section>
    )
}

export default ServiceInfo