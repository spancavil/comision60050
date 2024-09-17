import { useState } from 'react'
import reactLogo from './assets/react.svg'
import kitten from './assets/kitten.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  // 1. Styling: inline styles directly and from separated variable
  const buttonStyles = {
    padding: 10,
    border: '1px solid white',
    borderRadius: 40,
    backgroundColor: 'green'
  }

  // 2. Image (autoclosing tag) 
  // 3. Classname

  // 4. onClick introduction (camelCase)
  const handleClick = () => {
    console.log("Se hizo click en el botón");    
  }

  // const [count, setCount] = useState(0)

  //JSX => me define cómo se verá la interfaz.

  //<> </> => React Fragment, no añade ninguna etiqueta al HTML
  return (
    <>
      <h1 style={{color: 'blueviolet', marginTop: 40}} >Hola, bienvenidos a la clase 3!</h1>
      <button style={buttonStyles} onClick={handleClick}>Press me</button>
      <img src={kitten} style={{width: 400}}/>
      <hr/>
      <div className='container' >
        <span>Hola dentro del div</span>
      </div>
    </>
  )
}

export default App
