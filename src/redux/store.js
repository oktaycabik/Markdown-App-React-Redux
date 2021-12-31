import { configureStore } from "@reduxjs/toolkit";
import  markdownSlice  from "./markdown/markdownSlice";

export const store=configureStore({
    reducer:{
     markdown:markdownSlice
    }
})