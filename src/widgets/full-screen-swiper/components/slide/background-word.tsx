import React from "react"
import { Bowlby_One } from '@next/font/google'
import cn from "classnames"
import gsap, { Power1, Power2, Power4 } from "gsap-trial"
import { useSwiperContext } from "../../context";
import { hashCheck } from "@/shared/utils";
import { ISlide } from "@/entities/swiper/types";

interface IBackgroundWordProps {
    data: ISlide;
    slideNum: number;
}



const bowlbyOne = Bowlby_One({
    weight: '400',
    subsets: ['latin'],
})


export const BackgroundWord: React.FC<IBackgroundWordProps> = ({ data, slideNum}) => {

    const { state: { currentSlide, direction } } = useSwiperContext()


    const textRef = React.useRef<HTMLDivElement>(null)
    const heroAnimeRef = React.useRef<gsap.core.Animation>()

    React.useEffect(() => {
        if (slideNum === currentSlide) {

            if (!heroAnimeRef.current?.isActive()) {
                gsap.set(textRef.current, {
                    x: direction === "right" ? "+20%" : "-20%", duration: 0
                })
            }
            heroAnimeRef.current = gsap.to(textRef.current, {
                x: "0%",
                duration: 1.9,
                ease: Power4.easeOut
            })

        } 

    }, [direction, slideNum, currentSlide])

    // const handlerScroll = () => {
    //     if (textRef.current) {
    //         textRef.current.style.transform = `translateX(${100}px)`
    //         textRef.current.style.transitionProperty = "all"
    //         textRef.current.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)"
    //         textRef.current.style.transitionDuration = "650ms"
    //     }
    // }

    // React.useEffect(() => {
    //     window.addEventListener("scroll", handlerScroll)
    //     return () => window.removeEventListener("scroll", handlerScroll)
    // }, [])
    // const handlerMouseMove = (event: MouseEvent) => {

    //     console.log(
    //         event.clientX,
    //         event.clientY
    //     )
    // }
    // React.useEffect(() => {
    //     window.addEventListener("mousemove", handlerMouseMove)
    //     return () => window.removeEventListener("mousemove", handlerMouseMove)
    // }, [])

    return (
        <>
            <div className="w-[100vw] flex pt-[70px] justify-center ">
                <div
                    ref={textRef}
                    className={cn(
                        bowlbyOne.className,
                        " text-[380px] uppercase"
                    )}
                    style={{ color: data.colors?.[1] ? hashCheck(data.colors?.[1]) : "#000"}}
                >
                    {data.bgWord}
                </div>
            </div>
        </>
    )
}