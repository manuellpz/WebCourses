import { useState, useReducer } from 'react'

const initialState = {
	contador:0
}

const reducer = (state, action) => {
	switch(action.type) {
		case "INCREMENT":
			return {contador: state.contador + 1}
		case "DECREMENT":
			return {contador: state.contador - 1}
		default:
			return state
	}
}


const Contador = () => {
	//const [count, setCount] = useState(0)
	const [state, dispatch] = useReducer(reducer, initialState);

    // const sumar = () => setCount(count + 1)
    // const restar = () => {
    // 	count > 0 && setCount(count - 1)
    // }
    const sumar = () => dispatch({type:"INCREMENT"})
    const restar = () => dispatch({type:"DECREMENT"})

	return (
		<>
			<h2>Contador Reducer</h2>
			<button onClick={sumar}>+</button>
			<button onClick={restar}>-</button>
			<h3>{state.contador}</h3>
		</>
	)
}

export default Contador;