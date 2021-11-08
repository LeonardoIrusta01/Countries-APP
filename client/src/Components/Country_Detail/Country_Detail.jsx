import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getCountryDetail } from '../../Redux/Actions/Index';
import Nav from '../NavBar/Navbar';
import './Country_Detail.css';

function Detail_country(props) {

    useEffect(() => {
        const id3 = props.match.params.id3;
        props.getCountryDetail(id3)
    }, [])

    return (
        <div className='detail_table'>
            <div className="back">
            </div>
            <div >
                <Nav />
            </div>
            <div className="datos_c">
                <div className='flag'>
                    <img src={props.country_Detail.flags} alt={props.country_Detail.name} />
                </div>
                <div className='information'>
                    <h4>Country: {props.country_Detail.name}</h4>
                    <h4>Region: {props.country_Detail.region}</h4>
                    <h4>ID: {props.country_Detail.id3}</h4>
                    <p>Capital: {props.country_Detail.capital}</p>
                    <p>Subregión: {props.country_Detail.subregion}</p>
                    <p>Area: {props.country_Detail.area} km2 </p>
                    <p>Population: {props.country_Detail.population} </p>
                </div>

            </div>

            <div className="activities">
                <hr />
                <h2>Activities</h2>
                <p >{props.country_Detail.activities && props.country_Detail.activities.map(c =>
                    <div>
                        <hr />
                        <div className="infActiv">
                            <div>
                                Activity: {c.name}
                            </div>
                            <div>
                                Duration: {c.duration}
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
        getCountryDetail: (id3) => dispatch(getCountryDetail(id3))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail_country)
