import { Outlet } from "react-router-dom";
import { Header } from "../../../Component/Header/index";

   
import { Logininfo } from "../../../context/context";
    
export function Layout(){
   
    return(
        <div>
    
    <div>
    <Header/>
    <Outlet/></div>
    </div>
    )
}