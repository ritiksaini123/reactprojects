
export const POST_DATA_SUCCESS='POST_DATA_SUCCESS';
export const POST_DATA_FAILURE='POST_DATA_FAILURE';
export const addtask='addtask'
export const removetask='removetask'

export const postDataSuccess=(inputs)=>{
    
    return{
            type:POST_DATA_SUCCESS,
            payload:inputs
        };
    
    };
    export const postDataFailure=(inputs)=>{
        return{
                type:POST_DATA_FAILURE,
                payload:inputs
            };
        
        };

// export const    Addtask=(task)=>{
//     return {
//         type:addtask,
//         payload:{task:task}
//     }

// }
// export const    Removetask=(id)=>{
//     return {
//         type:addtask,
//         payload:{id:id}
//     }

// }        
