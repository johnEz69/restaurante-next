import { useReducer } from "react";
import { shoppingInitialState } from "@/reducer/shoppingInitialState";
import { shoppingReducer } from "@/reducer/shoppingReducer";
import Product from "./product";
import CartItem from "./CartItem";
import { TYPES } from "@/actions/actions";

const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const delateOneItem = (id) => dispatch({ type: TYPES.REMOVE_ON_ITEM, payload: id });

  const deleteAllItem = (id) => dispatch({ type: TYPES.REMOVE_ALL_ITEMS , payload: id });

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, i) => (
          <CartItem key={i} item={item} delateOneItem = {delateOneItem} deleteAllItem = {deleteAllItem}/>
        ))}
      </div>
      <button onClick={clearCart}>Limpiar carrito</button>
    </>
  );
};

export default ShoppingCart;
