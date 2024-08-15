import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  let finalItemCards = itemCards;

  if (finalItemCards === null || finalItemCards === undefined) {
    let { itemCards } =
      restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
        ?.card;
    finalItemCards = itemCards;
  }
  //console.log(finalItemCards);

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="mt-4 font-medium text-2xl">{name}</h1>
      <p className="my-1 font-medium font-serif">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <div>
        {categories.map((category, index) => (
          //controlled component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() =>
              showIndex === index ? setShowIndex(null) : setShowIndex(index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
