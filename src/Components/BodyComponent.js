import { data } from "../Config";
import  CardData from "../Components/Cards.js";

const BodyComponent = () => {
  return (
    <>
    <div className="search-container">
      <input type="text" 
      className="search" 
      placeholder="Search" 
      value={search}
      onChange={(e)=>{
        search = console.log(e.target.value)
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
