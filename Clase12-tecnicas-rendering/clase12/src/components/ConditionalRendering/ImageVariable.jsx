import React from 'react'

const ImageVariable = ({condition, source1, source2}) => {
  return (
    <img
        src={condition ? source1 : source2}
    />
  )
}

export default ImageVariable