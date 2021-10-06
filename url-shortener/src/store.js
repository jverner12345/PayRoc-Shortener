import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import shortenerReducer from './reducers/shortener.js';
//add reducers here
const reducers = combineReducers({
    shortenerReducer
});
// use applyMiddleware to add the thunk middleware to the store
const store = createStore(reducers, applyMiddleware(thunk));
export default store;