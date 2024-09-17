//class
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get area(){
        return this.calcArea()
    }

    //TODO
    get perimeter() {
        return this.calcPerimeter()
    }

    calcArea() {
        return Math.PI * this.radius * this.radius 
    }

    //TODO
    calcPerimeter() {
        return Math.PI * 2 * this.radius
    }
}

//object instances
/* const circle1 = new Circle(1)
console.log(circle1.area)
console.log(circle1.perimeter); */

/* const condicion = true && false // false
if (condicion) {
    //pasa algo
    console.log("Entra al if")
} else {
    //pasa otra cosa
    console.log("Entra al else")
} */

//OPERADOR TERNARIO

//Función que retorna en base a la opción elegida mate dulce o mate amargo
//Outputs: 
//menos de 1 cucharada de azúcar => amargo
//más de 1 cucharadas azúcar => Dulce
const dulceOAmargo = (cucharadas) => {
    //add logic
    return cucharadas < 1 ? 'amargo' : cucharadas <= 2 ? 'semiamargo' : 'dulce'
}

const mateDulce = dulceOAmargo(3)

console.log(mateDulce);

//Destructuring y spread operator ya vistos en clase 1 y 2

