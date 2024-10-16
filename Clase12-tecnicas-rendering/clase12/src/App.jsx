import ItemListContainer from "./components/ItemListContainer"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ThemeProvider from "./context/ThemeProvider"
import CartProvider from "./context/CartProvider"
import ConditionalClass from "./components/ConditionalRendering/ConditionalClass"
import InputWithAdditionalStyles from "./components/ConditionalRendering/InputWithAdditionalStyles"
import Loader from "./components/ConditionalRendering/Loader"
import DemoMemo from "./components/Memo/DemoMemo"

function App() {
    return (
        <CartProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={ <DemoMemo/>}/>
                            <Route
                                path="/category/:categoryId"
                                element={<ItemListContainer />}
                            />
                            <Route
                                path="/detail/:id"
                                element={<ItemDetailContainer />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </ThemeProvider>
        </CartProvider>
    )
}

export default App
