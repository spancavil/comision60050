//Array, array positions, methods and properties

//Array last position

//Array destructuring

//Copying arrays
//Copy by reference => NO X

//Copia by value => OK

//find - Returns the reference
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}
//Find pasa la referencia al valor, no el valor en sí. Por lo tanto si lo cambio, también cambiará en inventory.
const value = inventory.find(isCherries);
value.name = "kiwi";
console.log(inventory);

//Map - Returns new array

//filter

//Ejercicios
//1. Encontrar mediante el método find un nombre similar a "edu" en el array ["Jose", "Roberto", "Josefina", "Eduardo", "Bedufino", "Simona"]
//2. Mismo ejercicio que 1, pero mediante filter. ¿Qué diferencias encontramos?
//3. Traer la última posición del array de 1 y modificarlo a "Hector".
//4. Agregar a todos los items del array, una propiedad "edad" numérica aleatoria entre 18 y 70 años.
//5. Filtrar sólo los elementos cuya edad sea menor de 40 años.