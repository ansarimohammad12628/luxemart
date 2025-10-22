import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../Feature/userSlice"

export const store =configureStore({

    reducer:{
        users:userSlice
       

    },
});