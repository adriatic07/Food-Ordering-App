import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

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

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {finalItemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
