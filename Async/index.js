//Se crea la función que va a regresar una promesa
const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        //Condición con expresión ternaria
        (true)
        //Si es correcto va a esperar 3 segundos para pasar el resolve
        ? setTimeout(() => resolve("Do Something Async"), 3000)
        : reject(new Error('Error'))
    });
}
//Aquí es donde se va a tener el async y await
const doSomething = async () => {
    //Va a esperar a que doSomethingAsync le mande algo, que va a guardar en something y lo imprime
    const something = await doSomethingAsync();
    console.log(something);
}
//Imprimimos los valores para ver en que orden se imprimen
console.log('Before');
doSomething();
console.log('After');
//Atrapar los errores si hay alguno
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch {
        console.error(error)
    }
}
//Imprimimos de nuevo para ver en que orden se imprimen, con respecto a la anterior función
console.log('Before 1');
anotherFunction();
console.log('After 1');