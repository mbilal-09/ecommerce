import { createContext, useState } from "react";
import { products } from "../../public/lib/data";

export const Context = createContext();

export function ContextMain({children}) {
    const [cardData, setCardData] = useState([...products]);
    return (
        <Context.Provider value={{cardData, setCardData}}>{children}</Context.Provider>
    )
}