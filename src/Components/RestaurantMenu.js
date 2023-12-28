import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {

  const {restId}=useParams();
 
  const resInfo=useRestaurantMenu(restId);

  

 

  if (resInfo === null) return <ShimmerComponent/>

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
  // console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>{
    return c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  // ||
  // c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
})

// console.log(categories);

  return(
  <div className="text-center">
  <h1 className="font-bold my-2 text-2xl">{name}</h1>
  <p className="font-bold">
    {cuisines.join(",")} - {costForTwoMessage}
  </p>
  {categories.map((category)=><RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
 
</div>);
};
 
export default RestuarantMenu;
