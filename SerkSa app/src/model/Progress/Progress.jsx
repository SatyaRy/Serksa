import "../Progress/Progress.scss"
import { FaAngleLeft } from "react-icons/fa";
export const ProgressBar =({width})=>{
    return(
            <>
               <div className ="progressContainer">
                    <FaAngleLeft style={{fontSize:"1.5rem"}}/>
                    <div className ="progress">
                        <div className = "progressPercentage" style={{width: `${width}%`}}>
                        </div>
                    </div>
               </div>
            </>
    )
}
