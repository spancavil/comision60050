import React from "react"

const InlineReturn = ({ condition }) => {
    return (
        <div>
            {condition && <span>La condicion es verdadera</span>}

            {!condition && <span>La condicion es falsa</span> }
        </div>
    )
}

export default InlineReturn
