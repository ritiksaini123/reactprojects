import { useState, createContext } from 'react'
import style from './index.module.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseDispatch,useDispatch,useSelector } from "react-redux";
import { POST_DATA_SUCCESS } from '../../Redux/inputAction';

export function Login() {
const dispatch=useDispatch()
    const navigate = useNavigate()
    const defaultInfo = { email: "admin@mail.com", password: '123456' }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [input, setInput] = useState('')
    const [passError, setPassError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    function controllInput() {
        if (email === '' || email.trim() === '') {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
        if (password === '' || password.trim() === '') {
            setPassError(true)
        }
        else {
            setPassError(false)
        }
        if(email && password){
        setInput({ email, password })
        if (defaultInfo['email'] === email && defaultInfo['password'] === password) {

            dispatch({type:POST_DATA_SUCCESS,payload:{email,password}})
            navigate('/home')

        }
        else {

            toast.error('invalid detail')
        }
    }
    }
    return (
        <div className={style.container}>
            <h1>Login</h1>
            <div>
                <p>Email</p>
                <input type='email' placeholder='enter email' onChange={(e) => setEmail(e.target.value)}></input>
                {emailError ? <span>Email should not be empty</span> : ''}
            </div>
            <div>
                <p>Password</p>
                <input type='password' placeholder='enter password' onChange={(e) => setPassword(e.target.value)}></input>
                {passError ? <span>password should not be empty</span> : ''}
            </div>
            <button onClick={controllInput}>Login</button>
            {/* {console.log(input)} */}
            <ToastContainer />
        </div>
    )
}