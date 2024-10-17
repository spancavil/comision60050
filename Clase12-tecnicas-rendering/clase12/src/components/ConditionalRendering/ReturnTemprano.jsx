import React from 'react'

const ReturnTemprano = ({condition = false}) => {

  if (condition) {
    return (
      <div>ReturnTemprano</div>
    )
  }

  return (
    <h2>Condition is not true</h2>
  )
}

export default ReturnTemprano