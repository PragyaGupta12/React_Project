import { data } from "../Config"; //named import
import CardData from "../Components/Cards.js"; //default import
import { useState, useEffect } from "react"; //named import

function filterData(searchText, filteredData) {
  const restoData = filteredData.filter((resData) => resData.info.name.includes(searchText)
  );
  return restoData;
}
const BodyComponent = () => {
  //local state variable in react
  const [filteredData, setfilteredData] = useState(data);
  const [searchText, setSearchText] = useState(); //useState return an array that has the variable and a func to update that variable
  //the value passed in useState() is a default value that will display in the search box

  useEffect(()=>{
    getRestoData()
  })

async function getRestoData(){
  const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.5584489&lng=77.2029376&carousel=true&third_party_vendor=1")
  const JSONData = await data.json()
  console.log(JSONData)
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
            const updatedData = filterData(searchText, filteredData);
            setfilteredData(updatedData);
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

        {filteredData.map((list) => {
          return <CardData {...list.info} key={list.info.id} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
