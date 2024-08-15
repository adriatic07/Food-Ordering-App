import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
