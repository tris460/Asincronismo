//Vamos a cambiar todo a Ecma Script 6

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Era una función, se cambia por una constante y se cambia por un arrow function, ya no va a recibir un callback
const fetchData = (url_api) => {
    //Va a retornar una promesa
    return new Promise((resolve, reject)=>{
        //Ahora xhttp va a ser una constante
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        //Aquí lo cambiamos por una Arrow function que va a ejecutar los if
        xhttp.onreadystatechange = (() =>{
            if(xhttp.readyState === 4){
                //Dejamos de usar el if que retorna el callback
                (xhttp.status === 200)
                //Se usa una expresión ternaria, si se resuelve mandamos el JSON, si no, enviamos un error con la url de la API
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ',url_api))
            }
        });
        //Petición que se va a requerir
        xhttp.send();
    });
}
//Exportamos el módulo, se usa el module.exports porque usamos node y node no usa la sintaxis del import y export que viene por default, ya se puede usar esta función dentro de challenge
module.exports = fetchData;