import { ADD_TODO, CLEAR_TODO } from "./todoActionsType"

export const addTodo = (data)=>{
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const clearTodo = ()=>{
    return {
        type: CLEAR_TODO
    }
}
