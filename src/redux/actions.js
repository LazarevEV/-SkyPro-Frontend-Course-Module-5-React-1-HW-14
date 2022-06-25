import { INCREMENT, DECREMENT, INPUT } from './types'

export function onIncrement() {
	return {
		type: INCREMENT,
	}
}

export function onDecrement() {
	return {
		type: DECREMENT,
	}
}

export function onInput(text) {
	return {
		type: INPUT,
		text: text,
	}
}
