import { Navigate, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import style from './index.module.css'
export function Defaultpage() {
    const navigate = useNavigate()
    function login() {
        navigate('/login')
    }
    return (
        <div className={style.container}>
            <h2>please login</h2>
            <button onClick={login}>go to login page</button>
        </div>
    )
}