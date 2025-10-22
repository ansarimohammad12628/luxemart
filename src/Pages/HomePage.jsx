import React, { useEffect, useState } from "react";
import "../CSS/HomePage.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtocart } from "../Feature/userSlice";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cookies] = useCookies(["accesstoken"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchdata = async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=10");
    setProducts(res.data.products);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div className="main-container2">
        <div className="main-section">
          <h1 className="top-text">
            Premium <span>Products</span>
          </h1>

          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur unde quo quibusdam aliquid maiores quos suscipit
            </p>
          </div>
          <div className="main-button">
            <button className="button">Buy</button>
          </div>
        </div>
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
                    onClick={() => {
                      if (cookies.accesstoken) {
                        dispatch(addtocart(value));
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
