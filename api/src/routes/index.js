const { Router } = require('express');
const { Sequelize } = require('sequelize')
const { Country, Activities } = require("../db");
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const countries = require("./countries")
// // const activities = require("./activities")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/countries', countries)
// // router.use('/activities', activities)

const apiRresult = async () => {        // Creamos una funcion donde nos traeremos la informacion de la api.
    const { data } = await axios("https://restcountries.com/v3.1/all")      // Nos traemos solo la informacion que se encuentra en "Data".

    // console.log("ESTO ME TRAE LA API", data)

    const apidata = await data.map(country => {     // Realizamos un mapeo a la informacion de data, para ir guardandola en nuestra DB.
        return {
            id3: country.cca3,
            name: country.name.common,
            flags: country.flags.svg,
            continents: country.continents[0],
            capital: country.capital?.length ? country.capital[0] : "No se encontro la capital",
            subregion: country.subregion ? country.subregion : "No se encontro la subregion",
            area: country.area,
            population: country.population,
        }
    });

    // console.log("Estoy antes de rotrnar un valor",apidata)
    const countries = await Country.bulkCreate(apidata)
    return countries;
}

const db = async () => {                // Creo una funcion donde me traigo los datos de mi DB incluyendo las actividades.
    return await Country.findAll({
        include: {
            model: Activities,
            attribute: ['name', 'difficulty', 'duration', 'season'],
            trough: {
                attribute: []
            }
        }
    })
}

// Ruta Principal

router.get('/countries', async (req, res, next) => {
    const { name } = req.query;

    let countries;
    const countriesdb = await Country.count();

    countries = countriesdb === 0 ? await apiRresult() : await db()

    if (name) {
        const countryname = countries.filter(n => n.name.toLowerCase().includes(name.toLowerCase()))

        countryname.length ? res.send(countryname) : res.send("No se encontro ningun pais");

    } else {
        res.send(countries)
    }

});

// Ruta para entrar a los detalles de un pais.
router.get('/countries/:id', async (req, res, next) => {
    const { id } = req.params;
    const country = await db();

    try {
        if (id) {
            const idcountry = country.filter(i => i.id3.toLowerCase() == id.toLowerCase())
            res.send(idcountry)
        }
       
    } catch (error) {
        res.send("Id no valido")
    }
})

// Ruta para crear una actividad.
router.post('/activity', async (req, res, next) => {
    try {
        let { name, difficulty, duration, season, pais} = req.body;  // Me traigo los datos por el body.
        let newActivity = await Activities.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        });

        // console.log(newActivity)
        // idCountry.map(c => {
        //     await 
        // })
        
        newActivity.setCountries(pais)
        return res.send(newActivity)


    } catch (error) {
        next(error)
        return res.send("No se pudo crear la actividad.")
    }
})




module.exports = router;
