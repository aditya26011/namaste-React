
import React, { lazy,Suspense, useEffect, useState } from "react"
import  ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent"
// import BodyComponent from "./Components/BodyComponent";

import BodyComponent from "./Components/BodyComponent";
import {RouterProvider, createBrowserRouter,Outlet} from 'react-router-dom';
import AboutComponent from "./Components/AboutComponent";
import ContactComponent from "./Components/ContactComponent";
import ErrorComponent from "./Components/ErrorComponent";
import RestuarantMenu from "./Components/RestaurantMenu";
import ShimmerComponent from "./Components/ShimmerComponent";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";
import CartComponent from "./Components/CartComponent";



// import GroceryComponent from "./Components/GroceryComponent";
/*
Header
    -logo
    -links
Body    
   -search 
    -Restaurant Container
    RestaurantCard
Footer
    -Copyright
    Links
    -addresses
    -contact    
*/


const GroceryComponent=lazy(()=> import("./Components/GroceryComponent"));

const AppLayout=()=>{

const [userName,setUserName]=useState();

useEffect(()=>{
//Make An API call and send User Name and Password
  const data={
    Name:"Aditya Pawar",
  }
  setUserName(data.Name);

},[])


    return(
      <Provider store={Appstore}>
      {/* // { Passing setUserName to set in the Body component} */}
      <UserContext.Provider value={{UserLoggedIn:userName,setUserName}}>
        <div className="app">
            <HeaderComponent/>
            {/* <BodyComponent/> */} 
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<BodyComponent/>
      },
      {
        path:"/about",
        element:<AboutComponent/>
      },
      {
        path:"/contact",
        element:<ContactComponent/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<ShimmerComponent/>}><GroceryComponent/></Suspense>
      },
      {
        path:"/cart",
        element:<CartComponent/>
      },
      {
        path:"/restaurants/:restId",//dynamin path
        element:<RestuarantMenu/>
      }
    ],
    errorElement:<ErrorComponent/>
  }
  
])
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);