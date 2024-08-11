import robot from '../../assets/icon/robot.svg'
import style from './Landing.module.css'
import MediaQuery from 'react-responsive'
function LandingPage(){
    return(
           <>
                 <MediaQuery maxWidth={768}>
                    <div class ={style.Mainlanding}>
                        <h4 className={style.application}>SerkSa Application</h4>
                        <h4 className={style.description}>We created a gamified app to enhance high school learning experiences.</h4>
                        <img src={robot} className={style.robot}/>
                        <div className ={style.button}>
                            <button className={style.work}>How our app works</button>
                            <button className={style.learn}>Learn more</button>
                        </div>
                    </div>
                 </MediaQuery>
                 <MediaQuery minWidth={769}>
                    <div class ={style.Mainlanding}>
                        <h4 className={style.application}>SerkSa Application</h4>
                        <h4 className={style.description}>We created a gamified app to enhance high school learning experiences.</h4>
                        <div className ={style.button}>
                            <button className={style.work}>How our app works</button>
                            <button className={style.learn}>Learn more</button>
                        </div>
                        <h1>hello world</h1>
                        <img src={robot} className={style.robot}/>
                    </div>
                 </MediaQuery>
              
            </>

        )
}
export default LandingPage