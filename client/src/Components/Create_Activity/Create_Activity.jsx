import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { postActivity, getCountries } from '../../Redux/Actions/Index';
import Nav from '../NavBar/Navbar.jsx';
import './Create_Activity.css';

const Create_Activity = () => {
    const dispatch = useDispatch();

    // Seteo un estado para manejar los datos que se mostraran en nuestro scroll de paises.
    const [city, setCity] = useState([])
    
    // Seteo un estado para un mejor manejo de seleccion de pais en nuestro formulario.
    const [paises, setPaises] = useState([])
    
    // Seteo un estado donde almanenaremos nuestros paises seleccionados.
    const [pais, setPais] = useState([])

    // Seteo un uso de banderas para manejar mejor nuestra informacion.
    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(true)

    // Nuestro estado para los datos de nuestro formulario.
    const [form, setForm] = useState({
        name: '',
        duration: '',
        difficulty: '',
        season: '',
    })

    // Creamos una funcion que nos permita 
    const Filt = (array_countries) => {
        setPaises([]);
        let filteredCountries_ = array_countries;
        filteredCountries_ = filteredCountries_.filter(p => p.activities && p.activities.length > 0)
        setPaises(filteredCountries_)
    }

    // Funcion que nos permitira caputar el evento que se este realizando de nuestro input.
    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // Funcion que nos permitira camputar el pais seleccionado en nuestro scroll.
    const handleCountry = (event) => {
        event.preventDefault();
        const options = event.target.options;
        const selections = [];
        for (let i = 0; i < options.length; i++) options[i].selected && selections.push(options[i].value);
        setPais(selections)
    }

    // Funcion que nos permitira mandar el post creado a nuestra DB.
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(Object.assign(form, { pais: pais })))
        event.target.reset();
        alert('Activity Created')
        setTimeout(() => { dispatch(getCountries()) }, 500)
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            Filt(paises)
            setLoading(false)
        }, 1500)
    }, [load])


    useEffect(() => {
        const fetch_Data = async () => {
            setLoading(true);

            const info = await axios.get('http://localhost:3001/countries')

            setCity(info.data);
            setLoading(false);
        };
        fetch_Data();
    }, []);

    // Renderizamos nuestro Formulario Controlodo.
    return (
        <div>
            <div className="back">
            </div>
            <div id='Nav_in_form'>
                <Nav />
            </div>
            <div className='form_of_charge'>
                <form className='Form' onSubmit={handleSubmit} >
                    <div >
                        <h2 className='title'>Load your activity</h2>
                    </div>
                    <div className='datos'>
                        <div className='imput'>
                            <label className='label' htmlFor="">Name:</label>
                            <input type="text" name="name" onChange={handleInputChange} required />
                        </div>

                        <div className='imput'>
                            <label className='label' htmlFor="">Duration:</label>
                            <input type="text" name="duration" placeholder="horas, dias, meses" onChange={handleInputChange} required />
                        </div>

                        <div className='imput'>
                            <label className='label' htmlFor="">Season:</label>
                            <select name='season' onChange={handleInputChange} required>
                                <option ></option>
                                <option value="Verano">Verano(summer)</option>
                                <option value="Invierno">Winter(Invierno)</option>
                                <option value="Oto??o">Fall(Oto??o)</option>
                                <option value="Primavera">Spring(primavera)</option>
                            </select>
                        </div>

                        <div className='imput'>
                            <label className='label' htmlFor="">Difficulty:</label>
                            <input type='number' min='1' max='5' name='difficulty' onChange={handleInputChange} required />
                        </div>

                        <div className='cuadrado'>
                            <label className='label' htmlFor="">Countries: </label>
                            <select id="countries_sel" multiple name="country" onChange={handleCountry} required >
                                {city.length > 0 ? city.map((pais, i) => {
                                    return <option value={pais.id3} key={pais.id3}>{`${pais.id3}(${pais.name})`}</option>
                                }) : <option>Cargando</option>}
                            </select>
                        </div>
                        <input className='btn_Form' type='submit' value='Create Activity' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create_Activity