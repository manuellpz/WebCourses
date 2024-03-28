import { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { TYPES } from "../actions/shoppingAction";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (args) => {
    const {id,del} = args
    
    if(del === "one") {
      dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload: id})
    }else if(del === "all") {
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
    } 
  };
  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((p) => (
          <ProductItem data={p} addToCart={addToCart} key={p.id} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem data={item} key={index} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
