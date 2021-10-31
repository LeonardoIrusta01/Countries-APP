import React from "react";
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="Conect_landing">
            <h1>Bienvenidos a mi Pagina</h1>
            <Link to={'/home'}>
                <button id='Landing'>Ingresar</button>
            </Link>
        </div>
    )
}

export default Landing