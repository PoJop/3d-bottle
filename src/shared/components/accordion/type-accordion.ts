import React from "react"

export type TActive = "only-one" | "all"

export interface IAccordionGroup extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    groupId: string | number
    active?: TActive
    duration?: number
}

export interface IAccordion extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    defaultOpen?: boolean
    header: React.ReactNode | string,
    headerClassName?: string,
    headerDefaultClassName?: boolean
    bodyClassName?: string,
    bodyDefaultClassName?: boolean
}

export interface IAccordionGroupContext {
    groupRef: React.RefObject<HTMLDivElement> | null
    groupId: string | number
    active: TActive
    handlerClickAccordion: THandlerClickAccordion
}

export type THandlerClickAccordion = (
    target: {
        header: React.RefObject<HTMLButtonElement> | null
        body: React.RefObject<HTMLDivElement> | null
    },
    callback?: () => void
) => void
