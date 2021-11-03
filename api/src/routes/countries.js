const { Router } = require('express');
const router = Router();
const { Op } = require("sequelize");
const { Country, Activities } = require('../db')
const axios = require('axios')


//Carga Por hook, donde se cargara automaticamente cuando se inicie la aplicacion. 
router.use(async (req, res, next) => {
    const countries = await Country.count();
    if (!countries) {
        const apiResult = await axios.get(
            "https://restcountries.com/v3.1/all"
        );
        const array_country = apiResult.data.map((country) => ({
            id3: country.cca3,
            name: country.name.common,
            flags: country.flags.svg,
            continents: country.continents[0],
            capital: country.capital?.length ? country.capital[0] : "No se encontro la capital",
            region: country.region,
            subregion: country.subregion ? country.subregion : "No se encontro la subregion",
            area: country.area,
            population: country.population,
        }));
        await Country.bulkCreate(array_country).then(c => console.log('Done!')).catch(err => console.error(err))
    }
    next();
});

// Ruta principal
router.get('/', async (req, res) => {
    let countries;
    let { name } = req.query;

    // buscar pais por nombre
    if (name) {
        name = name.split(" ").map(char => char.charAt(0).toUpperCase() + char.slice(1)).join(" ");
        countries = await Country.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`,
                },
            },
            include: { model: Activities, require: false }
        });
        return countries ? res.json(countries) : res.sendStatus(404);
    }
    //Por continente
    let { region } = req.query;
    if (region) {
        region = region.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        let countries2 = await Country.findAll({
            where: {
                region: {
                    //comparo ,y like busca por caracter ingresado.
                    [Op.like]: `%${region}%`,
                },
            },
            include: { model: Activities, required: false },
        });
        return countries2 ? res.json(countries2) : res.sendStatus(404);
    }

    // Todos los paises 
    else {
        let countries = await Country.findAll({
            attributes: ["id3", "name", "flags", "population", "subregion"],
            include: { model: Activities, required: false }
        });
        // console.log("Todas esas weas",countries)
        return res.json(countries)
    }
});

//mostrar pais por id (codigo de 3 letras)
router.get('/:idCountry', (req, res) => {
    let idCountry = req.params.idCountry
    if (idCountry) {
        //idCountry no es afectado por minusculas
        idCountry = idCountry.toUpperCase();
        Country.findOne({
            where: {
                id3: idCountry
            },
            include: [
                {
                    model: Activities,
                }
            ],
        })
            .then((idCountry) => {
                res.status(200).json(idCountry);
            })
            .catch((err) => {
                return res.status(400).send({ data: err });
            })
    }
})

module.exports = router;