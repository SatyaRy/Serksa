import "./Sign.scss"
import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import {db} from '../../firebaseConfig';
import {collection,addDoc} from "firebase/firestore"
import early from "../../assets/icon/amico.png"
import { HiMiniCheckCircle } from "react-icons/hi2";
import SuccessModal from "../../model/Handle/Success.jsx"
import {motion} from "framer-motion"
export default function Sign(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [grade, setGrade] = useState("")
    const [show,setShow] = useState(false)
    console.log(grade)
    const HandleSubmit= async(e)=>{
        setShow(true);
        e.preventDefault(); 
        try{
            const docRef = await addDoc(collection(db,"user"),{
                firstName: firstName,
                lastName: lastName,
                email: email,
                grade: grade,
            })
        }
        catch(error){
            console.log(error)
        }
    }
    const animation={
        hidden:{
            top: -200
        },
        visible:{
            top: 0,
            transition:{
                duration:0.3,
                
            }
        }
    }
    {setTimeout(()=>{setShow(false)},7000)}

    return(
            <>
                <motion.div 
                    variants={animation}
                    initial="hidden"
                    animate={show? "visible":""}
                    className="Modal">   
                   <SuccessModal status={show? 100:0}/>
                </motion.div>
                <div className ="signContainer">
                    <div className ="mainBox">
                        <span >Register for early access <span className ="text">(Limited Spot)</span></span>
                        <span style ={{paddingBottom:"1vw",fontWeight:"400",fontSize:"1rem"}}>Be among the first to explore and use SerkSa, gaining insights into its features before anyone else.</span>
                        <form action="" style ={{display:"flex", flexDirection:"column" ,gap:"20px"}}>
                            <div className ="detail">
                                <input id ="detail" type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                                <input id ="detail" type="text" placeholder="Last Name" value ={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                            </div>
                            <input id ="email" type="email" placeholder="Email" value ={email} onChange={(e)=>setEmail(e.target.value)} />
                            <select name="" id="" style ={selectStyle} onChange={(e)=>setGrade(e.target.value)}>
                               {data.map((value,index)=>{
                                return(
                                        <>
                                            <option key ={index} value={value.grade}>{value.grade}</option>
                                        </>
                                )
                               })}
                            </select>
                            <div className ="submitStyle">
                                <HashLink to ="/" style ={{width: "50%"}}><button id ="homeButton" >Home</button></HashLink>
                                <button   type="submit" onClick={HandleSubmit} style={{border:show? "2px solid #050C9C":"none"}} >Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className ="mainBoxII">
                        <img src={early} alt="" style={{ width:"50%",paddingBottom: "2vw"}}   />
                        <div className ="earlyDetail">
                             <span>Benefits for early users</span>
                             {data.map((value,index)=>{
                                return(
                                        <>
                                            <div style ={{display: "flex", gap:"20px",alignItems:"center"}}>
                                                <HiMiniCheckCircle style={{color:"green",fontSize:"40px"}}/>
                                                <span key ={index}style={{fontSize:"1.3rem",fontWeight:"300"}} className="paragraph">{value.paragraph}</span>
                                            </div>
                                        </>
                                )
                             })}
                        </div>
                    </div>
                </div>
            </>
    )
}




//Inner style
const selectStyle={
    height:"60px", outline:"none", paddingLeft:"2vw",
    fontSize:"1rem",border:" solid rgb(190, 188, 188)", borderRadius:"5px"
}
const data=[
    {
        paragraph: "Early access to beta version of SerkSa",
        grade: "Grade 12",
    },
    {
        paragraph: "Free 1-Month Premium Access",
        grade: "Grade 7-9",
    },
    {
        paragraph: "Be Part of a SerkSa's Community",
        grade: "University Student"
    }
]