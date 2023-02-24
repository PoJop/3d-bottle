export const percentageOfNumFromAnotherNum = (num1: number, num2: number) => {
    return (num1 / num2) * 100
}
export const percentageOfNum = (num: number, perc: number) => {
    return num * (perc / 100)
}

export const hashCheck = (hash: string) => hash?.[0] === "#" ? hash : `#${hash}`