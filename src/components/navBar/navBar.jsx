import "./navBar.css"
import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"

const NavBar = () => {
    return(
        <div className="estilosContenedorNavBar">
            <Link to="/">
                <img className="estilosLogo" src={Logo}/>
            </Link>
            <nav>
                <Link className="estilosBoton" to=""> Nuevo Ingresos </Link>
                <Link to="/categoria/Bazar">Bazar</Link>
                <Link to="/categoria/Blanco">Blanco</Link>
                <Link to="/categoria/Tecnologia">Tecnología</Link>
                <Link to="/categoria/Ferreteria">Ferretería</Link>
                <Link className="estilosBoton" to=""> Ofertas </Link>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar