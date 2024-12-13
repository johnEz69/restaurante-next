import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const JSON_SERVER_URL = "http://localhost:5000";

// Crear el contexto del carrito
const CartContext = createContext();

// Custom hook para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, cartResponse] = await Promise.all([
          axios.get(`${JSON_SERVER_URL}/product`),
          axios.get(`${JSON_SERVER_URL}/cart`),
        ]);

        setProducts(productsResponse.data);
        setCart(cartResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  // Agregar producto al carrito
  const addToCart = async (product) => {
    try {
      const foundProduct = cart.find((item) => item.id === product.id);

      if (foundProduct) {
        // Actualizar en la base de datos
        await axios.put(`${JSON_SERVER_URL}/cart/${foundProduct.id}`, {
          ...foundProduct,
          quantity: foundProduct.quantity + 1,
        });
      } else {
        // Añadir nuevo producto
        await axios.post(`${JSON_SERVER_URL}/cart`, {
          ...product,
          quantity: 1,
        });
      }

      // Refrescar todo el carrito desde la base de datos
      const cartResponse = await axios.get(`${JSON_SERVER_URL}/cart`);
      setCart(cartResponse.data);
    } catch (err) {
      console.error("Error adding to cart:", err);
      setError("Failed to add product to cart");
    }
  };

  // Eliminar producto del carrito
  const removeItemFromCart = async (productId) => {
    try {
      // Eliminar de la base de datos
      await axios.delete(`${JSON_SERVER_URL}/cart/${productId}`);

      // Refrescar todo el carrito desde la base de datos
      const cartResponse = await axios.get(`${JSON_SERVER_URL}/cart`);
      setCart(cartResponse.data);
    } catch (err) {
      console.error("Error removing from cart:", err);
      setError("Failed to remove product from cart");
    }
  };

  // Reducir la cantidad de un producto en el carrito
  const removeOneItemFromCart = async (product) => {
    try {
      const foundProduct = cart.find((item) => item.id === product.id);

      if (foundProduct) {
        if (foundProduct.quantity > 1) {
          // Si hay más de un producto, reducir la cantidad
          await axios.put(`${JSON_SERVER_URL}/cart/${foundProduct.id}`, {
            ...foundProduct,
            quantity: foundProduct.quantity - 1,
          });
        } else {
          // Si solo hay un producto, eliminarlo completamente
          await axios.delete(`${JSON_SERVER_URL}/cart/${foundProduct.id}`);
        }

        // Refrescar todo el carrito desde la base de datos
        const cartResponse = await axios.get(`${JSON_SERVER_URL}/cart`);
        setCart(cartResponse.data);
      }
    } catch (err) {
      console.error("Error removing item from cart:", err);
      setError("Failed to remove item from cart");
    }
  };

// Vaciar completamente el carrito
const clearCart = async () => {
  try {
    // Eliminar todos los productos del carrito
    await Promise.all(
      cart.map((item) => axios.delete(`${JSON_SERVER_URL}/cart/${item.id}`))
    );

    // Limpiar el estado del carrito
    setCart([]);
  } catch (err) {
    console.error("Error clearing cart:", err);
    setError("Failed to clear cart");
  }
};

  // Calcular total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Valores y funciones a compartir
  const value = {
    products,
    cart,
    error,
    addToCart,
    removeItemFromCart,
    removeOneItemFromCart,
    calculateTotal,
    clearCart,
    setError,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
