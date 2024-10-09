import ItemListContainer from './components/ItemListContainer'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import ItemDetailContainer from './components/ItemDetailContainer'
import Events from './components/Events'
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path = "/" element = {<Events/>}/>
          <Route path = "/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path = "/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
