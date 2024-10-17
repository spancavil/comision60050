import React, { useEffect, useState } from "react"
import Loader from "./Loader"

const ExampleLoading = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    const handleClick = () => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 4000)
    }

    return loading ? <Loader /> : <div>
      <h2>Este es el contenido</h2>
      <button onClick={handleClick}>Activa el loader</button>
      </div>
}

export default ExampleLoading
