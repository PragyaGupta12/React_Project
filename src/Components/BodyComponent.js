// import { data } from "../Config"; //named import
import CardData from "../Components/Cards.js"; //default import
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useOnline from "../Utils/useIsOnline.js";

function restaurantData(searchText, filteredRestaurants) {
  const restoData = filteredRestaurants.filter((resData) =>
    resData?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return restoData;
}
const BodyComponent = () => {
  //local state variable in react
  // const [restaurants, setRestaurant] = useState(data);
  const [allRestaurants, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(); //useState return an array that has the variable and a func to update that variable
  //the value passed in useState() is a default value that will display in the search box

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getRestoData();
  }, []); //empty dependency array that means this API fetch will load after the page is rendered.

  async function getRestoData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
    );
    const json = await data.json();
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.info
    );
    setAllRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.info
    );
    setLoading(false);
  }

  // if (!allRestaurants) return null; //early return. If the restaurant has no data then it returns null

  const online = useOnline();
  if (!online) return <h1>Offline, please check the network.</h1>

  if (loading) {
    return <h1 className="m-2 p-2">There is Network Latency. Loading...</h1>; // Render loading indicator
  }
  
  //Conditional Rendering
  //using ternary operator => if condition ? (then) : (else)
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 text-center">
        <input
          type="text"
          className="search border border-black p-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e is the event property
            //e.target.value is nothing but the "value" we type in the search box
            setSearchText(e.target.value); //setSearchText func will take the "value" and update it into searchText variable
          }}
        />
        <button
          className="search-btn border rounded bg-pink-50 m-2 p-2"
          onClick={() => {
            const updatedData = restaurantData(searchText, allRestaurants);
            setFilteredRestaurant(updatedData);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {/* passing props */}
        {/* <Cards cloudinaryImageId = {data[0].info.cloudinaryImageId} name = {data[0].info.name} cuisines = {data[0].info.cuisines} avgRating = {data[0].info.avgRating}/>
        <Cards {...data[1].info}/>       */}
        {/* ... spread operator spreads the objects and it works just like data[0] one */}

        {filteredRestaurants?.map((list) => {
          return (
            <Link to={"/restaurant/" + list.info.id} key={list.info.id}>
              <CardData {...list.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
