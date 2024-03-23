import { useReducer } from 'react'

const initialState = {
	contador:0
}

const ACTION_TYPES = {
	INCREMENT:"INCREMENT",
	DECREMENT:"DECREMENT",
	RESET:"RESET"
}

const reducer = (state, action) => {
	switch(action.type) {
		case ACTION_TYPES.INCREMENT:
			return {contador: state.contador + 1}
		case ACTION_TYPES.DECREMENT:
			return {contador: state.contador - 1}
		case ACTION_TYPES.RESET:
			return {contador: initialState.contador}
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
    const reset = () => dispatch({type:"RESET"})

	return (
		<>
			<h2>Contador Reducer</h2>
			<button onClick={sumar}>+</button>
			<button onClick={reset}>0</button>
			<button onClick={restar}>-</button>
			<h3>{state.contador}</h3>
		</>
	)
}

export default Contador;