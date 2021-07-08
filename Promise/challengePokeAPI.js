const obtenerDatos = require("../Utils/obtenerDatosPokeAPI.js");
const API = "https://pokeapi.co/api/v2/pokemon";

obtenerDatos(API)
    //Obtiene los datos de los primeros 20 pokemon
    .then(data => {
        console.log("Hay ",data.count," pokémon")
        console.log("Por ejemplo ",data.results[5].name);
        return obtenerDatos(data.results[5].url)
    })
    .then(data => {
        console.log("Quien tiene experiencia base de ",data.base_experience)
    })
    .catch(err => console.error(err));