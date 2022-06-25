import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { likeReducer } from './redux/likeReducers'
import { inputReducer } from './redux/inputReducer'

const rootReducer = combineReducers({
	'like': likeReducer,
	'input': inputReducer,
})
const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('root')
)
