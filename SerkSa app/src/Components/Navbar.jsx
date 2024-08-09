import { color } from '@cloudinary/url-gen/qualifiers/background'
import styles from './Navbar.module.css'
import React , {useState} from "react"
import Logo from "../assets/icon/Logo.svg"
function Navbar(){
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        setClick(!click)
    }
    return (
              <div className={styles.Navbar}>
                <div class={styles.SerksaLogo}>
                    <img src={Logo} style ={{width:"60px"}}alt="" />
                    <h4 className ={styles.SerkSaText}>SERKSA</h4>
                </div>
                <div className={styles.Navlist}>
                    <a className={styles.NavbarI} href="">Home</a>
                    <a className={styles.NavbarI} href="">Our Services</a>
                    <a className={styles.NavbarI} href="">About Us</a>
                    <a className={styles.NavbarI} href="">Our Work</a>
                    <a className={styles.Bar}>Sign Up</a>
                </div>
                <i onClick={handleClick} className={click? 'fa-solid fa-xmark': 'fa-solid fa-bars'} style={{fontSize:"2rem",color:"white"}}></i>
             </div>
    )
}
export default Navbar