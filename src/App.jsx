import "./app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Importacion de los componentes
import NavBar from "./components/navBar/navBar"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer"
import Footer from "./components/Footer/Footer"
import PageNotFound from "./components/NotFound/PageNotFound"

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<PageNotFound/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
