import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState ([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/Productos.json") 
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error("Error al cargar los productos:", error));
    }, [])

    const detalles = productos.filter(producto => producto.id === parseInt(id))
    
    return (
        <div className="contenedorProductos">
            {detalles.map(producto => (
                <div key={producto.id}>
                    <div id={producto.id} className="productoDetalles">
                            <h2 className="productoNombre">{producto.nombre}</h2>
                            <img src={producto.imagen} alt={producto.alt} className="productoImagen" />
                            <p className="productoDescripcion">{producto.descripcion}</p>
                            <p className="productoPrecio"><strong>Precio:</strong> ${producto.precio}</p>
                            <p className="productoCategoria"><strong>Categoría:</strong> {producto.categoria}</p>
                        </div>
                        <div className="ContenedorDescripcionExtendida">
                            <p>{producto.descripcionExtendidad}</p>
                    </div>
                </div>
            ))}
        </div>       
    )
}

export default ItemDetailContainer;