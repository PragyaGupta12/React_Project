import { IMG_CDN_LINK } from "../config.js";

//destructuring the props and passing them as params
const CardData = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
      //info?. this ?. is for optional chaining
      <div className="card w-[200px] p-2 m-2 shadow-lg bg-slate-100">
        {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data[0].info?.cloudinaryImageId} alt="Fruits" />
          <h2>{data[0].info?.name}</h2>
          <h3>{data[0].info?.cuisines.join(", ")}</h3>
          <h4>{data[0].info?.avgRating} stars</h4> */}
  
        <img
          src={
            IMG_CDN_LINK + cloudinaryImageId
          }
          alt=""
        />
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };

  export default CardData;