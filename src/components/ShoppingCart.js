import { useReducer } from "react"
import { shoppingInitialState } from "@/reducer/shoppingInitialState"
import { shoppingReducer } from "@/reducer/shoppingReducer"
import Product from "./Product"
import CartItem from "./CartItem"





const ShoppingCart = () => {
    
  const [state, dispatch] = useReducer (shoppingReducer, shoppingInitialState)
  
  const {products, cart}=state;
  
  
  const addToCart=(id)=>console.log(id)

  const delateFromCart=()=>{}
   
  const clearCart=()=>{}



  
  
  
  return (
    





    <>
   <h2>Carrito de compras</h2>
   <h3>Productos</h3>
   <div className='box grid-responsive'>
    { products.map(product => <Product key ={product.id} product={product} addToCart={addToCart}/>)



    }


   </div>
   <h3>Carrito</h3>
    <div className='box'>
     {
      
      

      
      
        cart.map(item => <CartItem key={item.id} item={item} />)
      
     }
    </div>
    <button onClick={clearCart}>Limpiar carrito</button>

   </>
  )
}

export default ShoppingCart
