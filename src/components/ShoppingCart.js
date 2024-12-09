import { useReducer } from "react"
import { shoppingInitialState } from "@/reducer/shoppingInitialState"
import { shoppingReducer } from "@/reducer/shoppingReducer"
import Product from "./Product"
import CartItem from "./CartItem"





const ShoppingCart = () => {
    
  const [state, dispatch] = useReducer (shoppingReducer, shoppingInitialState)
  
  const {products, cart}=state;
  
  
  const addToCart=(id)=>dispatch ({type: "ADD_TO_CART", payload:id})

  const delateFromCart=(id)=>dispatch ({type: "REMOVE_ONE_ITEM", payload:id})
   
  const clearCart=()=>dispatch({type:"CLEAR_CART"})



  
  
  
  return (

    <>
   <h2>Carrito de compras</h2>
   <h3>Productos</h3>
   <div className='box grid-responsive'>
    { products.map((product) =>(
     <Product key ={product.id} product={product} addToCart={addToCart}/>

    ))}


   </div>
   <h3>Carrito</h3>
    <div className='box'>
     { cart.map((item, i)=>(
      <CartItem key={i} item={item} deleteFromCart={delateFromCart}/>
     ))
      
     }
    </div>
    <button onClick={clearCart}>Limpiar carrito</button>

   </>
  )
}

export default ShoppingCart
