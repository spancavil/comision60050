//Array, array positions, methods and properties
const nombres = ["Jorge", "Walter", "Lucas", "Maira"]

console.log(nombres[1]);

//Array last position
console.log(nombres[nombres.length - 1])

//Array destructuring
const [nombre1, nombre2, ...restoDeNombres] = nombres

console.log(nombre1);
console.log(restoDeNombres);

//Copying arrays

//Copy by reference => NO X
// const nombres2 = nombres

//Copia by value => OK
const nombres2 = [...nombres]

//find - Returns the reference
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "apples";
}
//Find pasa la referencia al valor, no el valor en sí. Por lo tanto si lo cambio, también cambiará en inventory.
const value = inventory.find(
  fruit => fruit.name === "apples"
);
value.name = "kiwi";
console.log(inventory);

//Map - Returns new array
const fruits2 = inventory.map(fruit => {
  return {
    name: fruit.name,
    quantity: fruit.quantity + 1
  }
})

console.log(fruits2);

//filter
const fruitsFiltered = inventory.filter(fruit => fruit.quantity > 0)
console.log(fruitsFiltered);

//Ejercicios
//1. Encontrar mediante el método find un nombre similar a "edu" en el array ["Jose", "Roberto", "Josefina", "Eduardo", "Bedufino", "Simona"]
//2. Mismo ejercicio que 1, pero mediante filter. ¿Qué diferencias encontramos?
//3. Traer la última posición del array de 1 y modificarlo a "Hector".
//4. Agregar a todos los items del array, una propiedad "edad" numérica aleatoria entre 18 y 70 años.
//5. Filtrar sólo los elementos cuya edad sea menor de 40 años.