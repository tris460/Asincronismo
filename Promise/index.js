//Primer ejercicio con promesas, para revisar la estructura básica
//Creamos una función
const somethingWillHappen = () => {
    //Retorna una promesa, el primer parámetro es si se resuelve y el segundo, si se rechaza (si algo sale mal)
    return new Promise ((resolve, reject)=>{
        if(true){
            //Si se resolvió
            resolve('Resulted');
        } else {
            //Si se rechazó
            reject('Error');
        }
    });
};
//Llamamos a la función
somethingWillHappen()
    //Impriminos la respuesta si fue correcta
    .then(response=>console.log(response))
    //Si hay algún error, lo controlamos
    .catch(err=>console.error(err));

//Promesa que se ejecuta después de 2seg
const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        } else {
            const error = new Error ('False');
            reject(error);
        }
    });
}
somethingWillHappen2()
    .then(response=>console.log(response))
    .catch(err=>console.error(err));

//Obtenemos un arreglo con las respuestas de las funciones con promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Array de resultados de las promesas: ", response);
    })
    .catch(err => {
        console.error(err)
    })