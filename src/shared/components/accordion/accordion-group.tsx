import gsap from "gsap-trial"
import React from "react"
import { IAccordionGroup, IAccordionGroupContext, THandlerClickAccordion } from "./type-accordion";

const accordionGroup: IAccordionGroupContext = {
    groupRef: null,
    groupId: "",
    active: "all",
    handlerClickAccordion: () => { }
};

export const AccordionGroupContext = React.createContext<IAccordionGroupContext>(accordionGroup);


export const AccordionGroup: React.FC<IAccordionGroup> = ({ groupId, active = "all", duration = .3, children, ...arg }) => {

    const accordionGroupRef = React.useRef<HTMLDivElement>(null)

    const prevTargetRef = React.useRef<{
        header: React.RefObject<HTMLButtonElement> | null
        body: React.RefObject<HTMLDivElement> | null
    } | null>(null)


    const handlerClickAccordion: THandlerClickAccordion = (target, callback) => {
        if (!target) return

        if (active === "only-one") {
            accordionGroupRef.current?.querySelectorAll(`[data-body-open*="1"]`).forEach((elem) => {
                if (target.body?.current && !Boolean(Number(target.body.current.getAttribute("data-body-open")))) {
                    gsap.to(elem, {
                        height: 0,
                        duration: duration
                    })
                    elem.setAttribute("data-body-open", "0")
                }
            })
        }


        prevTargetRef.current = target

        if (target.body?.current && target.header?.current) {
            const isActive = Boolean(Number(target.body.current.getAttribute("data-body-open")))
            // if (active === "only-one" && isActive) return
            if (isActive) {
                gsap.to(target.body.current, {
                    height: 0, duration: duration
                })
            } else {
                gsap.to(target.body.current, {
                    height: "auto", duration: duration
                })
            }
            target.body.current.setAttribute("data-body-open", String(Number(!isActive)))
            callback?.()
        }
        iconAnimate()
    }

    const iconAnimate = () => {
        accordionGroupRef.current?.querySelectorAll(`[data-accordion*="accordion"]`).forEach((elem) => {
            const isActive = Boolean(Number(elem.querySelector(`.body`)?.getAttribute("data-body-open")))
            isActive
                ? gsap.to(elem.querySelector(".path2"), {
                    rotation: 90,
                    transformOrigin: "center",
                    duration: .2

                })
                : gsap.to(elem.querySelector(".path2"), {
                    rotation: 0,
                    transformOrigin: "center",
                    duration: .2
                })
        })
    }
    React.useEffect(() => {
        iconAnimate()
    },[])

    const value = {
        groupRef: accordionGroupRef,
        groupId: `group-id-${groupId}`,
        active: active,
        handlerClickAccordion: handlerClickAccordion
    }

    return (
        <>
            <div
                ref={accordionGroupRef}
                data-group-id={value.groupId}
                data-group-active={value.active}
                {...arg}
            >
                <AccordionGroupContext.Provider value={value}>
                    {children}
                </AccordionGroupContext.Provider>
            </div>
        </>
    )
}