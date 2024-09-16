import "./Sign.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import {db} from '../../firebaseConfig';
import {collection,addDoc,getDoc} from "firebase/firestore"
import early from "../../assets/icon/amico.png"
import { HiMiniCheckCircle } from "react-icons/hi2";
import SuccessModal from "../../model/Handle/Success.jsx"
import {motion,AnimatePresence} from "framer-motion"
import {useForm} from "react-hook-form"
import {useMediaQuery} from "react-responsive"

export default function Sign(){
    const form = useForm()
    const isSmall = useMediaQuery({query:"(max-width: 768px)"})
    const {register, formState,handleSubmit,reset} = form 
    const {errors,isValid} = formState
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState(null)
    const handleClick= async(data)=>{
        setShow(true)
        if(isValid){
            setStatus(true)
            setTimeout(()=>{reset()},2000)
        }
        else{
            setStatus(false)
        }
        setTimeout(()=>{setStatus(false)},2000)
        const {firstname,lastname,email,grade,highschool} = data
        try{
            const docRef = await addDoc(collection(db,"user"),{
                firstName: firstname,
                lastName: lastname,
                email: email,
                grade: grade,
                highschool: highschool
              
            })
        }
        catch(error){
            console.log(error)
        }
    }
    return(
            <>
                <AnimatePresence>
                    {status &&
                        <motion.div className ="Modal" variants={animation} initial="hidden" animate="visible" exit={{top:-100}}>   
                            <SuccessModal message={"successful"} status={100}/>
                        </motion.div>
                    }
                </AnimatePresence>
                <div className ="signContainer">
                    <div className ="mainBox">
                        <span >Register for early access <span className ="text">(Limited Spot)</span></span>
                        <span style ={{paddingBottom:"1vw",fontWeight:"400",fontSize:"1rem"}}>Be among the first to explore and use SerkSa, gaining insights into its features before anyone else.</span>
                        <form action="" style ={formStyle} onSubmit={handleSubmit(handleClick)} noValidate  >
                            <div className ="detail">
                                <input id ="detail" type="text" placeholder="First Name" 
                                {...register("firstname",
                                {required:{
                                    value:true,
                                    message:"First Name is required"
                                }})}/>
                                 {isSmall && <p id ="errorModal">{errors.firstname?.message}</p>}
                                <input id ="detail" type="text" placeholder="Last Name"
                                 {...register("lastname",
                                    {required:{
                                        value: true,
                                        message:"Last Name is required"
                                    }}
                                 )}/>
                                  {isSmall && <p id ="errorModal">{errors.lastname?.message}</p>}
                            </div>
                            
                           
                            <input id ="email" type="email" placeholder="Email" {...register("email", {
                                pattern:{
                                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message:"Invalid Email"
                                },
                                required:{
                                    value:true,
                                    message:"Email is required"
                                }
                            })} />
                            <p id="errorModal">{errors.email?.message}</p>
                            <input id ="email" type="text" placeholder="High School Name" {...register("highschool",{
                                required:{
                                    value: true,
                                    message:"High school is required"
                                }
                            })} />
                           <p id ="errorModal">{errors.highschool?.message}</p>
                            <select name="" id="" style ={selectStyle} {...register("grade")}>
                               {Grade.map((value,index)=>{
                                return(
                                        <>
                                            <option key ={index} value={value.grade}>{value.grade}</option>
                                        </>
                                )
                               })}
                            </select>
                            <div className ="submitStyle">
                                <Link to ="/" style ={{width: "50%"}}><button id ="homeButton" >Home</button></Link>
                                <button    type="submit" style={{border:show? "2px solid #050C9C":"none"}} >Submit</button>
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
                                            <div  style ={{display: "flex", gap:"20px",alignItems:"center"}}>
                                                <HiMiniCheckCircle style={{color:"green",fontSize:"40px"}}/>
                                                <span  key ={index} style={{fontSize:"1.3rem",fontWeight:"300"}} className="paragraph">{value.paragraph}</span>
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
const formStyle ={
    display:"flex", flexDirection:"column" ,gap:"20px"
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
const animation={
    hidden:{
        top:-100
    },
    visible:{
        top:0,
        transition:{
            duration: 0.1
        }
    }
}
const Grade=[
    {grade: "Grade 12"},
    {grade: "Grade 11"},
    {grade: "Grade 10"},
    {grade: "Grade 9"},
    {grade: "Grade 8"},
    {grade: "Grade 7"},]