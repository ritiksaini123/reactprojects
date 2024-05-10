import { useReducer } from "react"
const initialState=0
const reducer=(state,action)=>{
    console.log(state,action)
    switch(action.type){
        case 'increment':
        return state+1

        case 'decrement':
            return state-1
        default:
            return state    
    
    }
}
export function Blog(){
 const [state,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
        <h2>counter</h2>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        </div>

    )
}