import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const logger = store => next => action => {
  console.group()
  console.log('dispatching', action)

  const result = next(action)

  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))
