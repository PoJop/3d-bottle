
export interface IInitialState {
    currentSlide: number,
    prevSlide: number | null,
    direction: "right" | "left"
}


export const initialState: IInitialState = {
    currentSlide: 0,
    prevSlide: null,
    direction: "right"
};

export const CHANGE_CURRENT_SLIDE = "CHANGE_CURRENT_SLIDE"


type TAction =
    | { type: "CHANGE_CURRENT_SLIDE", payload: { current: number } }


export const reducer = (state: IInitialState, action: TAction) => {
    switch (action.type) {
        case CHANGE_CURRENT_SLIDE:
            const prevSlide = state.currentSlide
            return {
                ...state,
                prevSlide,
                currentSlide: action.payload.current,
                direction: (state.prevSlide === null || prevSlide < action.payload.current) ? "right" : "left"
            } as IInitialState;
    }
}

