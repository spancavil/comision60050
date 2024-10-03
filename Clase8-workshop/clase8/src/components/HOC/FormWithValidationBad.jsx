import React, { useState } from "react"
import Form from "./exampleForm/Form"

const FormWithValidationBad = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    const [errors, setErrors] = useState({})

    function validateForm() {
        //Variable auxiliar
        const newErrors = {}
        if (!formData.name) {
            newErrors.name = "El usuario es requerido"
        }

        // Error en caso que formData.name esté vacio
        //{name: "El usuario es requerido"}

        setErrors(newErrors)
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <Form
            validateForm={validateForm}
            errors={errors}
            formData={formData}
            onChange={handleChange}
        />
    )
}

export default FormWithValidationBad
