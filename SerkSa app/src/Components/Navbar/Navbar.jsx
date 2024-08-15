import { color } from '@cloudinary/url-gen/qualifiers/background'
import styles from './Navbar.module.css'
import React , {useState} from "react"
import Serksa from '../../assets/icon/logo1.svg'
import { IoMenuSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { FaHome,FaHandHoldingUsd,FaQuestionCircle ,FaProjectDiagram} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import MediaQuery from 'react-responsive';
import Signup from "../../pages/SignUp"
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
function Navbar(){
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        setClick(!click)
    };
    const linkList = ["Home", "Our services" , "About us", "Our work"]
    const link = ["/", "signup","/","ss"]
    click?document.body.style.overflow="hidden":document.body.style.overflow ="auto";
    return (
            <>
                <MediaQuery maxWidth={1023}>
                    <div className={styles.Navbar}>
                            <motion.div  transition={{delay:0.5}} initial = {{marginTop: 0}}animate ={{marginTop: 0}} className={styles.SerksaLogo}>
                                <img src={Serksa} style ={{width:"60px" ,height:"58px"}}alt="" />
                                <h4 className ={styles.SerkSaText}>SERKSA</h4>
                            </motion.div>
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
                       <div className={styles.menuDetail}>
                            {
                                linkList.map((value)=>{
                                    return(
                                        <Link to="/">{value}</Link>
                                    )
                                })
                            }
                       </div>
                        <div className ={styles.contactButton}>
                              <button id ={styles.contact}><Link to="/signup">Contact Us</Link></button>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={1024}> 
                            <div className={styles.Navbar}>
                                <motion.div class={styles.SerksaLogo}   transition={{delay:0.5}} animate ={{marginTop: 0}}>
                                    <img src={Serksa} style ={{width:"60px" ,height:"58px"}}alt="" />
                                    <h4 className ={styles.SerkSaText}>SERKSA</h4>
                                </motion.div>
                                <div initial={{marginTop: -100}}animate={{marginTop: 0}} className={styles.Navlist} >
                                    <motion.a className={styles.NavbarI}href="" 
                                    animate={{marginTop:0}}
                                    transition={{delay:0.5}}
                                    >Home</motion.a>
                                    <motion.a className={styles.NavbarI}href="" transition={{delay:0.5}} animate={{marginTop:0}}>Our services</motion.a>
                                    <motion.a className={styles.NavbarI}href="" transition={{delay:0.5}} animate={{marginTop:0}}>About us</motion.a>
                                    <motion.a className={styles.NavbarI}href="" transition={{delay:0.5}} animate={{marginTop:0}}>Our work</motion.a>        
                                    <Link  to="/signup"><motion.h4 transition={{delay:0.5}}  animate={{marginTop:0}} className = {styles.sign}>Sign Up</motion.h4></Link>
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