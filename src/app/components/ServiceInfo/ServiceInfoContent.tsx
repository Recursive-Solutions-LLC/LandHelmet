import { ServiceInfoContainerProps } from '@/app/interfaces'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

const ServiceInfo: FC<ServiceInfoContainerProps> = ({ title, subtitle, text }) => {

    const onlyTitle = (title && !subtitle && !text) && "pt-25vh"
    const titleClass = `font-title font-semibold	text-5xl text-s1 ${onlyTitle}`
    const variants = {
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
    }
    const renderText =
        (text) &&
        (
            <motion.p
                variants={variants}
                viewport={{ once: true }}
                transition={{ type: "linear", duration: 2 }}
                className="col my-10 text-2xl leading-5 text-s2 font-body">
                {text}
            </motion.p>
        )

    const renderSubtitle =
        (subtitle) &&
        (
            <motion.h6
            viewport={{ once: true }}
                variants={variants}
                transition={{ type: "linear", duration: 1.5 }}
                className="col mt-14 font-bold text-lg leading-5 text-p1 font-title"
            >
                {subtitle}
            </motion.h6>
        )


    return (

        <motion.div
            initial="hidden"
            whileInView="enter"
            viewport={{ once: true }} 
            variants={variants}
            className="w-4/6 flex flex-col justify-between"
    
            >
            <div className="col">
                <motion.h2 variants={variants}

                    transition={{ type: "linear", duration: 1 }}
                    className={titleClass}>
                    {title}
                </motion.h2>
                {renderSubtitle}

                {renderText}
            </div>
        </motion.div>

    )
}

export default ServiceInfo