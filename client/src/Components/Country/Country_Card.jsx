import React from "react";
import { Link } from 'react-router-dom';
import './Country_Card.css';

// Renderizamos una country en especifico.
export function Country_Card(props) {
    return (
        <div class='card'>
            <Link to={`/home/country_detail/${props.id3}`}>
                <div id='con_flag'>
                    <img id='flag' src={props.flags} alt={`la bandera de ${props.name} no se encuentra :(`} />
                </div>
                <div>
                    <div id='text_cards'>
                        <h1>{props.name}</h1>
                        <h1>{props.subregion}</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Country_Card;