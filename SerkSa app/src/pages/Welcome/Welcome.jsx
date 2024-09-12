import {useState,useCallback,useEffect} from "react"
import "./Welcome.scss"
import {WelcomeData} from "../../data/WelcomeData.jsx"
import {Robot} from "../../model/Robot/Robot.jsx"
import {ProgressBar} from "../../model/Progress/Progress.jsx"
import { useNavigate } from "react-router-dom"
export default function Welcome(){
    //logic
    const [click, setClick] = useState(false)
    const [width, setWidth] = useState(0)
    const [index, setIndex] = useState(0)
    const [boxId,setBoxId] = useState(null)
    const [check, setCheck] = useState(true)
    const HandleClick=(event)=>{
        setClick(!click)
        setWidth(width+25)
        if(width >=100){
            setWidth(0)
        }
        setIndex(c=>c+1)
        setCheck(!check)
    }
    const HandleBoxClick= useCallback((id)=>{
        setCheck(true)
        setBoxId(id)
    },[setCheck])
    const navigate = useNavigate()
    useEffect(()=>{
        if(index>4){
            setWidth(100)
            setTimeout(()=>navigate("/waitlist"),2000)
        }
    })
    console.log(index)
    const {question,option} = WelcomeData[index <5? index: 0]
    return(
            <>
                <div className ="container">
                   <div className ="modalContainer">
                        <ProgressBar width={width}/>
                        <div className ="modal">
                                <Robot/>
                                <div className ="box">
                                    <span>{question}</span>
                                </div>
                        </div>
                   </div>
                    <div className ="surveyBox">
                       {index <=4 && option.map((value,index)=>{
                        return (
                                <>
                                   <div  key ={index}  onClick ={()=>HandleBoxClick(value.id)}  style ={{border: value.id ===boxId && check ? "solid blue":"solid grey"}} className ="smallBox">{value.methods}</div>
                                </>
                        )
                       })}
                       {index >4 && (
                            <>
                                <div>We will direct you to waitlist page</div>
                            </>
                       )}
                       
                    </div>
                   <div className ="welcomeButton">
                         {<button onClick ={HandleClick} style ={{boxShadow:click? "none":"3px 4px 0px grey "}}>Continue</button>}
                   </div>
                </div> 
            </>
    )
}


