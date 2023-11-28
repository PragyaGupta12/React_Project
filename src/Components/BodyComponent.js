import { data } from "../Config";
import  CardData from "../Components/Cards.js";

const BodyComponent = () => {
  return (
    //passing props
    <div className="restaurant-list">
      {/* <Cards cloudinaryImageId = {data[0].info.cloudinaryImageId} name = {data[0].info.name} cuisines = {data[0].info.cuisines} avgRating = {data[0].info.avgRating}/>
        <Cards {...data[1].info}/>       */}
      {/* ... spread operator spreads the objects and it works just like data[0] one */}

      {data.map((list) => {
        return <CardData {...list.info} key={list.info.id} />;
      })}
    </div>
  );
};

export default BodyComponent;
