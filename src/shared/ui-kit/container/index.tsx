import React from "react"
import cn from "classnames"


interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.RefObject<HTMLDivElement>
    children: React.ReactNode,
    defaultStyle?: boolean
}

export const Container: React.FC<IContainer> = ({ children, defaultStyle = true, className, ...arg }) => {
    const defaultS = "w-full px-2 msm:px-5 md:px-[100px] m-auto"

    return (
        <>
            <div className={cn({ [`${defaultS}`]: defaultStyle }, className,)} {...arg}>
                {children}
            </div>
        </>
    )
}