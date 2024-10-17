import React from 'react'

const ConditionalStyling = (condition) => {
  return (
    <button style={{color: condition ? 'green' : 'red'}}>
      Este button cambiara de estilos según una condicion
    </button>
  )
}

export default ConditionalStyling