import { Container } from "@/shared/ui-kit";
import gsap from "gsap-trial";
import React from "react"
import { useSwiperContext } from "../../context";

interface ISlideFooterProps {
    slideNum: number;
}

export const SlideFooter: React.FC<ISlideFooterProps> = ({ slideNum }) => {

    const downRef = React.useRef<HTMLDivElement>(null)
    const { state: { currentSlide } } = useSwiperContext()

    React.useEffect(() => {
        if (slideNum === currentSlide) {
            gsap.fromTo(downRef.current, { x: "-70%", duration: 1 }, { x: "0%", duration: 1 })

        } else {
            if (currentSlide < slideNum) {
                gsap.to(downRef.current, { x: "-5%", duration: .9 })
            } else {
                gsap.to(downRef.current, { x: "+5%", duration: .9 })
            }
        }
    }, [slideNum, currentSlide])
    return (
        <>
            <Container className="absolute bottom-0 " >
                <div ref={downRef} className="h-[100px] bg-white   w-full">

                </div>
            </Container>
        </>
    )
}