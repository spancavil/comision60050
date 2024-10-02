import React from "react"

const Form = ({ formData, errors, validateForm, onChange }) => {

    function handleSubmit(e) {
        e.preventDefault()
        validateForm && validateForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => onChange(e)}
                />
                {errors && errors?.name && (
                    <div>{errors.name}</div>
                )}
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form
