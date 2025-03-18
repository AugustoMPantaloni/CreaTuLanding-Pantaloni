import "./cartWidget.css"
import IconoCarrito from "../../assets/carrito.png"
import { Link } from "react-router-dom"

const CartWidget = () => {
    return(
        <>
            <Link to="" className="estilosBotonCarrito">
                <img src={IconoCarrito} alt="icono carrito"/>
                <p>0</p>
            </Link>
        </>
    )
}

export default CartWidget