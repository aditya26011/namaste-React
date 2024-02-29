import { useDispatch, useSelector } from "react-redux";
import ItemListComponent from "./ItemListComponent";
import { clearCart } from "../utils/CartSlice";

const CartComponent=()=>{

    const dispatch=useDispatch();
  const handleClearCart=()=>{
        dispatch(clearCart())
    }

const cartItems=useSelector( (store)=>store.cart.items);    
return(
    <div className="text-center m-4 p-4">
        <div className="text-2xl font-bold">Cart Page</div>
        <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        <div className="w-6/12 m-auto ">
            {cartItems.length===0 && <h1>Add Items to Cart</h1>}
            <ItemListComponent items={cartItems} />
        </div>
    </div>
)

}

export default CartComponent;