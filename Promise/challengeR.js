//Hacemos el require a fetchData
const fetchData = require("../Utils/fetchDataR&M.js");
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
//1° Petición para ver cuantos personajes hay
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    //2° Petición el llamado para ver el nombre del primer personaje
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    //3° Petición para ver la dimensión de dicho personaje
    .then(data => {
        console.log(data.dimension)
    })
    //Siempre atrapamos algún error
    .catch(err => console.error(err));