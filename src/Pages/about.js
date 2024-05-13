
import { Logininfo } from "../context/context"
import { UseSelector, useSelector } from "react-redux"
export function About(){
    const data=useSelector((state)=>{
        return (
            state.inputs
        )
        
    })
    return(
        <div>
        <h2>about</h2>
        <p>emaiil is:{data.email}</p>
        <p>password is:{data.password}</p>
        
        </div>
    )
}