let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://pokeapi.co/api/v2/pokemon";

function obtenerDatos(urlapi, callback){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',urlapi,true);
    xmlhttp.onreadystatechange = function(event){
        if(xmlhttp.readyState===4){
            if(xmlhttp.status===200){
                callback(null, JSON.parse(xmlhttp.responseText))
            } else {
                const err = new Error('Error '+urlapi);
                return callback(err,null)
            }
        }
    }
    xmlhttp.send();
}
//Obtiene datos de los primeros 20 pokémon
obtenerDatos(API,function(error1,data1){
    if(error1) return console.error(error1);
    //Obtiene la información de Charizard
    obtenerDatos(data1.results[5].url, function(error2, data2){
        if(error2) return console.error(error2);
        console.log("Hay "+data1.count+" pokémon");
        console.log("Por ejemplo "+data1.results[5].name+" quien tiene experiencia base de "+data2.base_experience)
    })
})