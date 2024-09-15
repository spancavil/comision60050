console.log(typeof("18"))

const contarManzanas = function () {
    const manzanas = ["m1", "m2", "m3", "m4"]
    return manzanas.length
}

const cantidadManzanas = contarManzanas

console.log(cantidadManzanas);

const cantidadManzanas2 = contarManzanas()

console.log(cantidadManzanas2);
