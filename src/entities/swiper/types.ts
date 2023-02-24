export interface ISlides {
    slides?: (ISlide)[] | null;
}
export interface ISlide {
    colors?: (string)[] | null;
    bgWord: string;
    desc: string;
    tabs?: ({
        title: string,
        content: string
    })[] | null;
}
