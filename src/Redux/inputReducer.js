import { POST_DATA_SUCCESS,POST_DATA_FAILURE } from "./inputAction"
  const initialState={
    inputs:[],
    error:null
 }
 export const inputReducer=(state=initialState,action)=>{
    switch(action.type){
            case POST_DATA_SUCCESS:
            return {
                ...state,
                inputs:action.payload
                
            }
            case POST_DATA_FAILURE:
            return {
                ...state,
                inputs:action.payload
            }
            default:
                return state;
    }

 }