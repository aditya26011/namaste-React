import { CDN_URL } from "../utils/constants";


const RestaurantCard=({restList})=>{

    const{cloudinaryImageId,name,cuisines,avgRating,sla}=restList?.info;

    return(
        <div className=" rounded-lg m-4 p-4  w-[270px] h-[350px] bg-gray-100  hover:bg-gray-300" 
        >
            <img className=" rounded-lg"
            src={CDN_URL+cloudinaryImageId} alt="res-logo" />
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.slaString} </h4>
        </div>
    );
}
export default RestaurantCard;