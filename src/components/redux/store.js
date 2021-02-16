import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from './rootReducers'
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;