import React, { useState } from "react"

function Kelvin({ value = 0 }) {
  return <div className="temp">{Number(value) + 273.15}K</div>
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(Number(value) * 9) / 5 + 32}°F</div>
}

function Input({children}) {
    const [value, setValue] = useState("");
  
    return (
      <>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Temp in °C"
        />
        {children(value)}
      </>
    );
  }

const TemperatureRenderProps = () => {
    return (
        <div className="App">
            <h1>☃️ Temperature Converter 🌞</h1>
            {/* Ahora el componente Input, mediante sus propiedades de renderización o "render props" pasa un value que será utilizado en lo que ahora corresponderá a los children (Kelvin y Fahrenheit), sin necesidad de que el padre (o sea TemperatureRenderProps) maneje el state.
            Datazo de color: la librería Formik emplea este pattern.
            */}
            <Input>
                {(value) => (
                    <>
                        <Kelvin value={value} />
                        <Fahrenheit value={value} />
                    </>
                )}
            </Input>
        </div>
    )
}

export default TemperatureRenderProps
