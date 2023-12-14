import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../Config";
import Shimmer from "./Shimmer.js"

const RestaurantMenu = () => {
  const params = useParams();
  const { restroId } = params;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(()=>{
    getRestroInfo();

    return ()=>{
      //this is unmounting in useEffect. This means as soon as we move from this component
      //any logic written here will be executed.
    }

  },[])

  async function getRestroInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+restroId)
    const json = await data.json()
    setRestaurant(json.data)
    // ?.data?.cards[0]?.card?.card?.info
  }

  return !restaurant ? <Shimmer/> : ( 
    <div>
        <h1>{restroId}</h1>
        <h1>{restaurant.name}</h1>
        <img src={ IMG_CDN_LINK + restaurant.cloudinaryImageId } alt="" />
    </div>
  )
};

export default RestaurantMenu;
