import { createContext, useState } from "react";

export const RentContext = createContext();

export function RentProvider ({props}){
    const [state, setState] = useState([])

    return (
        <RentContext.Provider value={[state, setState]}>
            {props.children}
        </RentContext.Provider>
    )
};


