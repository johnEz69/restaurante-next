import { useReducer } from "react"



const ShoppingCart = () => {
    const [state, dispatch] = useReducer (shoppingReducer, shoppingInitialState)
  return (
    





    <>
   <h2>Carrito de compras</h2>
   <h3>Productos</h3>
   <div className='box grid-responsive'></div>
   <h3>Carrito</h3>
    <div className='box'></div>
    <button>Limpiar carrito</button>

   </>
  )
}

export default ShoppingCart
