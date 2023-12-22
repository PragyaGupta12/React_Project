import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../config.js";
import Shimmer from "./Shimmer.js";
import useRestaurant from "../Utils/useRestaurantMenu.js";
import { addItem } from "../Utils/cartSlice.js";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { restroId } = params;
  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(restroId); //custom react hook

  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(addItem("FoodItem")) //dispatching an action, this val FoodItem will go into action in cartSlice reducer func addItem.
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1 className="p-2 m-2 text-lg font-bold">Restaurant ID: {restroId}</h1>
        {/* <h1>{restaurant?.name}</h1>
        <img src={IMG_CDN_LINK + restaurant?.cloudinaryImageId} alt="" /> */}
      </div>
      <div>
        <h2 className="p-2 m-2 font-bold">Menu</h2>
        {/* <ul>
          {Object.values(restaurant?.menu?.items).map(item=>{
              <li key={item.id}>{item.name}</li>
          })}
        </ul> */}
        <button className="border border-black p-2 m-2 rounded" onClick={()=>handleClick()}>
          Add Items
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;
