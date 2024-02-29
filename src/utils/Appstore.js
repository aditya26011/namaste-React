import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

const Appstore=configureStore({
    reducer:{
        cart:cartReducer
    }
});


export default Appstore;