import React from 'react'
import styles from '../styles/item.module.scss'
/*
    {
        "id": 21,
        "title": "LG Optimus Chat C550",
        "description": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
        "price": 56.7,
        "pictureUrl": "http://dummyimage.com/300x300.png/dddddd/000000"
    }
*/
const Item = ({item}) => {
  return (
    <div className={styles.container}>
        <img src={item.pictureUrl}/>
        <h2>{item.title}</h2>
        <span>{item.description}</span>
        <span>${item.price}</span>
    </div>
  )
}

export default Item