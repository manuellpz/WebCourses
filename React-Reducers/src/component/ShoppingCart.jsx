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
  const delFromCart = (id) => {};
  const clearCart = () => {};

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
