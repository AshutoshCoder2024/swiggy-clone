import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cartslicer"

export const  store =configureStore({
    reducer:{
        cartslice: CartReducer,
    }
})