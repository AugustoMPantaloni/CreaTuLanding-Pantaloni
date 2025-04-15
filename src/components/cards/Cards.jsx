// componente que crea las cards
import "./Cards.css";
import { Link } from "react-router-dom";

    const Cards = ({ id, imagen, alt, descripcion, precio, categoria, marca }) => {

    return (
        <div className="card" key={id}> 
            <img src={marca} alt ="LogoMarca" className="imagenMarca"/>
            <img src={imagen} alt={alt} className="card-img" />
            <div className="card-body">
                <p className="card-category">{categoria}</p>
                <p className="card-description">{descripcion}</p>
                <p className="card-price">${precio}</p>
                <Link to={`/detalle/${id}`} className="detalles-button">Ver detalles</Link>
            </div>
        </div>
    );
};

export default Cards;
