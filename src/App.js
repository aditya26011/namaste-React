

import React from "react"
import  ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent"
import BodyComponent from "./Components/BodyComponent";
import {RouterProvider, createBrowserRouter,Outlet} from 'react-router-dom';
import AboutComponent from "./Components/AboutComponent";
import ContactComponent from "./Components/ContactComponent";
import ErrorComponent from "./Components/ErrorComponent";
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




const AppLayout=()=>{
    return(
        <div className="app">
            <HeaderComponent/>
            <Outlet/>
        </div>
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
      }
    ],
    errorElement:<ErrorComponent/>
  }
  
])
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);