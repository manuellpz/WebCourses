import {ACTION_TYPES } from '../actions/contadorAction'

export const contadorInitialState = {
	contador:0
}

export const contadorReducer = (state, action) => {
	switch(action.type) {
		case ACTION_TYPES.INCREMENT:
			return {contador: state.contador + 1}
		case ACTION_TYPES.DECREMENT:
			return {contador: state.contador - 1}
		case ACTION_TYPES.RESET:
			return {contador: contadorInitialState.contador}
		default:
			return state
	}
}