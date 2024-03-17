import React, { FC } from 'react'
import ServiceInfoContent from './ServiceInfoContent'
import { ServiceInfoProps } from '@/app/interfaces/ServiceInterface'

const ServiceInfo: FC<ServiceInfoProps> = (props) => {
    const { title, subtitle, text, image, callToAction } = props
    const renderSectionBg = image ? ` bg-cover
    md:bg-[url('/images/services/banners/quality/desktop/quality.png')]
    bg-[url('/images/services/banners/quality/mobile/quality.png')]

    ` : " bg-s3"
    const onlyTitle = (title && !subtitle && !text) ? true : false
    const onlyTitleStyle = onlyTitle ? "pb-32 pt-25vh" : "py-32"

    const sectionStyling = `w-svw  ${onlyTitleStyle} ${renderSectionBg}`

    const hasImage = image ? true : false
    return (
        <section className={sectionStyling}>

            <div className="mx-auto container container-padding">
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