import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
      <Layout>
        <h2>Bienvenidos a la clase 9</h2>
      </Layout>
  )
}

export default App
