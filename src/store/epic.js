import { combineEpics } from 'redux-observable'
import people from './people/epic'

export default combineEpics(people)
