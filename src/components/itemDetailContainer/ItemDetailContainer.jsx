import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import "./ItemDetailContainer.css";
import ItemCount from "../itemCount/ItemCount";
import { useCart } from "../../context/CartContext";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const productosRef = collection(db, "productos");
                const productosSnapshot = await getDocs(productosRef);

                const productoEncontrado = productosSnapshot.docs
                    .map(doc => doc.data())
                    .find(producto => producto.id === parseInt(id));

                if (productoEncontrado) {
                    setProducto(productoEncontrado);
                } else {
                    console.error("Producto no encontrado");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        obtenerProducto();
    }, [id]);

    const { addToCart } = useCart();

    const handleOnAdd = (cantidad) => {
        addToCart(producto, cantidad);
    };

    if (loading) {
        return <p className="pantallaCarga">Cargando producto...</p>;
    }

    if (!producto) {
        return <p>Producto no encontrado.</p>;
    }

    return (
            <div className="contenedorProductos">
            <div id={producto.id} className="productoDetalles">
            <h2 className="productoNombre">{producto.descripcion}</h2>
            <img src={producto.imagen} alt={producto.alt} className="productoImagen" />
            <p className="productoDescripcion">{producto.descripcion}</p>
            <p className="productoPrecio"><strong>Precio:</strong> ${producto.precio}</p>
            <p className="productoCategoria"><strong>Categoría:</strong> {producto.categoria}</p>
            </div>
            <div className="ContenedorDescripcionExtendida">
            <p>{producto.descripcionExtendidad}</p>
            </div>
            <ItemCount
            stock={producto.stock}
            initial={1}
            onAdd={handleOnAdd}
            />
            </div>
        );
    };

export default ItemDetailContainer;
