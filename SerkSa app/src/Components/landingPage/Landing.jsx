import robot from '../../assets/icon/Logo2.svg'
import style from './Landing.module.css'
import MediaQuery from 'react-responsive'
import {motion } from "framer-motion"
function LandingPage(){
    const animation={
        hidden: {
            marginLeft: "-100vw", 
            opacity: 0.5
        },
        visable:{
            marginLeft:0,
            transition:{
                delay: 1,
                duration: 0.5
            },
            opacity: 1
        },
        hideRobot:{
            translateY:"100vh"
        },
        showRobot:{
            translateY: 0,
            transition:{delay: 1, duration: 0.5}
       }
    }
    return(
           <>
                 <MediaQuery maxWidth={600}>
                    <div className ={style.Mainlanding}>
                        <h4 className={style.application}>SerkSa Application</h4>
                        <h4 className={style.description}>We created a gamified app to enhance high school learning experiences.</h4>
                        <div className ={style.animateRobot}>
                             <img src={robot} className={style.robot}/>
                        </div>
                        <div className ={style.button}>
                            <button className={style.work}>How our app works</button>
                            <button className={style.learn}>Learn more</button>
                        </div>
                        <h4 className ={style.shortDetail}>“ Fun learning is an engaging and enjoyable process that makes acquiring knowledge feel like play rather than work!! “.</h4>
                    </div>
                 </MediaQuery>
                 <MediaQuery minWidth={600}>
                    <motion.div className ={style.Mainlanding}
                        variants = {animation}
                        initial ="hidden"
                        animate ="visable"
                        transition="visable">
                        <h4 className={style.application}>SerkSa Application</h4>
                        <h4 className={style.description}>We created a gamified app to enhance high school learning experiences.</h4>
                        <div className ={style.button}>
                            <button
                            className={style.work}>How our app works</button>
                            <button className={style.learn}>Learn more</button>
                        </div>
                        <div className ={style.animateRobotI}>
                             <motion.img 
                             variants={animation}
                             initial= "hideRobot"
                             animate="showRobot"
                             transition="showRobot"
                             src={robot} className={style.robot}/>
                        </div>
                    </motion.div>
                 </MediaQuery>
              
            </>

        )
}
export default LandingPage