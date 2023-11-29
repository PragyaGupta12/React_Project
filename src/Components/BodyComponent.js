import { data } from "../Config"; //named import
import  CardData from "../Components/Cards.js"; //default import
import { useState } from "react"; //named import

const BodyComponent = () => {
  //local state variable in react
  const [searchText, setSearchText] = useState("KFC") //useState return an array that has the variable and a func to update that variable
//this KFC is a default value that will display in the search box

  return (
    <>
    <div className="search-container">
      <input type="text" 
      className="search" 
      placeholder="Search" 
      value={searchText}
      onChange={(e)=>{
        //e.target.value is nothing but the val we type in the search box
        setSearchText(e.target.value)
      }}
      
      />
    </div>

    <div className="restaurant-list">
         {/* passing props */}
      {/* <Cards cloudinaryImageId = {data[0].info.cloudinaryImageId} name = {data[0].info.name} cuisines = {data[0].info.cuisines} avgRating = {data[0].info.avgRating}/>
        <Cards {...data[1].info}/>       */}
      {/* ... spread operator spreads the objects and it works just like data[0] one */}

      {data.map((list) => {
        return <CardData {...list.info} key={list.info.id} />;
      })}
    </div>
    </>
  );
};

export default BodyComponent;
