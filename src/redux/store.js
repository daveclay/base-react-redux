import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer, initialState } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import Actions from "./actions"

const funk = store => next => action => {
  console.log('XXX, dispatching', action)
  let result = next(action)
  console.log('XXX, next state', store.getState())
  return result
}

const middlewareEnhancer = applyMiddleware(funk, thunkMiddleware)
const store = createStore(rootReducer, initialState, composeWithDevTools(middlewareEnhancer))

store.dispatch(Actions.init());

export default store
