import { useReducer } from 'react'
import {contadorReducer, contadorInitialState} from '../reducers/contadorReducer'


const ContadorMejorado = () => {
	
	const [state, dispatch] = useReducer(contadorReducer, contadorInitialState);

    const sumar = () => dispatch({type:"INCREMENT"})
    const restar = () => dispatch({type:"DECREMENT"})
    const reset = () => dispatch({type:"RESET"})

	return (
		<>
			<h2>Contador Mejorado Reducer</h2>
			<button onClick={sumar}>+</button>
			<button onClick={reset}>0</button>
			<button onClick={restar}>-</button>
			<h3>{state.contador}</h3>
		</>
	)
}

export default ContadorMejorado;