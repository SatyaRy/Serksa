import style from "../../Components/About/About.module.css"
import logo from "../../assets/icon/white.svg"
import iphone from "../../assets/icon/iphone.svg"
import iphone2 from "../../assets/icon/iphone1.svg"
import {motion, useInView} from "framer-motion"
import Wave from "react-wavify"
import MediaQuery from 'react-responsive'
import bothPhone from "../../assets/icon/bothphone.svg"
import {Link} from "react-router-dom"
export default function AboutPage(){
    const Logo = logo
    const phone = bothPhone
    return(
           <>
              <MediaQuery maxWidth={767}>
                    <div className ={style.question} >
                        <Question/>
                        <Paragraph/>
                        <Iphone/>
                        <Wavy/>
                    </div>
                </MediaQuery>
              <MediaQuery minWidth={768}>
                   <div className ={style.large}>
                        <div className={style.about}>
                            <img className ={style.phoneI}src={phone} alt="" />
                            <div className ={style.detailSection}>
                                    <Question/>
                                    <Paragraph/>
                                    <Button/>
                            </div>
                        </div>
                        <div className={style.wave}>
                          <Wavy/>
                        </div>
                   </div>
                </MediaQuery>
           </>
    )
}

function Iphone(){
    const phone = bothPhone
    const animation={
        hidden:{
           y: "50vh"
        },
        visible:{
            y: 0,
            transition:{
                duration: 0.5
            },
        }
    }
    return(
        <motion.div 
             variants={animation}
             initial="hidden"
             whileInView="visible"
             viewport={{once: true}}
            className ={style.iphone}>
                   <img src={phone} alt="" />
        </motion.div>
    )
}
function Paragraph(){
    const animation={
        hidden:{
           y: "500px"
        },
        visible:{
            y: 0,
            transition:{
                duration: 0.5
            },
        }
    }
    const desktopAnimate={
        hidden:{
            y:0
        },
        visible:{
            y: 0,
            transition:{
                duration: 0.5
            }
        }
    }
    return(
            <>
                <motion.p 
                    variants={animation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className ={style.paragraph}>SerkSa is a gamified app that transforms self-learning for high school students with structured lessons, foundational skill-building, and interactive games that keep them motivated.
                </motion.p>
            </>
    )
}
function Wavy(){
    return(
        <div className ={style.wavy}>
            <Wave  className ={style.waveI}fill="url(#linear)"
                paused={false}
                options={{
                    speed: 0.3,
                    height: 20,
                    amplitude:50,
                    points: 2
                }}>
                <defs>
                    <linearGradient id ="linear">
                        <stop offset="20%" stopColor ="#D610E8"/>
                        <stop offset="100%" stopColor ="#00ACFF"/>
                    </linearGradient>
                </defs>
            </Wave>
        </div>
    )
}
function Question(){
    const Logo = logo
    return(
            <div className = {style.section}>
                <img src={Logo} alt="" />
                <h1>What is SERKSA?</h1>
            </div>
    )
}
function Button(){
    return(
                <button className ={style.overviewButton}>See Project Overview</button>
    )
}