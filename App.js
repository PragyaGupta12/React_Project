import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './image/logo.png'

const app = (
    <a href="/">
    <img src={logo} alt="logo" className='logo'/>
    </a>
) 
const HeaderComponent = ()=>{
    return(
        <div className='navbar'>
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
    )
}
const fruits = {
    name: "Fruit Plaza",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/world_breakfast/fresh_fruit_bowl_recipe.jpg",
    cusines: ["Fruits", "Healthy"],
    rating: "4.2"
}
const Cards = ()=>{
    return (
        <div className="card">
            <img src={fruits.image} alt="Fruits" />
            <h2>{fruits.name}</h2>
            <h3>{fruits.cusines.join(", ")}</h3>
            <h4>{fruits.rating} stars</h4>
        </div>
    )
}

const BodyComponent = () =>{
    return (
    <div className='restaurant-list'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
    )
}

const FooterComponent =()=>{
    return <h3>Footer</h3>
}

const AppLayout =()=>{
    return (
    //this empty tag is React.Fragment and it acts like one parent inside JSX
    <> 
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)