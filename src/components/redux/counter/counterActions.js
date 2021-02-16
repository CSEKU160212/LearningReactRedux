import { DECREMENT, INCREMENT, RESET } from "./counterActionsType"


export const increment = (userinput)=>{
    return {
        type: INCREMENT,
        payload: userinput
    }
}


export const decrement = ()=>{
    return {
        type: DECREMENT,
        payload: 1
    }
}


export const reset = ()=>{
    return {
        type: RESET
    }
}