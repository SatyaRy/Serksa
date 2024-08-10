import robot from '../../assets/icon/robot.svg'
import style from './Landing.module.css'
import MediaQuery from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
function LandingPage(){
    const Example = () =>
   {
        const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
        })
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    }
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
                        <img src={robot} className={style.robot}/>
                    </div>
                 </MediaQuery>
              
            </>

        )
}
export default LandingPage