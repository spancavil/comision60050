//Tener en cuenta que la mayoría de las veces nosotros consumiremos promesas, no las crearemos.
//Pero es importante saber la estructura interna

//1.Generación de la promise.
//NOTA: este es un ejemplo dummy, para ver la estructura de una promise.

const returnNames = new Promise((resolve, reject) => {
    const names = ["Juan", "Emiliano", "Carlos"]
    if (names.length > 4) {
        resolve(names)
    } else {
        reject("No se han podido obtener los nombres")
    }
})

//2. Consumición de esa promise.
//Then => se resuelve la promise
//catch => se rechaza la promise
returnNames
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

    console.log("Termino bien");
    