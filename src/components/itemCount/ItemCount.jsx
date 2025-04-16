import { useState } from "react"
import "./ItemCount.css"

const ItemCount = () =>{
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador (contador - 1);

    return(
        <div className="containerItemCount">
            <button className="buttonItemCount" onClick={incrementar}> + </button>
            <p className="contador" > {contador} </p>
            <button className="buttonItemCount" onClick={decrementar} disabled={contador === 0}> - </button>
            <button className="buttonAddToCart"> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount;