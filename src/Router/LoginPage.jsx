import React, { useState } from 'react';

import "../CSS/LoginPage.css"
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export const LoginPage = () => {

    const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["accesstoken"]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://dummyjson.com/user/login", {
      username: name,
      password: password,
      expiresInMins: 30,
    });

    console.log(res.data.accesstoken);
    setCookies("accesstoken", res.data.accesstoken);
    navigate("/home","/cart");
  };
  return (
   <>

    <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-page">
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="Password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button className="submit" type="submit">
            Submit
          </button>

          <div className="form-text">Username:emilys</div>
          <div className="form-text">Password:emilyspass</div>
        </div>
      </form>
  
   </>
  )
}
