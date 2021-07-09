const fetchData = require("../Utils/fetchDataR&M");
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async(url_api)=> {
    try {
        //Trae toda la info
        const data = await fetchData(url_api);
        //Trae la info del primer personaje
        const character = await fetchData(`${API}${data.results[0].id}`);
        //Obtenemos su origen
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error){
        console.error(error);
    }
}
console.log('Before');
anotherFunction(API);
console.log('After');