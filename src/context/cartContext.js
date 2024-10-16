import { createContext,useContext,useReducer } from "react";
import { CartReducerFun } from "../reducerFunctions/cart_reducer";

const initialState={
    cart:[],
    favList:[]
}

const cartContext = createContext();

const CartProvider = ({children})=>{
    const [cartProduct,dispatch] = useReducer(CartReducerFun,initialState);
    return(
        <cartContext.Provider value={{cartProduct,dispatch}}>
            {children}
        </cartContext.Provider>
    )
}

const useCart = ()=> useContext(cartContext);
export {useCart,CartProvider};