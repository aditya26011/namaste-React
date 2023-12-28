import {  useState } from "react";
import ItemListComponent from "./ItemListComponent";
const RestaurantCategory = ({ data }) => {

    const[showItems,setShowItems]=useState(false)
//   console.log(data);

const handleClick=()=>{
    console.log("clicked");
    //to toggle 
    setShowItems(!showItems);
}
  return (
    <div>
        {/* {Header} */}
      <div className="w-6/12 m-auto my-4 p-4 bg-gray-100 shadow-lg ">
        <div className="flex justify-between cursor-pointer "
        onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length}
            {data?.categories?.length}){" "}
          </span>
          <span>🔽</span>
        </div>
      {showItems && <ItemListComponent items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
