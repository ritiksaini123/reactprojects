// export function About(){
//     return(
//         <h2>about</h2>
//     )
// }
import { useContext } from "react"
import { Logininfo } from "../context/context"
import { Connect } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom/client';


export function About(){
    const {email,password}=useContext(Logininfo)
    return(
        <div>
        <h2>about</h2>
        <p>emaiil is:{email}</p>
        <p>password is:{password}</p>
        </div>
    )
}
