import React from "react";
import { Link } from 'react-router-dom';
// import logo from '../../Pictur'
import './Navbar.css';
import Search from '../Search/Search.jsx';
import Order from "../Order/Order.jsx";

function Nav() {
    return (
        <div>
            <div id="estiloNav">
                <nav id="Content_Nav">
                    <Link to={'/home'}>
                        
                    </Link>
                    <Link to={'/activity'}>
                        <h2>Crear Actividad</h2>
                    </Link>
                </nav>
                <hr />
                <div id="NavBar">
                    <Order />
                    <Search />
                </div>
            </div>
        </div>
    )
}
export default Nav;