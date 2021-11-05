import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
// import logo from '../../Pictur'
import './Navbar.css';
import Search from '../Search/Search.jsx';

// Imports para Order.
import { order_abc, order_population, ASD, DES, HASD, HDES } from '../../Redux/Actions/Index.js';
import { connect } from 'react-redux'

// Imports para filtrados.
import { filtro_reg, changeCountries, getActivities, getCountries } from '../../Redux/Actions/Index.js';


function Nav(props) {
    function handleDispatchOrder(event) {
        if (event.target.value === ASD || event.target.value === DES) {
            props.order_abc(event.target.value, props.countries)
        }
    }

    function handleDispatchHab(event) {
        if (event.target.value === HASD || event.target.value === HDES) {
            props.order_population(event.target.value, props.countries)
        }
    }
    useEffect(() => {
        props.getActivities()
    }, [])

    function handleDispatchCont(event) {
        props.filtro_reg(event.target.value)
    }
    function handleDispatchAct(event) {
        props.changeCountries(event.target.value)
    }

    return (
        <div>
            <div>
                <nav className="Content_nav">
                    <Link className="Activity api" to={'/'}>
                        <h2> Countries APP </h2>
                    </Link>
                    <Link className="Activity Home" to={'/home'}>
                        <h2> Home </h2>
                    </Link>
                    <Link className="Activity" to={'/activity'}>
                        <h2> Add Activity </h2>
                    </Link>
                </nav>
                <hr />

                <div id="NavBar">
                    <select className="selector" onChange={handleDispatchOrder}>
                        <option>Order by Name</option>
                        <option value={ASD}>Ascendant</option>
                        <option value={DES}>Descendant</option>
                    </select>
                    <select className="selector" onChange={handleDispatchHab}>
                        <option>Order by Population</option>
                        <option value={HDES}>Ascendant</option>
                        <option value={HASD}>Descendant</option>
                    </select>

                    <select className="selector" name="region" onChange={handleDispatchCont} key='1006'>
                        <option value="" key="1001">Filter by Continent</option>
                        <option value="Europe" key="1002">Europe</option>
                        <option value="America" key="1003">America</option>
                        <option value="Asia" key="1004">Asia</option>
                        <option value="Oceania" key="1005">Oceania</option>
                        <option value="Africa" key="1006">Africa</option>
                    </select>

                    <select className="selector" name="activity" onChange={handleDispatchAct} key='2002'>
                        <option value="" key='2003'> Filter by Activity</option>
                        {props.activities && props.activities.map(s => (
                            <option>{s.name}</option>
                        ))}
                    </select>
                    <Search />
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        countries: state.countries,
        activities: state.activities,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        order_abc: (a, b) => dispatch(order_abc(a, b)),
        order_population: (a, b) => dispatch(order_population(a, b)),
        filtro_reg: (a, b) => dispatch(filtro_reg(a, b)),
        getActivities: () => dispatch(getActivities()),
        changeCountries: (name) => dispatch(changeCountries(name)),
        getCountries: () => dispatch(getCountries()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)


