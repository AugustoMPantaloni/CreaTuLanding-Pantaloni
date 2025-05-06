import { useCart } from "../../context/CartContext";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Cart.css";

const Cart = () => {
    const { cart, removeItem, clearCart } = useCart();

    const total = cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);

    const handleConfirmPurchase = async () => {
        const order = {
            items: cart.map((prod) => ({
                descripcion: prod.descripcion,
                precio: prod.precio,
                cantidad: prod.quantity,
            })),
            total,
            fecha: serverTimestamp(),
        };

        try {
            const docRef = await addDoc(collection(db, "ordenes"), order);
            alert(`✅ Compra registrada. ID: ${docRef.id}`);
            clearCart();
        } catch (error) {
            console.error("❌ Error al registrar la orden:", error);
            alert("Hubo un problema al registrar tu compra.");
        }
    };

    if (cart.length === 0) {
        return (
            <div className="cart-container empty">
                <p className="empty-message">🛒 El carrito está vacío.</p>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">🛒 Carrito de compras</h2>

            <ul className="cart-items">
                {cart.map((prod) => (
                    <li key={prod.id} className="cart-item">
                        <span className="item-name">{prod.descripcion}</span>
                        <p className="item-price">Precio: ${prod.precio}</p>
                        <span className="item-quantity">Cantidad: {prod.quantity}</span>
                        <p className="item-subtotal">Subtotal: ${prod.precio * prod.quantity}</p>
                        <button 
                            className="remove-btn" 
                            onClick={() => removeItem(prod.id)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>

            <div className="cart-total">
                <p>Total a pagar: <span>${total}</span></p>
            </div>

            <button className="confirm-btn" onClick={handleConfirmPurchase}>
                Confirmar compra
            </button>

            <button className="clear-cart-btn" onClick={clearCart}>
                Vaciar carrito
            </button>
        </div>
    );
};

export default Cart;

