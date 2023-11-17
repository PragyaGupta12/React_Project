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
const BodyComponent = () =>{
    return(
        <h4>Body</h4>
    )
}

const FooterComponent =()=>{
    return (
        <h3>Footer</h3>
    )
}

const AppLayout =()=>{
    <> 
    //this empty tag is React.Fragment and it acts like one parent inside JSX
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
    </>
}
const root = ReactDOM.createRoot(document.getElementById('main'))
root.render(<HeaderComponent/>)