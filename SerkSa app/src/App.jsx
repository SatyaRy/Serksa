import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import styles from "./App.module.css"
import './App.css'
function App() {
  return(
   <div className ={styles.container}>
     <Navbar/>
   </div>
  )
}
export default App