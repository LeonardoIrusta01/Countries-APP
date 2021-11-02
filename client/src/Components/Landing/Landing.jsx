import React from "react";
import './Landing.css';
import { Link } from 'react-router-dom';

// Renderizamos nuestro Landing y agregamos un boton para envialo a nuestro Home.
function Landing() {
    return (
        <div id="Count_Landing">
            <h1>Bienvenidos a mi pagina</h1>
            <Link to={'/home'}>
                <button id="Landing">Ingresar</button>
            </Link>
        </div>
    )
}

export default Landing;