import React, { useState } from "react";
import { connect } from 'react-redux';
import { getCountry } from '../../Redux/Actions/Index';

export function Search(props) {
    //Setamos nuestro estado inical para el imput.
    const [input, setImput] = useState({
        name: "",
    })

    function handleChange(e) {
        setImput({
            name: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (input.name) {
            props.getCountry(input.name)
        }
        else if (!input.name) {
            alert("Nombre invalido")
        }
    }

    // Renderizamos nuestra SearchBar
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="bar">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <button type="sumbit">Buscar</button>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        countries: state.countries
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCountry: name => dispatch(getCountry(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

