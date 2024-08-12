import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import styles from "./App.module.css"
import LandingPage from "./Components/LandingPage/Landing.jsx"
import AboutPage from "./Components/AboutPage/about.jsx"
import './App.css'
function App() {
  return(
   <div className ={styles.container}>
    <div className ={styles.nav}>
        <Navbar/>
    </div>
     <main className ={styles.main}>
        <div className ={styles.landing}><LandingPage/> </div>
        <div className ={styles.aboutPage}><aboutPage/> </div>
     </main>
   </div>
  )
}
export default App