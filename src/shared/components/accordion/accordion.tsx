import React from "react"
import { AccordionGroupContext } from "./accordion-group";
import { IAccordion } from "./type-accordion";
import { PlusIcon } from "@/shared/assets/icons"



export const Accordion: React.FC<IAccordion> = ({
    children,
    defaultOpen,
    header,
    headerClassName,
    headerDefaultClassName = true,
    bodyClassName,
    bodyDefaultClassName = true,
    className,
    ...arg
}) => {

    const { groupRef, groupId, active, handlerClickAccordion } = React.useContext(AccordionGroupContext);

    const accordionHeaderRef = React.useRef<HTMLButtonElement>(null)
    const accordionBodyRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (defaultOpen) {
            accordionBodyRef.current?.setAttribute("data-body-open", String(Number(defaultOpen)))
        }
    }, [defaultOpen])


    return (
        <>
            <div
                data-accordion="accordion"
                className={className ?? "  mb-4 last:mb-0"}
                {...arg}
            >
                <div>
                    <button
                        ref={accordionHeaderRef}
                        onClick={() => handlerClickAccordion({
                            header: accordionHeaderRef,
                            body: accordionBodyRef
                        })}
                        aria-label={`accordion-button-${header}`}
                        className={`uppercase ${headerClassName ?? ""} ${headerDefaultClassName ? "w-full p-4 " : ""}`}
                    >
                        <div className="flex items-center justify-between">
                            {header}
                            <PlusIcon className='text-white w-[25px] h-[25px]' />
                            
                        </div>
                    </button>
                </div>
                <div
                    ref={accordionBodyRef}
                    className={`${defaultOpen ? "" : "h-0"} body overflow-hidden`}
                >
                    <div
                        className={`${headerClassName ?? ""} ${headerDefaultClassName ? "p-4" : ""}`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}