import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "../../Pages/home"
import { About } from "../../Pages/about"
import { Layout } from "../Router/Layout/layout"
import { Path } from "../Constant/routerPath"
import { Login } from "../../Pages/Loginpgae/loginpage"
import { Defaultpage } from "../../Pages/Homepage"
import { useSelector } from "react-redux";
import { Error404 } from "../../Pages/error404"
export function  Router (){
  const loginInfo=useSelector((state)=>{
    return state.inputs})
    const router= (loginInfo!=='')?
    createBrowserRouter([
            {path:'/',
        element:<Layout/>,
        children:[
            {
                path:Path.home,
                element:<Home/>
            },
            {
                path:Path.about,
                element:<About/>
            },
          ]
        },{
            path:'*',
            element:<Error404/>
        }
        ]):
        createBrowserRouter([
            {path:'/',element:<Defaultpage/>},
            {path:'/login',element:<Login/>},
        {
            path:'*',
            element:<Error404/>
        }
        ])
    
return (
    <RouterProvider router={router}/>
)
}