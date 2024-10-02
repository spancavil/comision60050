import { useState } from "react"

/**
 * Hook for input
 * @param  {string} initialValue initial value of the input
 * @returns {object} value and onChange
 */
const useInputForm = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
        setValue(e.target.value)
    }

    const inputProps = {
        value: value,
        onChange: handleChange,
    }

    return inputProps
}

export default useInputForm
