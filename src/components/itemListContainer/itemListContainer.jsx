import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

import Cards from "../cards/Cards"
import "./itemListContainer.css"

const ItemListContainer = () =>{
    const [productos, setProductos] = useState([])
    const [loading , setLoading] = useState(true)
    const {categoria} = useParams()

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            fetch ("/Productos.json")
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error =>{ alert("No se pudieron cargar los productos", error.message)})
            .finally(() => setLoading(false))
        }, 2000)
        return() => clearTimeout(timeOut)
    }, [categoria])
    
    const productosFiltrados = categoria ? productos.filter(p => p.categoria === categoria): productos;

    return(
        <div className="itemListContainer">
            <h2 className="titleItemList">Lista de productos</h2>
            {loading? (
                <p className="pantallaCarga">Cargando productos</p>
            ) : (
                <div className="containerProducts">
                {productosFiltrados.map(producto => (
                    <Cards
                    key = {producto.id}
                    id = {producto.id}
                    imagen = {producto.imagen}
                    alt = {producto.alt}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                    categoria={producto.categoria}
                    marca={producto.marca}
                    />
                ))}
            </div>
            )}
        </div>           
    )
}

export default ItemListContainer