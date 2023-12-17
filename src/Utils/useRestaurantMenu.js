import { useEffect, useState } from "react";
import {FETCH_MENU_URL} from '../config.js';

const useRestaurant = (restroID) => {
  const [restaurant, setRestaurant] = useState(null);

  //API Call
  useEffect(() => {
    getRestroInfo();

    return () => {
      //this is unmounting in useEffect. This means as soon as we move from this component
      //any logic written here will be executed.
    };
  }, []);

  async function getRestroInfo() {
    const data = await fetch(FETCH_MENU_URL + restroID);
    const json = await data.json();
    setRestaurant(json?.data);
    // ?.data?.cards[5]?.card?.groupedCard?.cardGroupMap?.REGULAR?.card[1]?.info
  }
  // Return val
  return restaurant;
};

export default useRestaurant;
