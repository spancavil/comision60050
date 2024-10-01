import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
    const [count, setCount] = useState(0)
    const [characters, setCharacters] = useState([])

    //Obtener los primeros 20 personajes de la API de Rick and Morty
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setCharacters(data.results)
            })

        fetch("http://localhost:4000")
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <ItemDetailContainer />
        </>
    )
}

export default App
