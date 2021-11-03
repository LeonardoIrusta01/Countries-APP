import axios from 'axios';
export const ASD = 'Razas-A-Z';
export const DES = 'Razas-Z-A';
export const HASD = 'HABITANTES_ASD';
export const HDES = 'HABITANTES_DES';
const URL = 'http://localhost:3001'

// Action donde nos traeremos todas los paises.
export function getCountries() {
    return (dispatch) => {
        return fetch(`${URL}/countries`).then(info => info.json())
            .then(json => {
                dispatch({ type: "GET_COUNTRIES", payload: json })  
            })
    }
}

// Action donde nos traeremos un pais por su nombre.
export function getCountry(name) {
    return (dispatch) => {
        return fetch(`${URL}/countries?name=${name}`).then(info => info.json())
        .then(json => {
            dispatch({ type: "GET_COUNTRY", payload: json })
        })
    }
}

// Action donde traeremos un pais por su id de 3 digitos.
export function getCountryDetail(id3) {
    return (dispatch) => {
        return fetch(`${URL}/countries/${id3}`).then(info => info.json())
            .then(json => {
                dispatch({ type: "GET_COUNTRY_DETAIL", payload: json })
            })
    }
}

// Action donde nos traeremos todas las actividades.
export function getActivities() {
    return (dispatch) => {
        return fetch(`${URL}/activities`).then(info => info.json())
            .then(json => {
                dispatch({ type: "GET_ACTIVITIES", payload: json })
            })

    }
}

// Action donde crearemos una actividad.
export function postActivity(data){ 
    return (dispatch) => {
        return axios.post(`${URL}/activity`, data)      // La data en enviada por body a nuestro back.
            .then(response => {
                console.log(data)
                console.log("response: ")
                console.log(response)
                console.log("Done!")
                dispatch({ type: "POST_ACTIVITY", payload: response })
            })
    }
}
// Ordenamiento por nombres de countries.
export function order_abc(orden, oCountries) {
    let countries = [...oCountries]

    countries.sort((a, b) => {

        var nombreA = a.name.toUpperCase()
        var nombreB = b.name.toUpperCase()

        if (orden === ASD) {
            return nombreA < nombreB ? -1: nombreA > nombreB ? 1 : 0;
        }
        if (orden === DES) {
            return nombreA > nombreB ? -1: nombreA < nombreB ? 1 : 0;
        }
    })
    return function (dispatch) {
        dispatch({ type: "ORDER_ABC", payload: countries })
    }
}

// Ordenamiento por poblacion de las countries.
export function order_population(orden, oPopulation) {
    let population = [...oPopulation]

    population.sort(function (a, b) {

        var poblacionA = parseFloat(a.population)
        var poblacionB = parseFloat(b.population)



        if (orden === HASD) {
            return poblacionA < poblacionB ? -1: poblacionA > poblacionB ? 1 : 0;
        }
        if (orden === HDES) {
            return poblacionA > poblacionB ? -1: poblacionA < poblacionB ? 1 : 0;
        }
    })
    return function (dispatch){
        dispatch({type:"ORDER_POPULATION", payload: population})
    }
}