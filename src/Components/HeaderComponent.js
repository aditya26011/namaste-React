import React, { useEffect } from "react"
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const HeaderComponent=()=>{

    [loginBtn,setLoginBtn]=useState("Login");

    const {UserLoggedIn}=useContext(UserContext);
    console.log(UserLoggedIn);

        //if no dependency array called every time when the componenet is rendered.
        //if empty dependency array=>[]empty called just once when the component is rendered first time.
        //if dependency array has dependency [loginBtn]=>called every time loginBtn updates.
        useEffect(()=>{
            console.log("useEffect Called");
        },[loginBtn])

        const OnlineStatus=useOnlineStatus();


    return(
        <div className="flex justify-between bg-pink-100 shadow-lg " >
            <div className="Logo-container">
                <img className="w-56" src={LOGO_URL} alt="logo image" />
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status:{OnlineStatus?'✅':'🔴'}</li>
                    <li className="px-4"> <Link to="/">Home</Link></li>
                    <li className="px-4"> <Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>

                    <li className="px-4">Cart</li>
                    <button onClick={()=>{
                    loginBtn=="login"?setLoginBtn("logout"):setLoginBtn("login")
                    }} className="login">{loginBtn}</button>
                    <li className="px-4 font-bold">{UserLoggedIn}</li>

                </ul>
            </div>
        </div>
    )
}
export default HeaderComponent;