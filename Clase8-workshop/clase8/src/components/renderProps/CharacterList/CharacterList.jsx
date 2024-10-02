import React from "react"

const CharacterList = ({ characters }) => {    
    return (
        <ul>
            {characters.map((character) => (
                <li key={character.id}>{character.name}</li>
            ))}
        </ul>
    )
}

export default CharacterList
