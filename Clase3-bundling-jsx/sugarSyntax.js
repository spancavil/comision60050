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

    }

    calcArea() {
        return Math.PI * this.radius * this.radius 
    }

    //TODO
    getPerimeter() {

    }
}

//object instances

//OPERADOR TERNARIO

//Función que retorna en base a la opción elegida mate dulce o mate amargo
//Outpus: 
//menos de 1 cucharada de azúcar => amargo
//más de 1 cucharadas azúcar => Dulce
const dulceOAmargo = (cucharadas) => {
    //add logic
}

//Destructuring y spread operator ya vistos en clase 1 y 2

