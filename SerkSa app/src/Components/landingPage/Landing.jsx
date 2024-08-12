import robot from '../../assets/icon/Logo2.svg'
import style from './Landing.module.css'
import MediaQuery from 'react-responsive'
function LandingPage(){
    return(
           <>
                 <MediaQuery maxWidth={600}>
                    <div class ={style.Mainlanding}>
                        <h4 className={style.application}>SerkSa Application</h4>
                        <h4 className={style.description}>We created a gamified app to enhance high school learning experiences.</h4>
                        <div className ={style.animateRobot}>
                            <div></div>
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
                    <div class ={style.Mainlanding}>
                        <h4 className={style.application}>SerkSa Application</h4>
                        <h4 className={style.description}>We created a gamified app to enhance high school learning experiences.</h4>
                        <div className ={style.button}>
                            <button className={style.work}>How our app works</button>
                            <button className={style.learn}>Learn more</button>
                        </div>
                        <div className ={style.animateRobotI}>
                            <div></div>
                             <img src={robot} className={style.robot}/>
                        </div>
                    </div>
                 </MediaQuery>
              
            </>

        )
}
export default LandingPage