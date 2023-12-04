import { data } from "../Config"; //named import
import CardData from "../Components/Cards.js"; //default import
import { useState, useEffect } from "react"; //named import

function restaurantData(searchText, restaurants) {
  const restoData = restaurants.filter((resData) =>
    resData.info.name.includes(searchText)
  );
  return restoData;
}
const BodyComponent = () => {
  //local state variable in react
  const [restaurants, setRestaurant] = useState(data);
  const [searchText, setSearchText] = useState(); //useState return an array that has the variable and a func to update that variable
  //the value passed in useState() is a default value that will display in the search box

  useEffect(() => {
    getRestoData();
  }, []);

  async function getRestoData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e is the event property
            //e.target.value is nothing but the "value" we type in the search box
            setSearchText(e.target.value); //setSearchText func will take the "value" and update it into searchText variable
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const updatedData = restaurantData(searchText, restaurants);
            setRestaurant(updatedData);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {/* passing props */}
        {/* <Cards cloudinaryImageId = {data[0].info.cloudinaryImageId} name = {data[0].info.name} cuisines = {data[0].info.cuisines} avgRating = {data[0].info.avgRating}/>
        <Cards {...data[1].info}/>       */}
        {/* ... spread operator spreads the objects and it works just like data[0] one */}

        {restaurants?.map((list) => {
          return <CardData {...list.info} key={list.info.id} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
