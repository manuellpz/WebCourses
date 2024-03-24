import { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer"
import ProductItem from "./ProductItem"

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const {products, cart} = state;

    const addToCart = (id) => {}
    const delFromCart = () => {}
    const clearCart = () => {}

    return (
        <div>
			<h2>Shopping Cart</h2>
			<h3>Productos</h3>
			<article className="box grid-responsive">
				{
					products.map(p => <ProductItem data={p} addToCart={addToCart} key={p.id}/>)
				}
			</article>
			<h3>Carrito</h3>
			<article className="box">
				
			</article>
		</div>
    )
}

export default ShoppingCart;