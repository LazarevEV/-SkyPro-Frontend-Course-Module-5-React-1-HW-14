import { INPUT } from './types'

const initialState = {
    text: '',
}

export const inputReducer = (state = initialState, action) => {
    console.log('reducer>', action)

    switch (action.type) {
        case INPUT:
            return {
                ...state,
                text: action.text,
            }
        default:
            return state
    }
}
