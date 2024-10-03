import React, { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

const ItemListContainer = () => {
    //Fetch using a customHook
    const { data, loading, error } = useFetch(
        "https://rickandmortyapi.com/api/character/?page=20"
    )

    console.log({ data })
    console.log({ loading })
    console.log({ error })

    //Fetch the traditional way
    // useEffect(() => {
    //     const getCharacters = async () => {
    //         setLoading(true)
    //         try {
    //             const response = await fetch('https://rickandmortyapi.com/api/character/')
    //             const data = await response.json()
    //             console.log(data) // {info: ...., results: [...personajes]}
    //             setCharacters(data.results)
    //         } catch (error) {
    //             console.log(error)
    //             setError(error.message)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     getCharacters()
    // }, [])

    // console.log(characters);
    // console.log(loading);
    // console.log(error);
    
    return <div>ItemListContainer</div>
}

export default ItemListContainer
