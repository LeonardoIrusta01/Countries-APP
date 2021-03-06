// Seteamos nuestros estados iniciales:
const initialState = {
    countries: [],
    activities: [],
    country_Detail: {},
    country_id3: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        // Nos traemos todas las countries.
        case "GET_COUNTRIES": {
            return {
                ...state,
                countries: action.payload
            }
        }
        // Nos traemos una country por su name.
        case "GET_COUNTRY": {
            return {
                ...state,
                countries: action.payload
            }
        }

        // Nos traemos un pais segun su id de 3 digitos.
        case "GET_COUNTRY_DETAIL": {
            return {
                ...state,
                country_Detail: action.payload
            }
        }

        // Nos traeremos todas las actividades.
        case "GET_ACTIVITIES": {
            return {
                ...state,
                activities: action.payload
            }
        }

        // Creamos una actividad.
        case "POST_ACTIVITY":
            return {
                ...state,
                country_id3: action.payload
            }

        // Ordenamos por nombre
        case "ORDER_ABC": {
            return {
                ...state,
                countries: action.payload
            }
        }

        // Ordenamos por poblacion
        case "ORDER_POPULATION": {
            return {
                ...state,
                countries: action.payload
            }
        }

        // Filtramos por Subregion
        case "FILTER_SUBREG": {
            return {
                ...state,
                countries: action.payload
            }
        }
        case "CHANGE_COUNTRIES": {
            return {
                ...state,
                countries: action.payload
            }
        }

        default:
            return state;
    }
}