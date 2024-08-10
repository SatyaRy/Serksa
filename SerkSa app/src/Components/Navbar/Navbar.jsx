import { color } from '@cloudinary/url-gen/qualifiers/background'
import styles from './Navbar.module.css'
import React , {useState} from "react"
import Serksa from '../../assets/icon/logo1.svg'
function Navbar(){
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        setClick(!click)
    }
    return (
              <div className={styles.Navbar}>
                <div class={styles.SerksaLogo}>
                    <img src={Serksa} style ={{width:"60px" ,height:"58px"}}alt="" />
                    <h4 className ={styles.SerkSaText}>SERKSA</h4>
                </div>
                <div className={styles.Navlist}>
                    <a className={styles.NavbarI} href="">Home</a>
                    <a className={styles.NavbarI} href="">Our Services</a>
                    <a className={styles.NavbarI} href="">About Us</a>
                    <a className={styles.NavbarI} href="">Our Work</a>
                    <a className={styles.Bar}>Sign Up</a>
                </div>
                <i onClick={handleClick} className={click? 'fa-solid fa-xmark': 'fa-solid fa-bars'} style={{fontSize:"1.2rem",color:"white", paddingTop:"0.2vh"}}></i>
             </div>
    )
}
export default Navbar