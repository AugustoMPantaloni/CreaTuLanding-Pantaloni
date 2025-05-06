import "./cartWidget.css"
import IconoCarrito from "../../assets/carrito.png"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"


const CartWidget = () => {
    const {totalItems} = useCart()
    return(
        <>
            <Link to="/CarritoCompras" className="estilosBotonCarrito">
                <img src={IconoCarrito} alt="icono carrito"/>
                <p>{totalItems}</p>
            </Link>
        </>
    )
}

export default CartWidget