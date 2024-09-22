import React, { useState } from "react"

const CounterWithState = () => {

    //Si hacemos un log del state posterior al agregado, vemos que estamos viendo el state actual
    //y no el modificado

    onAdd = () => {

        //Hacer un console.log(count) posterior al setCount
    }

    return (
        <div>
            <span>Counter with state</span>
            <button>Add 1</button>
            <span></span>
        </div>
    )
}

export default CounterWithState
