import React from "react"
import useInputForm from "../../hooks/useInputForm"

const Form = () => {
    const firstNameProps = useInputForm("Mary")
    const lastNameProps = useInputForm("Poppins")

    return (
        <>
            <label>
                First name:
                <input {...firstNameProps} />
            </label>
            <label>
                Last name:
                <input {...lastNameProps} />
            </label>
            <p>
                <b>
                    Good morning, {firstNameProps.value} {lastNameProps.value}.
                </b>
            </p>
        </>
    )
}

export default Form
