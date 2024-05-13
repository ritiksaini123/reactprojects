import { Link } from "react-router-dom";
import { Path } from "../../Router/Constant/routerPath";
import { useLocation } from "react-router-dom";
import style from './index.module.css'
import { POST_DATA_FAILURE } from "../../Redux/inputAction";
import { UseDispatch, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export function Header(){
    const location = useLocation();
const dispatch=useDispatch()
const navigate=useNavigate()
  const { hash, pathname, search } = location;
    const navLink=[
        {
            value:"home",path:Path.home
        },
        {
            value:"about",path:Path.about
        },
    ]
    function logout(){
        dispatch({type:POST_DATA_FAILURE,payload:''})
            navigate('/login')
    }
    return(
        <div className={style.container}>
        <ul className={style.navBar}>

{navLink.map((item,index)=>(
    <li key={index}><Link to={item.path} style={pathname===item.path?{color:'black',background:'white'}:{color:'white'}}>{item.value}</Link></li>
)
    )}
    </ul>
    <button onClick={logout}>Logout</button>
    </div>
    )
}