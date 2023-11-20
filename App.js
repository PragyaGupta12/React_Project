import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./image/logo.png";

//config-driven UI
const app = (
  <a href="/">
    <img src={logo} alt="logo" className="logo" />
  </a>
);
const HeaderComponent = () => {
  return (
    <div className="navbar">
      {app}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const data = [
  {
    name: "Fruit Plaza",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/world_breakfast/fresh_fruit_bowl_recipe.jpg",
    cuisines: ["Fruits", "Healthy"],
    rating: "4.2",
  },
  {
    name: "Salad Plaza",
    image:
      "https://www.twopeasandtheirpod.com/wp-content/uploads/2023/06/Crate-Barrel-Melamine-Bowl.jpg",
    cuisines: ["Salad", "Healthy"],
    rating: "4.1",
  },
];

const Cards = ({image, name, cuisines, rating}) => {
  return (
    <div className="card">
      <img src={image} alt="Fruits" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (//passing props 
    <div className="restaurant-list">
      <Cards image = {data[0].image} name = {data[0].name} cuisines = {data[0].cuisines} rating = {data[0].rating}/>
      <Cards name = {data[1].name}/>
      <Cards name = {data[0].name}/>
      <Cards name = {data[1].name}/>
    </div>
  );
};

const FooterComponent = () => {
  return <h3>Footer</h3>;
};

const AppLayout = () => {
  return (
    //this empty tag is React.Fragment and it acts like one parent inside JSX
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
