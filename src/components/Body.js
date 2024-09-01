import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  const style = {
    textDecoration: "none",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="online">
        <h2>You're Currently Offline!!</h2>;
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body bg-pink-50">
      <div className="flex justify-center">
        <input
          type="text"
          className="search-box my-5 border border-black rounded-sm px-1 mx-1"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn my-5 px-1 rounded-sm bg-green-200 hover:bg-green-100  hover:border border-black"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn mx-2 my-5 rounded-sm bg-slate-200 px-1 hover:bg-slate-100 hover:border border-black"
          onClick={() => {
            const filteredlist = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="reset my-5 rounded-sm bg-slate-200 px-1 hover:bg-slate-100 hover:border border-black"
          onClick={() => {
            fetchData(), setSearchText("");
          }}
        >
          Reset 🔄
        </button>
        <div className="mx-4">
          <label className="font-semibold text-gray-700">Username</label>
          <input
            type="text"
            className="search-box my-5 border border-black rounded-sm px-1 mx-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurant.map((res) => (
          <Link
            to={"/restaurants/" + res.info.id}
            key={res.info.id}
            style={style}
          >
            <RestaurantCard resdata={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
