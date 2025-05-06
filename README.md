# 🛒 E-commerce React - Proyecto Final

Este proyecto es un simulador de tienda online desarrollado con **React** como parte del curso de JavaScript en Coderhouse. Permite a los usuarios visualizar productos, agregar items al carrito, confirmar compras y registrar la orden en **Firebase Firestore**.

## 📌 Funcionalidades principales

- Visualización de productos con sus detalles.
- Sistema de carrito de compras.
- Cálculo automático del total de la compra.
- Confirmación de compra con guardado de la orden en Firebase.
- Interfaz moderna, responsive y funcional.

## 🛠️ Tecnologías utilizadas

- **React JS**: biblioteca principal para el desarrollo de la interfaz.
- **React Context**: manejo global del estado del carrito.
- **Firebase Firestore**: base de datos en la nube para guardar las órdenes.
- **CSS personalizado**: estilos para mejorar la experiencia visual del usuario.

## ⚙️ Estructura del proyecto

- `src/components/ItemDetail`: muestra los detalles de un producto seleccionado.
- `src/components/Cart`: contiene el listado de productos agregados al carrito y permite confirmar o vaciar la compra.
- `src/context/CartContext.js`: contexto global que gestiona el carrito de compras.
- `firebase/firestore.js`: configuración de conexión a Firebase.

## 🧪 Flujo de usuario

1. El usuario navega por los productos disponibles.
2. Al hacer clic en un producto, accede a sus detalles y puede agregarlo al carrito.
3. En el carrito puede ver los productos seleccionados, cantidades y totales.
4. Al confirmar la compra, se genera un documento en Firebase con los detalles del pedido.

