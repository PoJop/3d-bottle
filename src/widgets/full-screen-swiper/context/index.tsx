import React from 'react'
import { IInitialState, initialState, reducer } from '../store';

interface IContextProviderProps {
    children: React.ReactNode
}
interface IDefaultValue {
    state: IInitialState,
    changeCurrentSlideReduce: (current: number) => void
}

const SwiperContext = React.createContext<IDefaultValue>({
    state: initialState,
    changeCurrentSlideReduce: () => { }
});



export const SwiperProvider: React.FC<IContextProviderProps> = ({ children }) => {


    const [state, dispatch] = React.useReducer(reducer, initialState);


    const changeCurrentSlideReduce = (current: number) => dispatch({ type: 'CHANGE_CURRENT_SLIDE', payload: { current } })

    return (

        <SwiperContext.Provider
            value={{
                state,
                changeCurrentSlideReduce
            }}
        >
            {children}
        </SwiperContext.Provider>
    );
};




export default SwiperContext;

export const useSwiperContext = () => {
    return React.useContext(SwiperContext);
}
