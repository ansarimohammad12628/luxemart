import React from "react";

import "../CSS/CartPage.css"
import { useDispatch, useSelector } from "react-redux";
import { removecart } from "../Feature/userSlice";
export const CartPage = () => {
   const data = useSelector((state) => state.users.item);
  // console.log("Data:", data);
  const dispatch = useDispatch();
  return (
    <>
       <div className="card">
     
           {data.map((val,index)=>(
               <div className="card-item" key={index}>
                 <div className="card-image"><img src={val.thumbnail} alt="" /></div>
                 <div className="text">{val.title}</div>
                 <div>{val.price}</div>
                 <div className="card-button">

                 <button className="card-btn" onClick={()=> dispatch(removecart(val.cartId))}>Remove to Cart</button>
                 </div>
             </div>
           ))}
           </div>
    </>
  );
};
