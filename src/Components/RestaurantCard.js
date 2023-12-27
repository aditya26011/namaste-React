import { CDN_URL } from "../utils/constants";


const RestaurantCard=({restList})=>{

    const{cloudinaryImageId,name,cuisines,avgRating,sla}=restList?.info;

    return(
        <div className=" rounded-lg m-4 p-4  w-[270px] h-[350px] bg-gray-100  hover:bg-gray-300" >
            <img className=" rounded-lg"
            src={CDN_URL+cloudinaryImageId} alt="res-logo" />
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.slaString} </h4>
        </div>
    );
};

//Higher Order Component

//Input - Restuarant Card => Restaurant Card Cost of two


export const withCostOfTwo=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2  rounded-lg">CostForTwo</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;