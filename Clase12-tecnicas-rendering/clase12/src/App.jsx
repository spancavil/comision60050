import ItemListContainer from "./components/ItemListContainer"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ThemeProvider from "./context/ThemeProvider"
import CartProvider from "./context/CartProvider"
import ExampleLoading from "./components/ConditionalRendering/ExampleLoading"
import ReturnTemprano from "./components/ConditionalRendering/ReturnTemprano"
import InlineReturn from "./components/ConditionalRendering/InlineReturn"
import InlineReturnTernary from "./components/ConditionalRendering/InlineReturnTernary"
import ConditionalStyling from "./components/ConditionalRendering/ConditionalStyling"
import ConditionalClass from "./components/ConditionalRendering/ConditionalClass"
import InputWithAdditionalStyles from "./components/ConditionalRendering/InputWithAdditionalStyles"
import DemoMemo from "./components/Memo/DemoMemo"

function App() {
    return (
        <CartProvider>
            <ThemeProvider>
                <Layout>
                    <DemoMemo/>
                </Layout>
            </ThemeProvider>
        </CartProvider>
    )
}

export default App
