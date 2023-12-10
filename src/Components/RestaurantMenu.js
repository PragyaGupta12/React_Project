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
    const restroData = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448869999999&menuId=229")
    const json = await restroData.json()
    setRestaurant(json.restroData)
    // ?.data?.cards[0]?.card?.card?.info
  }

  return(
    <div>
        <h1>{restroId}</h1>
        <h1>{restaurant.name}</h1>
        <img src={ IMG_CDN_LINK + restaurant.cloudinaryImageId } alt="" />
    </div>
  )
};

export default RestaurantMenu;
