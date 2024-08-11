import { color } from '@cloudinary/url-gen/qualifiers/background'
import styles from './Navbar.module.css'
import React , {useState} from "react"
import Serksa from '../../assets/icon/logo1.svg'
import { IoMenuSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { FaHome,FaHandHoldingUsd,FaQuestionCircle ,FaProjectDiagram} from "react-icons/fa";
import MediaQuery from 'react-responsive'
function Navbar(){
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        setClick(!click)
    }

    return (
            <>
                <MediaQuery maxWidth={1023}>
                    <div className={styles.Navbar}>
                            <div class={styles.SerksaLogo}>
                                <img src={Serksa} style ={{width:"60px" ,height:"58px"}}alt="" />
                                <h4 className ={styles.SerkSaText}>SERKSA</h4>
                            </div>
                            <div className ={styles.dropDown}>
                            {click?<RxCrossCircled onClick={handleClick} className={styles.menu}/>: <CiMenuBurger onClick={handleClick} className={styles.out}/> }
                            </div>
                    </div>
                    <div className ={click? styles.showMenu: styles.hideMenu}>
                       <div className ={styles.menuList}>
                           {<FaHome className={styles.sectionIcon}/>}
                           {<FaHandHoldingUsd className={styles.sectionIcon}/>}
                           {<FaQuestionCircle className={styles.sectionIcon}/>}
                           {<FaProjectDiagram className={styles.sectionIcon}/>}

                       </div>
                       <div className ={styles.menuDetail}>
                          <h4>Home</h4>
                          <h4>Our services</h4>
                          <h4>Why SERKSA</h4>
                          <h4>About Us</h4>
                       </div>
                        <div className ={styles.contactButton}>
                              <button id ={styles.contact}>Contact Us</button>
                        </div>
                    </div>

                </MediaQuery>
                <MediaQuery minWidth={1024}> 
                    <div className={styles.Navbar}>
                        <div class={styles.SerksaLogo}>
                            <img src={Serksa} style ={{width:"60px" ,height:"58px"}}alt="" />
                            <h4 className ={styles.SerkSaText}>SERKSA</h4>
                        </div>
                        <div className={styles.Navlist} >
                            <a className={styles.NavbarI}href="">Home</a>
                            <a className={styles.NavbarI} href="">Our Services</a>
                            <a className={styles.NavbarI} href="">About Us</a>
                            <a className={styles.NavbarI} href="">Our Work</a>
                            <a className={styles.Bar}>Sign Up</a>
                            <div className={styles.mainButton}>
                                <button className ={styles.contactButton}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
             </>
            )
}
export default Navbar