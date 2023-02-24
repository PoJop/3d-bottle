import { ISlide } from "@/entities/swiper/types";
import { PlusIcon } from "@/shared/assets/icons"
import { Accordion, AccordionGroup } from "@/shared/components";
import { Container } from "@/shared/ui-kit";
import cn from "classnames";
import React from "react"

interface IStaticContentProps {
    slideNum: number;
    data: ISlide
}

export const StaticContent: React.FC<IStaticContentProps> = ({ slideNum, data }) => {

    return (
        <>
            <Container className='absolute top-0 w-full h-full z-[200] overflow-hidden'>
                <div className={cn(
                    "py-[80px] px-[100px]",
                    "flex justify-between flex-col w-full h-full"
                )}>
                    <div className='w-full '>

                        <div className='flex justify-start w-full text-[120px] text-white font-[400]'>
                            0{slideNum + 1}
                        </div>

                    </div>
                    <div className='flex justify-between w-full flex-[1_1_100%] pt-[210px] '>
                        <div className='w-[500px]  text-white'>
                            <div className='w-[80px] mb-[100px] border-t-4'>

                            </div>
                            {data.desc}
                        </div>
                        <div className='w-[500px]  text-white'>
                            <AccordionGroup active="only-one" groupId={"groupId" + slideNum}>
                                {data.tabs?.map((elem, idx) =>
                                    <Accordion key={idx} header={elem.title} className="w-full border-b last:border-0">
                                        <div className="" >
                                            {elem.content}
                                        </div>
                                    </Accordion>
                                )}

                            </AccordionGroup>

                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}