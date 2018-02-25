import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appData from './people/reducer'

export default combineReducers({
	routing: routerReducer,
	appData
})
