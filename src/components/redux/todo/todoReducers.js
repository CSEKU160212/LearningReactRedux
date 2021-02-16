import { ADD_TODO, CLEAR_TODO } from "./todoActionsType"


const initialState = {
    todos:[]
}

const reducers = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case CLEAR_TODO:
            return{
                ...state,
                todos: []
            }
        default: 
            return state
    }
}

export default reducers;