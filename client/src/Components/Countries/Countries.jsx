import React, { useEffect, useState } from "react";
import './Countries.css';
import { connect } from 'react-redux';
import { getCountries, getCountry } from '../../Redux/Actions/Index';
import Country from '../Country/Country_Card';

export function Countries(props) {
    // Seteamos un estado para nuestro paginado...
    const [numPage, setNumPage] = useState(1);

    const grupo = 10;
    const page_final = numPage * grupo;
    const page_inicial = page_final - grupo;

    const countries = props.countries.slice(page_inicial, page_final)

    useEffect(() => {
        props.getCountries()
    }, [])

    // Aplicamos unas condiciones para utilizar bien nuestro paginado.
    if (numPage < 1) {
        setNumPage(1)
        return;
    }
    else if (numPage > 25) {
        setNumPage(25)
        return;
    }

    // Renredizamos nuestras Countries.
    return (
        <div>
            <div id='cont'>
                {countries ? countries.map(country =>
                    <div className="cards">
                        <Country
                            id3={country.id3}
                            name={country.name}
                            flags={country.flags}
                            subregion={country.subregion} />
                    </div>) : (<p>Pais No Encontrado</p>)}

            </div>
            <div className='pag'>
                <button onClick={() => setNumPage(numPage - 1)}>◀</button>
                <h3>{numPage}</h3>
                <button onClick={() => setNumPage(numPage + 1)}>▶</button>
            </div>
        </div>
    )

}

// Funcion para setear los estados de nuestra informacion.
function mapStateToProps(state) {
    console.log(state)
    return {
        countries: state.countries
    }
}

// Funcion para dispachar la accion de nuestro front y traernos la informacion solicitada.
function mapDispatchToProps(dispatch) {
    return {
        getCountries: () => dispatch(getCountries()),
        getCountry: name => dispatch(getCountry(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)