import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  //console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="block font-semibold text-gray-800">
                {item.card.info.name}
              </span>
              <span className="mr-1 font-semibold">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <span className="text-xs">
                {item.card.info.ratings.aggregatedRating.rating
                  ? "⭐" + item.card.info.ratings.aggregatedRating.rating
                  : item.card.info.ratings.aggregatedRating.rating}
              </span>
            </div>
            <p className="text-sm text-gray-700">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="py-1 px-2 rounded-sm mx-12 my-[106px] bg-white hover:bg-gray-200 text-green-400 font-bold shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              className="rounded-md h-32 w-36"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
