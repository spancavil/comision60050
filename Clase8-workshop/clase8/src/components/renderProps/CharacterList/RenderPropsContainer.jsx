import React from "react"
import characters from "../../../assets/characters.json"
import FilterCharacters from "./FilterCharacters"
import CharacterList from "./CharacterList"

const RenderPropsContainer = () => {
    return (
        <div>
            {/* Otros componentes siblings que no se ven afectados */}
            <FilterCharacters>
                {(filter, handleFilterState) => (
                    <div>
                        <label htmlFor="filter">Filtrar por especie</label>
                        <select
                            id="filter"
                            value={filter}
                            onChange={handleFilterState}
                        >
                            <option value="all">Todos</option>
                            <option value="Human">Humano</option>
                            <option value="Alien">Alien</option>
                        </select>
                        <CharacterList
                            characters={
                                filter === "all"
                                    ? characters
                                    : characters.filter(
                                          (character) =>
                                              character.species === filter
                                      )
                            }
                        />
                    </div>
                )}
            </FilterCharacters>
        </div>
    )
}

export default RenderPropsContainer
