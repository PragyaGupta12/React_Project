import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../config.js";
import Shimmer from "./Shimmer.js";
import useRestaurant from "../Utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const params = useParams();
  const { restroId } = params;
  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(restroId); //custom react hook

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="p-2 m-2 text-lg font-bold">Restaurant ID: {restroId}</h1>
      {/* <h1>{restaurant.name}</h1>
      <img src={IMG_CDN_LINK + restaurant.cloudinaryImageId} alt="" /> */}
    </div>
  );
};

export default RestaurantMenu;
