import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  return (
    <div
      data-testid="resCard"
      className="res-card m-2 p-2 w-52 rounded-lg bg-gray-200 hover:bg-gray-100 hover:shadow-xl shadow-slate-200"
    >
      <img
        className="res-logo h-44 w-[100%] rounded-lg"
        src={CDN_URL + resdata.info.cloudinaryImageId}
      ></img>
      <h3 className="my-1 font-medium">{resdata.info.name}</h3>
      <h4 className="my-1">{resdata.info.cuisines.join(", ")}</h4>
      <div className="rating flex justify-between items-center">
        <h4>{resdata.info.avgRating}⭐</h4>
        <h4>{resdata.info.sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
