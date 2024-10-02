import React, { useState } from "react"

const withFormValidation = (WrappedComponent) => {
    const WithFormValidation = (props) => {
        const [errors, setErrors] = useState({})

        function validateForm() {
            const newErrors = {}
            if (!props.formData.name) {
                newErrors.name = "El usuario es requerido"
            }

            setErrors(newErrors)
        }

        return (
            <WrappedComponent
                {...props}
                errors={errors}
                validateForm={validateForm}
            />
        )
    }
    return WithFormValidation
}

export default withFormValidation
