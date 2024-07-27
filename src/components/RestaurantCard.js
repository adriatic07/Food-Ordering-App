import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "rgb(248, 241, 238)" }}>
      <img
        className="res-logo"
        src={CDN_URL + resdata.info.cloudinaryImageId}
      ></img>
      <h3>{resdata.info.name}</h3>
      <h4>{resdata.info.cuisines.join(", ")}</h4>
      <div className="rating">
        <h4>{resdata.info.avgRating}⭐</h4>
        <h4>{resdata.info.sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
