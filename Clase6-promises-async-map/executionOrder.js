//Se ejecuta en el siguiente orden:
//1. Todo el todo el hilo actual (call stack)
//2. Todo lo que esté pendiente en el microtask (promesas que estén completas)
//3. Funciones callback (timeouts, interval, callbacks de eventos como clicks)

//El orden es así para evitar el bloqueo del hilo principal y que el programa siga funcionando a pesar
//de depender de acciones externas.

console.log("1")

setTimeout(() => {
    console.log("2")
}, 0)

console.log("3")

//Retardo
for (let index = 0; index < 1e9; index++) {
    console.log("3-bis");
}



const promise = new Promise((res, rej) => {
    res("4")
})

const value = promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error))

const sayHello = () => {
    console.log("5")
}

sayHello()

console.log("6")
