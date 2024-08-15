import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Signup from './pages/SignUp.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Overview from "./Components/FeaturePage/Feature.jsx"
const router = createBrowserRouter([
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/",
    element: <App/>,
    errorElement: <Signup/>
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
