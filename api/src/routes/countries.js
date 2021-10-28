// const server = require("express").Router();
// const { Sequelize } = require('sequelize')
// const { Country, Activities } = require("../db");
// const axios = require('axios')

// const apiRresult = async () => {        // Creamos una funcion donde nos traeremos la informacion de la api.
//     const { data } = await axios("https://restcountries.com/v3.1/all")      // Nos traemos solo la informacion que se encuentra en "Data".

//     // console.log("ESTO ME TRAE LA API", data)

//     const apidata = await data.map(country => {     // Realizamos un mapeo a la informacion de data, para ir guardandola en nuestra DB.
//         return {
//             id3: country.cca3,
//             name: country.name.common,
//             flag: country.flags[0],
//             continents: country.continents[0],
//             capital: country.capital?.length ? country.capital[0] : "No se encontro la capital",
//             subregion: country.subregion ? country.subregion : "No se encontro la subregion",
//             area: country.area,
//             population: country.population,
//         }
//     });
//     const countries = await Country.bulkCreate(apidata)
//     return countries;
// }

// const db = async () => {                // Creo una funcion donde me traigo los datos de mi DB incluyendo las actividades.
//     return await Country.findAll({
//         include: {
//             model: Activities,
//             attribute: ['name', 'difficulty', 'duration', 'season'],
//             trough: {
//                 attribute: []
//             }
//         }
//     })
// }

// server.get('/', async (req, res, next) => {
//     const { name } = req.query;

//     let countries;
//     const countriesdb = await Country.count();

//     countries = countriesdb === 0 ? await apiRresult() : awaitdb()

//     if (name) {
//         const countryname = countries.filter(n => n.name.toLowerCase().includes(name.toLowerCase()))

//         countryname.length ? res.send(countryname) : res.send("No se encontro ningun pais");

//     } else {
//         res.send(countries)
//     }

// });

// server.get('/:id', async (req, res, next) => {
//     const { id } = req.params;
//     const country = await db();

//     try {
//         if (id) {
//             const idcountry = country.filter(i => i.id3.toLowerCase() == id.toLowerCase())
//             res.send(idcountry)
//         }
        
//     } catch (error) {
//         res.send("Id no valido")
//     }
// })

// module.exports = server

