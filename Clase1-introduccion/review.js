const rick = {
  surname: "Smith",
  country: {
    residence: "Smith Residence",
  },
}

const morty = {
  surname: "Smith",
  country: {
    residence: "Smith Residence"
  },
};

rick.country.residence = "Mars"
console.log(rick.country);
console.log(morty.country);

const mortyClone = {...morty}

morty.surname = "Lopez"

console.log(morty);
console.log(mortyClone)


//Solo quiero que cambie la residencia de Morty, pero también cambia la de rick!
// morty.country.residence = "Jupiter"

// console.log(rick.country.residence);
// console.log(morty.country.residence);
//Esto es porque el la propiedad "country" de morty apunta al valor country de rick
//Por lo tanto si cambio la residencia de morty también cambiará la de rick.

//Cómo hacemos para cambiar la residencia de Morty nada más?
//Debemos crear una nueva referencia para el country
morty.country = { residence: "Jupiter" };

console.log(rick.country.residence);
console.log(morty.country.residence);

//Object destructuring
//Object destructuring with variable renaming

//Object copy with spread operator
