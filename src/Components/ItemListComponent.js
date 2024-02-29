import { useDispatch } from "react-redux";
import { CDN_URL, FOOD_URL } from "../utils/constants";
import { addItems } from "../utils/CartSlice";

const ItemListComponent = ({ items }) => {
  //  console.log(items);

  //For dispatching
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    //dispatching an action
    dispatch(addItems(item));
  };

  return (
    <div>
      {/* {items?.card?.info?.name } */}
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className=" border-gray-400  border-b-2 my-4  text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className=" font-bold">{item?.card?.info?.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className=" text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAdd(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListComponent;
