import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="estilosContenedorFooter">
                <div className="estilosNavFooter">
                    <nav>
                        <Link>Acerca de Nosotros</Link>
                        <Link>Preguntas Frecuentes</Link>
                        <Link>Sucursales</Link>
                        <Link>Terminos y condiciones</Link>
                        <Link>Politica de cambios</Link>
                        <Link>Defensa al consumidor</Link>
                        <Link>Politica de envios</Link>
                        <Link>Retiro en sucursal</Link>
                    </nav>
                </div>
                <div className="estilosContenedorExtras">
                    <div className="estilosBotonVersion">
                        <p className="estilosExtrasFooter">Version 1.0</p>
                    </div>
                    <div>
                        <p className="estilosExtrasFooter">Copyright © 2024 blancoahorro. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;