import React from "react";
import { useCart } from "@/cartContext/CartContext"; // Adjust the import path as needed
import Image from "next/image";

const FondoCarrito = () => {
  const {
    cart,
    removeItemFromCart,
    removeOneItemFromCart,
    addToCart,
    clearCart,
    calculateTotal,
  } = useCart();

  return (
    <>
      <section className="seccion-img">
        <div className="cart-container">
          <h2 className="cart-title">Your Cart</h2>

          {cart.length === 0 ? (
            <div className="empty-cart">Your cart is empty</div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    {/* Product Image */}
                    <div className="item-details">
                      <Image
                        src={item.image || "/placeholder-image.png"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="item-image"
                      />

                      {/* Product Details */}
                      <div className="product-info">
                        <h3 className="product-name">{item.name}</h3>
                        <p className="product-price">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Control */}
                    <div className="quantity-control">
                      <button
                        onClick={() => removeOneItemFromCart(item)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItemFromCart(item.id)}
                        className="remove-btn"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total and Checkout */}
              <div className="cart-summary">
                <div className="cart-total">
                  Total: ${calculateTotal().toFixed(2)}
                </div>
                <button className="confirm-btn" onClick={() => clearCart()}>Limpiar carrito</button>
                <button className="confirm-btn" onClick={() => confirm(`Desea confirmar su compra de ${calculateTotal().toFixed(2)}`)}>Confirm Purchase</button>
              </div>
            </>
          )}
        </div>
      </section>

      <style jsx>{`
        .seccion-img {
          background-image: url("/images/fondoHome.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          width: 100vw;
          height: 92vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cart-container {
          background-color: rgb(0 0 0);
          width: 95%;
          max-width: 800px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 30px;
        }

        .cart-title {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .empty-cart {
          text-align: center;
          color: #666;
          padding: 20px;
        }

        .cart-items {
          max-height: 400px;
          overflow-y: auto;
          border-radius: 1rem;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding: 15px 0;
          transition: background-color 0.3s ease;
          background-color: #ca0000;
        }

        .item-details {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .item-image {
          border-radius: 8px;
          object-fit: cover;
        }

        .product-info {
          display: flex;
          flex-direction: column;
        }

        .product-name {
          font-weight: 600;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quantity-btn {
          background-color: #f0f0f0;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .quantity-btn:hover {
          background-color: #e0e0e0;
        }

        .quantity {
          margin: 0 10px;
        }

        .remove-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }

        .remove-btn:hover {
          color: #ff4444;
        }

        .cart-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .cart-total {
          font-size: 1.4rem;
          font-weight: bold;
        }

        .confirm-btn {
          background-color: #ca0000;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        // .confirm-btn:hover {
        //   background-color: #45a049;
        // }
      `}</style>
    </>
  );
};

export default FondoCarrito;
