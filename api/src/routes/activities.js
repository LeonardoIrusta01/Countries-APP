const { Router } = require('express')
const router = Router();
const { Country, Activities } = require('../db')

// Ruta para traernos las actividades
router.get('/activities',async(req,res)=>{

    // Si me pasan un name por query, realizo una busqueda de esa actividad en los paieses que se encuntre.
    let { name } = req.query;
    if(name){
        // console.log(name)
        name = name.split(" ").map(char => char.charAt(0).toUpperCase() + char.slice(1)).join(" ");
        let country_with_activity = await Country.findAll({
            include:{
                model:Activities,
                where:{
                    name:name
                },
                require:true
            }
        });
        // console.log(country_with_activity)
        return country_with_activity ? res.json(country_with_activity) : res.sendStatus(404);
    }
    
    // Si no me pasan un name, directamente me traigo todas las actividades de mi DB.
    let all_activities = await Activities.findAll();
    let {count, row} = await Activities.findAndCountAll();
    console.log(count)
    res.send(all_activities);
})


// Ruta de Post para la actividad
router.post('/activity', async (req, res) => {
    let { name, difficulty, duration, season, pais } = req.body;
    let actividad = await Activities.create({
        name: name,
        duration: duration,
        difficulty: difficulty,
        season: season,
    })
    actividad.setCountries(pais)
    res.status(201).send('Actividad correctamente!')
});


module.exports = router