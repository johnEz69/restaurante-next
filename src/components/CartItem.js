import React from 'react'

const cartItem= ({item, delateOneItem, deleteAllItem}) => {

  const {name, price, id, quantity}= item;


  return (
    <div className='cart-item'>
        <h4>{name}</h4>
        <h5>$ {price} x ${quantity} = ${price * quantity}</h5>
        <button onClick={()=>delateOneItem(id)}>Eliminar uno</button>
        <button onClick={()=>deleteAllItem(id)}>Eliminar todos</button>
    </div>
  )
}

export default cartItem
