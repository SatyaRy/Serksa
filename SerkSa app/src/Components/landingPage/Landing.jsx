
import style from './Landing.module.css'
import Robot from '../landingPage/Robot.svg'
function LandingPage(){
    return(
        <div>
            <h4 className={style.application}>SerkSa Application</h4>
            <h4 className={style.description}>We created a gamified app to enhance high school learning experiences.</h4>
        </div>
    )
}
export default LandingPage