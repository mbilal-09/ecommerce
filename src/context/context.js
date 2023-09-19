import { createContext, useState } from "react";
import { products } from "../../public/lib/data";

export const Context = createContext();

export function ContextMain({children}) {
    const [cardData, setCardData] = useState([...products]);
    const [cartItems, setCartItems] = useState([]);
    return (
        <Context.Provider value={{cardData, setCardData, cart : {cartItems, setCartItems}}}>{children}</Context.Provider>
    )
}