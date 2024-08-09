import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import styles from "./App.module.css"
import LandingPage from "./Components/landingPage/Landing.jsx"
import './App.css'
function App() {
  return(
   <div className ={styles.container}>
     <Navbar/>
     <main className ={styles.main}>
        <div className ={styles.landing}>
            <LandingPage/>
        </div>
     </main>
   </div>
  )
}
export default App