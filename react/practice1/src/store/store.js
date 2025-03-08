import { configureStore } from "@reduxjs/toolkit";
import cardSlice from './cardslice'

const store=configureStore({
    reducer:{
        card:cardSlice,
    }
})

export default store;