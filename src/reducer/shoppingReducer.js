import { TYPES } from "@/actions/actions";

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find(product => product.id === action.payload); // Suponiendo que cada producto tiene un id único
      if (!newItem) return state;

      // No modificamos directamente state.products
      return {
        ...state,
        cart: [...state.cart, newItem]
      };
    }

    case TYPES.REMOVE_ONE_ITEM: {
      // Asumiendo que action.payload es el id del producto a remover
      const updatedCart = state.cart.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: updatedCart
      };
    }

    case TYPES.REMOVE_ALL_ITEMS: {
      return {
        ...state,
        cart: []
      };
    }

    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: []
      };
    }

    default:
      return state;
  }
}
