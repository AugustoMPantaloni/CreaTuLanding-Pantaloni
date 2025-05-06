import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const existing = cart.find(prod => prod.id === item.id);
        if (existing) {
            const updatedCart = cart.map(prod =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    const clearCart = () => setCart([]);

    const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id));

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
