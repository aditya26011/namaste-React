import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";

const BodyComponent = () => {
  const [listOfResturrant, setlistRestaurrant] = useState([]);
  const[filteredRestaurant,setfilteredRestaurant]=useState([]);
  const[searchText,setSearchText]=useState("")

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData= async ()=>{

    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();
    console.log(json);
    // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

setlistRestaurrant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
setfilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

//Conditional rendering

  return listOfResturrant.length===0 ?<ShimmerComponent/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" 
             value={searchText}
              onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
                //filter the restaurants based on input and update the UI
                // setSearchText(value)
             const filteredList=listOfResturrant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
             setfilteredRestaurant(filteredList);
            }}>Search</button>
        </div>
.
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
