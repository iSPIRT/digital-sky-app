import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(thunk, routerMiddleware(history))
)

export default configureStore

