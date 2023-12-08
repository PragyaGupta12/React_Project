import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../Config";

const RestaurantMenu = () => {
  const params = useParams();
  const { restroId } = params;
  const [restaurant, setRestaurant] = useState({});

  useEffect(()=>{
    getRestroInfo();
  },[])

  async function getRestroInfo(){
    const restroData = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5584489&lng=77.2029376&restaurantId=5663&isMenuUx4=false&submitAction=ENTER")
    const json = await restroData.json()
    setRestaurant(json.restroData)
    // ?.data?.cards[0]?.card?.card?.info
  }

  return(
    <div>
        <h1>{restaurant.name}</h1>
        <img src={ IMG_CDN_LINK + restaurant.cloudinaryImageId } alt="" />
    </div>
  )
};

export default RestaurantMenu;
