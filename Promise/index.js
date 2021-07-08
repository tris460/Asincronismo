//Creamos una función
const somethingWillHappen = () => {
    //Retorna una promesa, el primer parámetro es si se resuelve y el segundo, si se rechaza (si algo sale mal)
    return new Promise ((resolve, reject)=>{
        if(false){
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