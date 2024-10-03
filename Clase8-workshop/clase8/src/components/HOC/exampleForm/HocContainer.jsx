import React, { useState } from "react"
import withFormValidation from "./withFormValidation"
import Form from "./Form"

//Es el Form envuelto con la nueva funcionalidad de validación
const FormWithValidation = withFormValidation(Form)

const HocContainer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div>
            <FormWithValidation formData={formData} onChange={handleChange} />
        </div>
    )
}

export default HocContainer
