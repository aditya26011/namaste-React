import React, { useEffect } from "react"
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent=()=>{

    [loginBtn,setLoginBtn]=useState("Login")

        //if no dependency array called every time when the componenet is rendered.
        //if empty dependency array=>[]empty called just once when the component is rendered first time.
        //if dependency array has dependency [loginBtn]=>called every time loginBtn updates.
        useEffect(()=>{
            console.log("useEffect Called");
        },[loginBtn])


    return(
        <div className="header">
            <div className="Logo-container">
                <img className="logo" src={LOGO_URL} alt="logo image" />
            </div>
            <div className="navbar">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{
                    loginBtn=="login"?setLoginBtn("logout"):setLoginBtn("login")
                    }} className="login">{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default HeaderComponent;