//Tener en cuenta que la mayoría de las veces nosotros consumiremos promesas, no las crearemos.
//Pero es importante saber la estructura interna

//1.Generación de la promise.
//NOTA: este es un ejemplo dummy, para ver la estructura de una promise.

const returnNames = new Promise((res, rej) => {
    const names = ["Ramon", "Pepito", "Jose"]
    if (names.length > 2) {
        return res(names)
    } else {
        rej("No se han podido obtener los nombres")
    }
})

//2. Consumición de esa promise

