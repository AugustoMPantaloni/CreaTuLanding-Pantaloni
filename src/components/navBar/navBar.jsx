import "./navBar.css"
import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"

const NavBar = () => {
    return(
        <div className="estilosContenedorNavBar">
            <img className="estilosLogo" src={Logo}/>
            <nav>
                <Link className="estilosBoton" to=""> Nuevo Ingresos </Link>
                <Link to=""> Bazar </Link>
                <Link to=""> Blanco </Link>
                <Link to=""> Tecnologia </Link>
                <Link to=""> Ferreteria </Link>
                <Link className="estilosBoton" to=""> Ofertas </Link>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar