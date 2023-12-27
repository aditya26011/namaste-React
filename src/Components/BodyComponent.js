import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
const BodyComponent = () => {

  const [listOfResturrant, setlistRestaurrant] = useState([]);
  const[filteredRestaurant,setfilteredRestaurant]=useState([]);
  const[searchText,setSearchText]=useState("")

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData= async ()=>{

    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    console.log(data)

    const json=await data.json();
    console.log(json);
    // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

setlistRestaurrant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
setfilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const OnlineStatus=useOnlineStatus();

  if(OnlineStatus===false) return <h1>Seems Like your offline,Please check your Internet Connection!!</h1>

//Conditional rendering

  return listOfResturrant.length===0 ?<ShimmerComponent/> : (
    <div className="body">
      <div className="flex items-center">
        <div className="my-4 p-4">
            <input type="text" className="border border-solid border-black " 
             value={searchText}
              onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className="px-3 py-2 bg-green-400 m-4 rounded-lg" onClick={()=>{
                //filter the restaurants based on input and update the UI
                // setSearchText(value)
             const filteredList=listOfResturrant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
             setfilteredRestaurant(filteredList);
            }}>Search</button>
        </div>
            
            <div className="my-4 p-4 ">
            <button
          className=" bg-red-300 p-2 rounded-lg"
          onClick={() => {
            const filteredList = listOfResturrant.filter(
              (res) => res.info.avgRating >= 4
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>


            </div>
       

      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
         <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}> <RestaurantCard restList={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
