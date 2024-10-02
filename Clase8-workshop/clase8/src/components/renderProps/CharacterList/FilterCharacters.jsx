import React, { useState } from "react"

const FilterCharacters = ({ children }) => { 

    const [filter, setFilter] = useState('all')

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return children(filter, handleFilterChange)
}

export default FilterCharacters
