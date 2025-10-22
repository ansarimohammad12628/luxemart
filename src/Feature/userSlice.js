import { createSlice } from "@reduxjs/toolkit";

const initialState ={

    item:JSON.parse(localStorage.getItem("CartItems"))||[]
};

const userSlice = createSlice({

    name:"users",
    initialState,
    reducers:{

        addtocart:(state,action)=>{
            const newItems ={
                ...action.payload, cartId:Date.now() +Math.random(),
            }
            state.item.push(newItems);
      localStorage.setItem("CartItems", JSON.stringify(state.item));
        },

         removecart: (state, action) => {
      state.item = state.item.filter((val) => val.cartId !== action.payload);
      localStorage.setItem("CartItems", JSON.stringify(state.item));
    },
    }
})

export const{addtocart,removecart}=userSlice.actions;
export default userSlice.reducer