import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    //this will have the slices 
    reducer: {
        cart: cartSlice, //name of slice : slice
    },
})

export default store;