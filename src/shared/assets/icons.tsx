import React from "react";
interface IIconProps extends React.HTMLAttributes<SVGElement> {
}

export const BagIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...arg}
            viewBox="0 0 512 512"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
            ></path>
        </svg>
    )
}
export const CheckmarkIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...arg}
            viewBox="0 0 512 512"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            ></path>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M352 176L217.6 336 160 272"
            ></path>
        </svg>
    )
}
export const PlusIcon: React.FC<IIconProps> = ({ ...arg }) => {

    return (
        <svg
            {...arg}
            fill="none"
            viewBox="0 0 27 26"
        >
            <path fill="currentColor" d="M12 0h3v26h-3V0z"></path>
            <path fill="currentColor" d="M.5 14.5v-3h26v3H.5z" className="path2 "></path>
        </svg>
    )
}