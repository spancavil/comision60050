import React, { useState } from "react"

function Kelvin({ value = 0 }) {
    return <div className="temp">{Number(value) + 273.15}K</div>
}

function Fahrenheit({ value = 0 }) {
    return <div className="temp">{(Number(value) * 9) / 5 + 32}°F</div>
}

//T en grados celsius
function Input({ value, handleChange }) {
    return (
        <input value={value} onChange={(e) => handleChange(e.target.value)} />
    )
}

/* Es una solución válida y funciona.
Sin embargo, que para que el value esté accesible en todos los componentes (Kelvin, Fahrenheit e Input) necesitamos que el componente padre contenga el state.
Esto puede llegar a ser un problema si la app escala ya que recordar que si se cambia el state se van a volver a renderizar todos los componentes hijos, desencandenando problema de optimización si tenemos muchos hijos con mucho contenido 

Aquí es cuando entran las render props!
*/

function TemperatureBad() {
    //value => la temp en °C
    const [value, setValue] = useState("")
    return (
        <div className="App">
            <h1>☃️ Temperature Converter 🌞</h1>
            <Input value={value} handleChange={setValue} />
            <Kelvin value={value} />
            <Fahrenheit value={value} />
        </div>
    )
}

export default TemperatureBad
