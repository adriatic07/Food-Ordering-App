import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-semibold text-3xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <div className="my-20">
            <h1 className="font-semibold text-lg text-gray-700">
              Your cart is empty
            </h1>
            <h5 className="text-sm text-gray-500">
              You can go to home page to view more restaurants
            </h5>
          </div>
        )}
        <Itemlist items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
