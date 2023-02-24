import cn from "classnames";
import gsap, { Power2, Power3, Power4 } from "gsap-trial";
import React from "react"
import { useSwiperContext } from "../../context";
import { Model3D } from "./model-3D";
import { BackgroundWord } from "./background-word";
import { StaticContent } from "./static-content";
import { SlideFooter } from "./slide-footer";
import { ISlide } from "@/entities/swiper/types";
import { hashCheck } from "@/shared/utils";

interface ISlideProps extends React.HTMLAttributes<HTMLDivElement> {
    slideNum: number;
    data: ISlide
}


export const Slide: React.FC<ISlideProps> = ({ slideNum, data, className, ...args }) => {

    const { state: { currentSlide, prevSlide } } = useSwiperContext()

    const tlRef = React.useRef<gsap.core.Timeline>()
    const slideRef = React.useRef<HTMLDivElement>(null)


    React.useEffect(() => {
        tlRef.current = gsap.timeline({
            paused: true,
            ease: Power4.easeOut,
            defaults: {
                duration: 0.4
            }
        })
            .fromTo(slideRef.current, { width: 0 }, { width: "100%" })
    }, [])

    const initRef = React.useRef<boolean>(slideNum === 0)


    React.useEffect(() => {

        if (slideNum === currentSlide) {
            if (initRef.current) {
                setTimeout(() => {
                    let tlCopy = tlRef.current
                    tlCopy?.duration(1.2)?.play()
                    initRef.current = false
                }, 100)
            } else {
                tlRef.current?.play()
            }
        } else if (slideNum > currentSlide) {
            tlRef.current?.reversed(true)
        }

    }, [slideNum, currentSlide])




    return (
        <div
            ref={slideRef}
            data-slide={slideNum}
            style={{
                width: "0%",
                zIndex: 222 + slideNum,
                backgroundColor: `${data.colors?.[0] ? hashCheck(data.colors?.[0]) : "#fff"}`
            }}
            className={cn('flex-[0_0_100%] absolute h-full flex justify-end overflow-hidden', className)}
            {...args}
        >
            <div className="w-[100vw] relative">
                <BackgroundWord
                    slideNum={slideNum}
                    data={data}
                />
                <Model3D
                    slideNum={slideNum}
                />
                <StaticContent
                    slideNum={slideNum}
                    data={data}
                />
                <SlideFooter
                    slideNum={slideNum}
                />
            </div>
        </div>
    )
}