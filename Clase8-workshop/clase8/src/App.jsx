import HocContainer from "./components/HOC/exampleForm/HocContainer"
import FormWithValidationBad from "./components/HOC/FormWithValidationBad"
import TemperatureRenderProps from "./components/renderProps/TemperatureConverter/ConRenderProps/TemperatureRenderProps"
import TemperatureBad from "./components/renderProps/TemperatureConverter/TemperatureBad"
import Layout from "./components/usingChildren/Layout/Layout"
import ItemListContainer from "./components/withCustomHooks/ItemListContainer"

function App() {

    return (
        <Layout>
            <h2>Bienvenidos a la clase 8 - Workshop</h2>
            <TemperatureRenderProps/>
        </Layout>
    )
}

export default App
