const obtenerDatos = require("../Utils/obtenerDatosPokeAPI");
const API = "https://pokeapi.co/api/v2/pokemon";

const getData = async(url) => {
    try{
        //Obtiene los datos de los primeros 20 pokemon
        const data = await obtenerDatos(url);
        //Obtiene la información del 6to pokemon
        const pokemonCharizard = await obtenerDatos(data.results[5].url);
        //console.log(data); //Muestra toda la info de los primeros 20 pokemon
        console.log("Hay ", data.count, " pokemon")
        console.log("Por ejemplo:",pokemonCharizard.name," quien tiene experiencia base de ",pokemonCharizard.base_experience)
    } catch (error){
        console.error(error);
    }
}
getData(API);