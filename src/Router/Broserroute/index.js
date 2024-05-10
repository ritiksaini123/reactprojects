import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "../../Pages/home"
import { About } from "../../Pages/about"
import { Blog } from "../../Pages/blog"
import { Layout } from "../Router/Layout/layout"
import { Path } from "../Constant/routerPath"
import { Login } from "../../Pages/Loginpgae/loginpage"
import { Counter } from "../../Pages/counter"
import { Logininfo } from "../../context/context"
import { useLocation } from "react-router-dom"
import { useState } from "react"
export function  Router (){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
const router=createBrowserRouter([
  {path:Path.login,
    element:<Login/>
  },
  
        { path:"/",
    element:<Layout/>,
    
    children:[
     
      {path:Path.home,
      element:<Home/>
    },
    {path:Path.about,
        element:<About/>
      },
      {path:Path.blog,
        element:<Blog/>
      },
      {path:Path.counter,
        element:<Counter/>
      }
]
}
    
])
return (
    <RouterProvider router={router}/>

)
}