import {  useState } from "react";
import ItemListComponent from "./ItemListComponent";
const RestaurantCategory = ({ data,showItems,setShowIndex }) => {

//     const[showItems,setShowItems]=useState(false)
// //   console.log(data);

const handleClick=()=>{
    // console.log("clicked");
    //to toggle 
    setShowIndex();
}
  return (
    <div>
        {/* {Header} */}
      <div className="w-6/12 m-auto my-4 p-4 bg-gray-100 shadow-lg ">
        <div className="flex justify-between cursor-pointer "
        onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
            {/* {data?.categories?.length}){" "} */}
          </span>
          <span>🔽</span>
        </div>
        {/*Show ListItems only when showItems is true */}
      {showItems && <ItemListComponent items={data.itemCards} />}   
      </div>
    </div>
  );
};
export default RestaurantCategory;
