import { useState } from "react"
import "./ItemCount.css"


const ItemCount = ({stock, initial= 1, onAdd}) =>{
    const [contador, setContador] = useState(0);
    const [agregado, setAgregado] = useState(false);
    const incrementar = () =>{
        if(contador < stock){
            setContador(contador + 1);
        }
    }
    
    const decrementar = () =>{
        if(contador > 1){
            setContador (contador - 1);
        }
    } 

    const handleAddToCart = () =>{
        setAgregado(true);
        onAdd(contador);
    }

    if(stock === 0){
        return <p className="sinStock">Sin stock disponible</p>;
    }

    return (
    <div className="containerItemCount">
        {!agregado ? (
        <>
            <button className="buttonItemCount" onClick={decrementar}> - </button>
            <p className="contador">{contador}</p>
            <button className="buttonItemCount" onClick={incrementar}> + </button>
            <button className="buttonAddToCart" onClick={handleAddToCart}>
            Agregar al carrito
            </button>
        </>
        ) : (
        <p className="producto-agregado">¡Producto agregado al carrito!</p>
        )}
    </div>
    );
};

export default ItemCount;