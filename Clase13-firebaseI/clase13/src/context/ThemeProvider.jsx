import { createContext, useState } from "react"

//1. Crear el contexto
export const Theme = createContext()

//2. Crear el componente que va a proveer ese contexto <NombreProvider>
const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)

    return (
        <Theme.Provider value={{ dark, setDark }}>{children}</Theme.Provider>
    )
}

export default ThemeProvider
