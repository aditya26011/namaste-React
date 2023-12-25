
import React, { lazy,Suspense } from "react"
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
    return(
        <div className="app">
            <HeaderComponent/>
            {/* <BodyComponent/> */}
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
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<ShimmerComponent/>}><GroceryComponent/></Suspense>
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