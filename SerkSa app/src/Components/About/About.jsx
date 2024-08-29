import style from "../../Components/About/About.module.css"
import logo from "../../assets/icon/white.svg"
import {motion, useInView} from "framer-motion"
import Wave from "react-wavify"
import MediaQuery from 'react-responsive'
import bothPhone from "../../assets/icon/bothphone.svg"
import LazyLoad from "react-lazy-load"
import CloudImage from "../../model/Image.jsx"
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
                          <LazyLoad onContentVisible={()=>{console.log("yes")}}>
                            <motion.img 
                                loading="lazy"
                                initial={{x:-100}}
                                whileInView={{x:0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className ={style.phoneI} src={phone} alt="" />
                          </LazyLoad>
                        
                            <div className ={style.detailSection}>
                                    <Question/>
                                    <motion.p 
                                    initial={{y:300}}
                                    whileInView={{y:0}}
                                    transition={{duration: 0.5}}
                                    viewport={{once: true}}
                                    className ={style.paragraph}>SerkSa is a gamified app that transforms self-learning for high school students with structured lessons, foundational skill-building, and interactive games that keep them motivated.</motion.p>
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
           y: 100
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
            initial ="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className ={style.iphone}>
            <CloudImage imageName={"SerkSa/Iphone"}/>
        </motion.div>
    )
}
function Paragraph(){
    const animation={
        hidden:{
           x: -100
        },
        visible:{
            x: 0,
            transition:{
                duration: 0.5
            },
        }
    }
    return(
            
                <motion.p 
                variants={animation}
                initial="hidden"
                viewport={{once: true}}
                whileInView="visible"
                className ={style.paragraph}>SerkSa is a gamified app that transforms self-learning for high school students with structured lessons, foundational skill-building, and interactive games that keep them motivated.</motion.p>
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
                <img src={Logo} alt="" loading="lazy" />
                <h1 id ={style.headText}>What is SERKSA?</h1>
            </div>
    )
}
function Button(){
    return(
                <button className ={style.overviewButton}>See Project Overview</button>
    )
}