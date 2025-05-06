import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

import Cards from "../cards/Cards"
import "./itemListContainer.css"

const ItemListContainer = () =>{
    const [productos, setProductos] = useState([])
    const [loading , setLoading] = useState(true)
    const {categoria} = useParams()

    useEffect(() => {
        const obtenerProductos = async () => {
            setLoading(true);
    
            try {
                const productosRef = collection(db, "productos");
    
                let consulta;
    
                if (categoria) {
                    consulta = query(productosRef, where("categoria", "==", categoria));
                } else {
                    consulta = productosRef;
                }
    
                const respuesta = await getDocs(consulta);
                const productosObtenidos = respuesta.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
    
                setProductos(productosObtenidos);
            } catch (error) {
                console.error("Error al obtener productos:", error);
                alert("No se pudieron cargar los productos");
            } finally {
                setLoading(false);
            }
        };
    
        obtenerProductos();
    }, [categoria]);
    
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