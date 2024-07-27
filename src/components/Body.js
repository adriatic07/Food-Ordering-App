import restaurants from "../Utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = restaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resdata={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
