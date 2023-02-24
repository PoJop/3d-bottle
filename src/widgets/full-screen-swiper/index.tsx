import { ISlides } from "@/entities/swiper/types"
import React from "react"
import { Slide, SlidesWrapper } from "./components"
import { SwiperProvider } from "./context"


interface IFullScreenSwiperProps {
    data: ISlides
}


export const FullScreenSwiper: React.FC<IFullScreenSwiperProps> = ({ data }) => {


    return (
        <>
            <SwiperProvider>
                <SlidesWrapper>

                    {data.slides?.map((elem, idx) =>
                        <Slide
                            key={idx}
                            slideNum={idx}
                            data={elem}
                        />
                    )}
                </SlidesWrapper>
            </SwiperProvider>
        </>
    )
}