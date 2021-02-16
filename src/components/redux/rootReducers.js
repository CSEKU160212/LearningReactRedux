import { combineReducers } from "redux";
import CounterReducers from './counter/counterReducers';
import TodoReducers from './todo/todoReducers'

const rootReducers = combineReducers({
    counter: CounterReducers,
    todo: TodoReducers
})
export default rootReducers;