
import { Logininfo } from "../context/context"
import { UseSelector, useSelector } from "react-redux"
export function Home(){
    const data=useSelector((state)=>{
        return (
            state.inputs
        )
        
    })
    // {console.log(data)}
    return(
        <div>
        <h2>home</h2>
        <p>emaiil is:{data.email}</p>
        <p>password is:{data.password}</p>
        
        </div>
    )
}