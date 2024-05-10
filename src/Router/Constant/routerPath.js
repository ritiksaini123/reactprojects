// // import {router}
import {  useSelector } from "react-redux"
const data=useSelector((state)=>{
    return (
        state.inputs
    )
    
})
// export const Path={};
// {(data.email && data.password)?
//      Path={
//     login:'/',
    
// }:path={
   
// }
// }
// import {router}
export const Path={
    login:'/',
}
if(data.email && data.password){
 Path['/']='/layout';
}