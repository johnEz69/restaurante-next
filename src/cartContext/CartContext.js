import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const JSON_SERVER_URL = 'http://localhost:5000';

// Crear el contexto del carrito
const CartContext = createContext();

// Custom hook para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
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
          axios.get(`${JSON_SERVER_URL}/cart`)
        ]);

        setProducts(productsResponse.data);
        setCart(cartResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  // Agregar producto al carrito
  const addToCart = async (product) => {
    try {
      const foundProduct = cart.find(item => item.id === product.id);
  
      if (foundProduct) {
        // Corrección: Usar POST o PUT correctamente
        await axios.put(`${JSON_SERVER_URL}/cart/${foundProduct.id}`, 
          {
            ...foundProduct,
            quantity: foundProduct.quantity + 1
          }
        );
        
        // Actualizar estado local
        setCart(prevCart => 
          prevCart.map(item => 
            item.id === product.id 
              ? {...item, quantity: item.quantity + 1}
              : item
          )
        );
      } else {
        // Corrección: Usar POST para añadir nuevo producto
        const newCartItem = { ...product, quantity: 1 };
        const response = await axios.post(`${JSON_SERVER_URL}/cart`, newCartItem);
        
        // Actualizar estado local
        setCart(prevCart => [...prevCart, response.data]);
      }
    } catch (err) {
      console.error('Error adding to cart:', err);
      setError('Failed to add product to cart');
    }
  };


  // Actualizar cantidad de producto en el carrito
  const updateQuantity = async (productId, newQuantity) => {
    try {
      const updatedCart = cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      ).filter(item => item.quantity > 0);

      await axios.put(`${JSON_SERVER_URL}/cart`, updatedCart);
      setCart(updatedCart);
    } catch (err) {
      console.error('Error updating quantity:', err);
      setError('Failed to update product quantity');
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = async (productId) => {
    try {
      const updatedCart = cart.filter(item => item.id !== productId);
      
      await axios.put(`${JSON_SERVER_URL}/cart`, updatedCart);
      setCart(updatedCart);
    } catch (err) {
      console.error('Error removing from cart:', err);
      setError('Failed to remove product from cart');
    }
  };

  

  // Calcular total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Valores y funciones a compartir
  const value = {
    products,
    cart,
    error,
    addToCart,
    updateQuantity,
    removeFromCart,
    calculateTotal,
    setError
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};