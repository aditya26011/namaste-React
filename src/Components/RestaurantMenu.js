import useRestaurantMenu from "../utils/useRestaurantMenu";
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
  console.log(itemCards);

  return(
  <div className="menu">
  <h1>{name}</h1>
  <p>
    {cuisines.join(",")} - {costForTwoMessage}
  </p>
  <ul>
    {itemCards.map((item)=>
    (
    <li key={item.card.info.id}>
        {item.card.info.name} 
    -{"Rs"} {item.card.info.price/100} </li>
    ))} 
    
  </ul>
</div>);
};
 
export default RestuarantMenu;
