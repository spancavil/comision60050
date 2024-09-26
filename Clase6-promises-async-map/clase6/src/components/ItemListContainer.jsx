import React from "react"
import products from "../assets/mockData.json"
import ItemList from "./ItemList"

//Logica para traer los productos. Promise, setTimeout etc.
const ItemListContainer = () => {
    //La data es generada con mockaroo}
    //{
    //     "id": 1,
    //     "title": "Oppo N1",
    //     "description": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
    //     "price": 49.4,
    //     "pictureUrl": "http://dummyimage.com/300x300.png/5fa2dd/ffffff"
    // },

    //falta generar la promise con el retraso de 2 seg
    console.log(products)

    return <ItemList products={products}/>
}

export default ItemListContainer
