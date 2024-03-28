import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((p) => p.id === action.payload);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      //si ya existe el item en el carrito
      return itemInCart
        ? //Copiamos todo el estado y modificamos el carrito (internamente modificamos el valor de la propiedad quantity, solo en el item que coincida el id)
          {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }], //Si no existe el item en el carrito tomamos todo el carrito y agregamos el nuevo item (pero le adicionamos una nueva propiedad quantity con el valor de uno porque sería la primera vez que agregamos el producto)
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let product = state.cart.find((item) => item.id === action.payload);

      if(product.quantity === 1) 
        return {...state, cart: state.cart.filter(item => item.id !== action.payload)}

      else 
        return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    }
    case TYPES.CLEAR_CART: {
      return { ...state, cart: [] };
    }
    default:
      return state;
  }
}
