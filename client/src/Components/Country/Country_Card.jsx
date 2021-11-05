import React from "react";
import { Link } from 'react-router-dom';
import './Country_Card.css';

// Renderizamos una country en especifico.
export function Country_Card(props) {
    return (
        <div class='card'>
            <Link className="linkImage" to={`/home/country_detail/${props.id3}`}>
                <div id='con_flag'>
                    <img id='flag' src={props.flags} alt={`la bandera de ${props.name} no se encuentra :(`} />
                </div>
                <div>
                    <div className='text_cards'>
                        <h2>{props.name}</h2>
                        <h3>{props.subregion}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Country_Card;