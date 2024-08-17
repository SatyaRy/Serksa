import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Signup from './pages/SignUp.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Overview from "./Components/FeaturePage/Feature.jsx"
import About from "./Components/About/About.jsx"
const router = createBrowserRouter([
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/",
    element: <App/>,
    errorElement: <Signup/>,
    children:[
        {
          path: "/what-is-SerkSa?",
          element: <About/>
        }
    ]
  },
  {
    path: "/overview",
    element: <Overview/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
