import React, { useEffect, useRef } from "react"

const CounterWithRef = () => {

    const refCount = useRef(0)
    useEffect(()=> {
        console.log("Se monta el componente");
        
    }, [])

    const addCount = () => {
        //Observar que es mutable la referencia
        refCount.current += 1
        //A diferencia del ejemplo anterior, cada vez que actualizamos el current tenemos acceso instantáneo al valor actualizado!
        console.log({refCount});
        
    }

    console.log(refCount)
    console.log("Cada vez que se renderiza el componente veremos este mensaje");
    
    return (
        <div>
            <span>Counter with state</span>
            <button onClick={addCount}>Add 1</button>
            <span>{refCount.current}</span>
        </div>
    )
}

export default CounterWithRef
