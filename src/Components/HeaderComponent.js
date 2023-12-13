import React from "react"
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent=()=>{

    [loginBtn,setLoginBtn]=useState("Login")


    return(
        <div className="header">
            <div className="Logo-container">
                <img className="logo" src={LOGO_URL} alt="logo image" />
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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