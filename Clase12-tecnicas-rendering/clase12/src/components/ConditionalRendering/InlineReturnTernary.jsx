import React from "react"

const InlineReturnTernary = ({ condition }) => {
    return condition ? (
        <span>La condicion es verdadera</span>
    ) : (
        null
    )
}

export default InlineReturnTernary
