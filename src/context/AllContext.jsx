import { createContext, useState } from "react";

export const AllContext = createContext();


export default function AllContextProvider({children}) {
    const [togle, setTogle] = useState(0);
    const obj = {
        togle: togle,
        setTogle: setTogle
    }
    return <>
    <AllContext.Provider value={obj}>
{children}
    </AllContext.Provider>
    </>
}