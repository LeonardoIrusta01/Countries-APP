import React from "react";
import './Landing.css';
import { Link } from 'react-router-dom';

// Renderizamos nuestro Landing y agregamos un boton para envialo a nuestro Home.
function Landing() {
    return (
        <div className="Count_Landing">
            <h1>COUNTRIES APP</h1>
            <Link to={'/home'}>
                <button id="Landing">
                    <h2>START</h2>
                </button>
            </Link>
        </div>
    )
}

export default Landing;