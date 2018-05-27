import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const defaultState = {
    btnText:"Click Me!"
}

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, logger())
  )(createStore)
  
  export default function configureStore (initialState = defaultState) {
    return createStoreWithMiddleware(rootReducer, initialState)
  }
  
  