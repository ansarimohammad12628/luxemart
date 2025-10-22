import React, { useEffect, useState } from "react";

import "../CSS/ProductPage.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addtocart } from "../Feature/userSlice";

const ProductPage = () => {
  const [products, setProduts] = useState([]);
  const dispatch = useDispatch();

  const fetchdata = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProduts(res.data.products);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="main-card-container">
        <div className="card">
          {products.map((value, index) => (
            <div className="card-item" key={index}>
              <div className="card-image">
                <img src={value.thumbnail} alt="" />
              </div>
              <div className="main-text">
                <div className="text">{value.title}</div>
              </div>
              <div>{value.price}</div>
              <div className="card-button">
                <button
                  className="card-btn"
                  onClick={() => dispatch(addtocart(value))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
