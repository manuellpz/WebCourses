const ProductItem = ({data, addToCart}) => {
	const {id, name, price} = data;

	return (
		<div style={{padding:"1rem", marginBottom:"1rem", border:"thin solid silver", borderRadius:"8px"}}>
			<h4>{name}</h4>
			<h5>${price}.00</h5>
			<button onClick={() => addToCart(id)}>Add Cart</button>
		</div>
	)
}

export default ProductItem;