import { Children, createContext, useState } from "react"

export const Theme = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    return (
        <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
    )
}

export default ThemeProvider
