import {configureStore} from "@reduxjs/toolkit";
import markReducer from "./mark/markSlice"

export const store = configureStore({
    reducer:{
        mark: markReducer,
    },
})