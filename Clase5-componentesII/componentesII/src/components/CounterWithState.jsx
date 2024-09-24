import React, { useEffect, useState } from "react"

const CounterWithState = () => {

    //La actualización de un state desencadena un re-render
    const [count, setCount] = useState(0)
    //Si hacemos un log del state posterior al agregado, vemos que estamos viendo el state actual
    //y no el modificado

    useEffect(()=>{
        console.log("Esto se ejecutará SOLAMENTE cuando se monta el componente")
    }, [])

    useEffect(()=>{
        console.log("Esto se ejecutará cuando se monta el componente y cuando CAMBIA el state count")
    }, [count])

    const onAdd = () => {
        setCount(prevState => prevState + 1)

        //Hacer un console.log(count) posterior al setCount
        console.log(count)
    }

    return (
        <div>
            <span>Counter with state</span>
            <button onClick={onAdd}>Add 1</button>
            <span>{count}</span>
        </div>
    )
}

export default CounterWithState
