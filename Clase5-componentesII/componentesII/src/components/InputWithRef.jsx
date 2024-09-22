import React, { useEffect, useRef } from "react"

const InputWithRef = () => {
    /*
    Cambiar el valor de current no desencadena re-renders
    Muy util para:
        1. Reproducir videos
        2. Generar referencias a objetos que luego serán utilizados por otras librerías.
        3. No generar states innecesarios, cuando no los necesitamos en la interfaz por ejemplo valores intermedios de llamados a API's.
    */
    const inputRef = useRef()
    const inputRef2 = useRef()

    useEffect(() => {
        inputRef2.current.focus()
    })

    const handleClick = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }

    return (
        <div>
            <span>Inputs with reference</span>
            <button onClick={handleClick}>Presionar para hacer focus</button>
            <input ref={inputRef2} placeholder="Input focused on mount"></input>
            <input ref={inputRef} placeholder="Input focused on click"></input>
        </div>
    )
}

export default InputWithRef
