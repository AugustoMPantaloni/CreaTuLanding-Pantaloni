import "./app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Importacion de los componentes
import NavBar from "./components/navBar/navBar"
import ItemListContainer from "./components/itemListContainer/itemListContainer"


function App() {
  const prop = "Aca se mostraran los productos"
  return (
    <BrowserRouter>
        <NavBar/>
        <ItemListContainer mensaje={prop}></ItemListContainer>
      <Routes>
        <Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
