import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu=(restId)=>{
    const[restInfo,setRestInfo]=useState(null)

    useEffect(() => {
        fetchMenu();
      }, []);

      fetchMenu=async()=>{
        const data = await fetch(MENU_API+restId);

        const json = await data.json();
        setRestInfo(json.data);
      };
    
    return restInfo;
};

export default useRestaurantMenu;