import React, { useEffect, useState } from "react"

/**
 * Hook for fetching data using GET to an URL and no additional parameters
 * @param {string} url
 * @returns {{loading: boolean, data: any, error: string}} data: the data fetched, loading: boolean, and error: the error message
 */
const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        //IIFE
        /* (async () => {
            ...la funcion
            })()
 */

        const getData = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log(error)
                setError(error.message)
            } finally {
                setLoading (false)
            }
        }
        getData()
    }, [])

    //En lugar de retornar un JSX retorna un objeto con todos los estados
    return {loading, data, error}
}

export default useFetch
