import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import styles from "./App.module.css"
import LandingPage from "./Components/LandingPage/Landing.jsx"
import AboutPage from "./Components/About/About.jsx"
import FeaturePage from "./Components/FeaturePage/Feature.jsx"
import KeyPage from "./Components/KeyPage/KeyPage.jsx"
import './App.css'
function App() {
  return(
                  <div className ={styles.container}>
                        <div className ={styles.nav}><Navbar/></div>
                          <main className ={styles.main}>
                                <div id ="About"className ={styles.landing}><LandingPage/></div>
                                <div className ={styles.aboutPage}><AboutPage/></div>
                                <div className ={styles.featurePage}><FeaturePage/></div>
                                <div className ={styles.keyPage}><KeyPage/></div>
                        </main>
                  </div>
  )
}
export default App