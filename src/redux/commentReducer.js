import { ADD_COMMENT } from './types'
import { DELETE_COMMENT } from './types'
import { UPDATE_COMMENT } from './types'

import generateUUID from '../additional/generateUUID.js'

const initialState = {
    comments: [
		{
			uuid: generateUUID(),
			text: 'TEST COMMENT 1',
		},
		{
			uuid: generateUUID(),
			text: 'TEST COMMENT 2',
		},
	],
}

export const commentReducer = (state = initialState, action) => {
    console.log('> commentReducer >', action)

    switch (action.type) {
		case ADD_COMMENT:
			return {
				...state,
				comments: [...state.comments, {uuid: action.newCommentUUID, text: action.newComment}],
			}
		case DELETE_COMMENT:
			return {
				...state,
				// comments: [...state.comments.slice(0, action.idx), ...state.comments.slice(action.idx + 1)]
				comments: state.comments.filter(comment => comment.uuid !== action.uuid),
			}
		case UPDATE_COMMENT:
			return {
				...state,
				comments: state.comments.map(comment => (comment.uuid === action.uuid ? {uuid: comment.uuid, text: action.text} : comment))
				// comments: state.comments.map(comment => (comment.text))
			}
		default:
			return state
	}
}