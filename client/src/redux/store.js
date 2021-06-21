import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import wishlistReducer from './wishlist/wishlistReducer'
import showallReducer from './showall/showallReducer'

const Store = createStore(combineReducers({
    wishlist: wishlistReducer, showall: showallReducer
}), composeWithDevTools(applyMiddleware(logger, thunk)))

export default Store