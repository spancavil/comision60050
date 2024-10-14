import React, { useState } from "react"

const MascaraInput = () => {
    const [input, setInput] = useState("")

    const handleKeyDown = (event) => {
        console.log(event.key)
        const vocales = ["a", "e", "i", "o", "u"]
        if (vocales.includes(event.key)) {
            event.preventDefault()
        }
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <input
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}

export default MascaraInput
