import style from "../../Components/About/About.module.css"
import {motion, useInView} from "framer-motion"
import Wave from "react-wavify"
import MediaQuery from 'react-responsive'
import {Link} from "react-router-dom"
import CloudImage from "../../model/Image.jsx"
const prototype = "https://www.figma.com/proto/H6B8cXN8wvX6HCTNBKcLGg/Serksa-Application?node-id=0-1&t=d2TYGjYXao1JiC2f-1"
export default function AboutPage(){
    return(
           <>
              <MediaQuery maxWidth={767}>
                    <div className ={style.question} >
                        <Question/>
                        <Paragraph/>
                        <div style ={{display:"flex",flexDirection:"column", gap:"60px", justifyContent:"center"}}>
                            <Button position={"center"} width={"100%"}/>
                            <Iphone/>
                        </div>
                        <Wavy/>
                    </div>
                </MediaQuery>
              <MediaQuery minWidth={768}>
                   <div className ={style.large}>
                        <div className={style.about}>
                           
                           <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:0.5}} viewport={{once:true}}>
                            <CloudImage
                                    setting={"auto"}
                                    className ={style.phoneI}
                                    imageName={"SerkSa/Iphone"} />
                           </motion.div>
                      
                            <div className ={style.detailSection}>
                                    <Question/>
                                    <motion.p 
                                    initial={{y:300}}
                                    whileInView={{y:0}}
                                    transition={{duration: 0.5}}
                                    viewport={{once: true}}
                                    className ={style.paragraph}>SerkSa is a gamified app that transforms self-learning for high school students with structured lessons, foundational skill-building, and interactive games that keep them motivated.</motion.p>
                                    <Button  position={"start"} width={"200px"}/>
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
            <CloudImage imageName={"SerkSa/Iphone"} setting={"auto"}/>
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
    return(
            <div className = {style.section}>
                <CloudImage imageName={"SerkSa/serksalogo"} setting={"auto"}/>
                <h1 id ={style.headText}>What is SERKSA?</h1>
            </div>
    )
}
function Button({position,width}){
    return(
               <Link to ={prototype} style={{width:"100%", display:"flex",justifyContent:`${position}`, paddingRight: "5vw"}}><button className ={style.overviewButton} style ={{borderRadius:"8px",width:`${width}`}}>See Our Prototype</button></Link>
    )
}

/* test
    <CloudImage
    className ={style.phoneI}
    imageName={"SerkSa/Iphone"}
  
    />


     <motion.img 
                                loading="lazy"
                                initial={{x:-100}}
                                whileInView={{x:0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className ={style.phoneI} src={phone} alt="" />
 */