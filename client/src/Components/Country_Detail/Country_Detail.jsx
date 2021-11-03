import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getCountryDetail } from '../../Redux/Actions/Index';
import Nav from '../NavBar/Navbar';
import './Country_Detail.css';

function Detail_country(props) {

    useEffect(() => {
        const id3Code = props.match.params.id3Code;
        props.getCountryDetail(id3Code)
    }, [])

    return (
        <div id='detalles'>
            <div>
                <Nav />
            </div>
            <div id="datos_c">
                <div id='flag'>
                    <img src={props.country_Detail.flags} alt={props.country_Detail.name} />
                </div>
                <div id='informacion'>
                    <h1>{props.country_Detail.name}</h1>
                    <h2>{props.country_Detail.continent}</h2>
                    <h3>Id: {props.country_Detail.id3}</h3>
                    <p>Capital: {props.country_Detail.capital}</p>
                    <p>Subregión: {props.country_Detail.subregion}</p>
                    <p>Area: {props.country_Detail.area} km2 </p>
                    <p>Population: {props.country_Detail.population} </p>
                </div>

            </div>
            
            <div id="actividades_c">
                <hr />
                <h1>Activities</h1>
                <p >{props.country_Detail.activities && props.country_Detail.activities.map(c =>
                    <div>
                        <hr />
                        <div id="Activity">
                            <div>
                                Activity: {c.name}
                            </div>
                            <div>
                                Difficulty: {c.difficulty}
                            </div>
                            <div>
                                Season: {c.season}
                            </div>
                        </div>
                    </div>
                )}</p>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        country_Detail: state.country_Detail,
        activities: state.activities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCountryDetail: (id3Code) => dispatch(getCountryDetail(id3Code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail_country)
