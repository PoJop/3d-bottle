import { percentageOfNumFromAnotherNum } from "@/shared/utils"
import gsap from "gsap-trial"
import React from "react"
import { useSwiperContext } from "../../context"
import { IInitialState } from "../../store"


interface ISlidesWrapperProps {
    children: React.ReactNode
}


export const SlidesWrapper: React.FC<ISlidesWrapperProps> = ({ children, }) => {

    const { state, changeCurrentSlideReduce } = useSwiperContext()
    const { currentSlide } = state

    const wrapperRef = React.useRef<HTMLDivElement>(null)
    const contRef = React.useRef<HTMLDivElement>(null)
    const slidesRef = React.useRef<number>(0)


    React.useEffect(() => {
        if (wrapperRef.current && contRef.current) {

            slidesRef.current = document.querySelectorAll(`[data-slide]`).length

            wrapperRef.current.style.height = `${slidesRef.current ? slidesRef.current * 100 : 100}%`
            contRef.current.style.height = `${slidesRef.current ? 100 / slidesRef.current : 100}%`
        }
    }, [])

    const activeRef = React.useRef<boolean>()
    const timeRef = React.useRef<NodeJS.Timeout>()
    const stateRef = React.useRef<IInitialState>()

    stateRef.current = state
    activeRef.current = true

    const handlerScroll = React.useCallback(() => {

        if (!activeRef.current) return
        activeRef.current = false

        let swiperScrollHeight = (slidesRef.current * window.innerHeight)


        clearTimeout(timeRef.current)


        timeRef.current = setTimeout(() => { activeRef.current = true }, 100)


        const slide = Math.round(((percentageOfNumFromAnotherNum(window.pageYOffset, swiperScrollHeight - window.innerHeight) * (slidesRef.current - 1)) / 100))

        let isInView = window.pageYOffset < swiperScrollHeight
        if (slide <= slidesRef.current && slide !== stateRef.current?.currentSlide && isInView) {
            console.log(slide, stateRef.current?.currentSlide)
            changeCurrentSlideReduce(slide)
        }
    }, [])



    React.useEffect(() => {
        window.addEventListener("scroll", handlerScroll)
        return () => window.removeEventListener("scroll", handlerScroll)
    }, [])

    React.useEffect(() => {
        window.scrollTo({
            top: window.innerHeight * currentSlide,
            behavior: "smooth"
        });
    }, [currentSlide])

    return (
        <>
            <div ref={wrapperRef} >
                <div ref={contRef} className='sticky top-0 overflow-hidden'>
                    <div className='relative flex justify-end h-full'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}