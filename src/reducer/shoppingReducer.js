import { TYPES } from "@/actions/actions";
import { shoppingInitialState } from "./shoppingInitialState";

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find(
        (product) => product.id === action.payload
      ); // Suponiendo que cada producto tiene un id único

      if (!newItem) return state;
      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemInCart.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }]
          }
    }
    case TYPES.REMOVE_ON_ITEM: {
      const itemToDelete = state.cart.find( item => item.id === action.payload );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map( item => item.id === itemToDelete.id
                ? {
                  ...item,
                   quantity: item.quantity - 1
                  }
                : item)
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== itemToDelete.id),
          }
    }

    case TYPES.REMOVE_ALL_ITEMS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      }
    }

    case TYPES.CLEAR_CART: {
      return shoppingInitialState
    }

    default:
      return state;
  }
}
