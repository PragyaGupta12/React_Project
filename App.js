import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './image/logo.png'

const appName = (
    <img src={logo} alt="logo" />
) 
const HeaderComponent = ()=>{
    return(
        <div className='navbar'>
            {appName}
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

const root = ReactDOM.createRoot(document.getElementById('header'))
root.render(<HeaderComponent/>)