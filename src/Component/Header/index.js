import { Link } from "react-router-dom";
import { Path } from "../../Router/Constant/routerPath";
import { useLocation } from "react-router-dom";
import style from './index.module.css'
export function Header(){
    const location = useLocation();
  const { hash, pathname, search } = location;
    const navLink=[
        {
            value:"home",path:Path.home
        },
        {
            value:"about",path:Path.about
        },
        {
            value:"blog",path:Path.blog
        },
        {
            value:"counter",path:Path.counter
        }
    ]
    return(
        <ul className={style.navBar}>

{navLink.map((item,index)=>(
    <li key={index}><Link to={item.path} style={pathname===item.path?{color:'black',background:'white'}:{color:'white'}}>{item.value}</Link></li>
)
    )}
    </ul>
    )
}