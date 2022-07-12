import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension"

import { allProductReducer, cartReducer } from './reducers';

const reducer = combineReducers({
    allProducts: allProductReducer,
    cart: cartReducer,

})


const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;