import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { reducer as products } from './reducers/Products-reducer'
import { reducer as cart } from './reducers/cart'

const reducers = combineReducers({
    products,
    cart
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));


export default store