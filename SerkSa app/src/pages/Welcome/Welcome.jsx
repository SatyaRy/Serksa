import {useState,useEffect} from "react"
import "./Welcome.scss"
import {WelcomeData} from "../../data/WelcomeData.jsx"
import {Robot} from "../../model/Robot/Robot.jsx"
import {ProgressBar} from "../../model/Progress/Progress.jsx"
import { Link } from "react-router-dom"
export default function Welcome(){
    const [click, setClick] = useState(false)
    const [width, setWidth] = useState(0)
    const [index, setIndex] = useState(0)
    const HandleClick=()=>{
        setClick(!click)
        setWidth(width+25)
        if(width >=100){
            setWidth(0)
        }
        setIndex(c=>c+1)
    }
    const {question,option} = WelcomeData[index]
    console.log(question)
    return(
            <>
                <div className ="container">
                    <ProgressBar width={width}/>
                    <div className ="surveyBox">
                    <div className ="modal">
                        <Robot/>
                        <div className ="box">
                            <span>{question}</span>
                        </div>
                    </div>
                    <div className ="smallBox">{option[0].methods}</div>
                    <div className ="smallBox">{option[1].methods}</div>
                    <div className ="smallBox">{option[2].methods}</div>
                    <div className ="smallBox">{option[3].methods}</div>
                    </div>
                   <div className ="welcomeButton">
                        {index<4 && (
                             <button onMouseMove={()=>{setClick(false)}}onClick ={HandleClick} style ={{boxShadow:click? "none":"2px 2px 0px grey"}}>Continue</button>
                        )}
                        {index===4&& (
                                <>
                                    <Link to ="/"><button onMouseMove={()=>{setClick(false)}} style ={{boxShadow:click? "none":"2px 2px 0px grey"}}>Home</button></Link>
                                </>
                        )}
                   </div>
                </div> 
            </>
    )
}


