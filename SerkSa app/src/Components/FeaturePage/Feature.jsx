
import style from "./Feature.module.css"
import {motion, AnimatePresence} from "framer-motion"
import {useState} from "react"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import MediaQuery from "react-responsive"
import school from "../../assets/icon/school.svg"
import idea from "../../assets/icon/idea.svg"
import think from "../../assets/icon/think.svg"
const animation={
    hidden:{
        borderRadius: "10px",
    },
    visible:{
        borderRadius: "10px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }
}
const hideParagraph={
    hidden:{
        opacity:0,
        borderRadius: "10px",
    },
    visible:{
        height:"auto",
        opacity:1,
        display: "flex",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,

    }
}
const paragraph={
    problem:"High school students often face challenges in self-learning due to a lack of structured guidance, gaps in foundational knowledge, and difficulty staying motivated. Traditional methods can leave them overwhelmed and disengaged, particularly in complex subjects like science. There's a need for an engaging tool that provides clear learning paths, reinforces key concepts, and makes self-learning both effective and enjoyable.",
    solution:"SerkSa is a gamified educational app that supports high school students in self-learning by providing structured lesson roadmaps and interactive games aligned with their curriculum. The app also includes a rewards system to keep students motivated, allowing them to earn points for study materials and special features. By combining clear guidance with an engaging experience, SerkSa helps students overcome learning challenges and achieve academic success.",
    Deliverable:"SerkSa is a gamified educational app that helps high school students with self-learning by offering structured lesson plans and interactive games aligned with their curriculum. It includes a rewards system that motivates students to earn points for study materials and special features. SerkSa combines clear guidance with engaging experiences to help students overcome learning challenges and succeed academically."
}
function FeaturePage (){
    return(
        <>
            <MediaQuery maxWidth={767}>
                <div className ={style.mainBox}>
                    <h4>Project Overview</h4>
                    <Problem/>
                    <Solution/>
                    <Deliverable/>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={768}>
               <div className ={style.container}>
                <h4 className ={style.top}>Project Overview</h4>
                    <div className ={style.mainBoxI}>
                            <div className={style.boxI}>
                                <div className ={style.boy}>
                                        <img src={school} alt="" />
                                </div>
                                <h4>Problem Statment</h4>
                                <p>{paragraph.problem}</p>
                            </div>
                            <div className={style.boxI}>
                                <div className ={style.boy}>
                                    <img src={idea} alt="" />
                                </div>
                                <h4>Solution</h4>
                                <p>{paragraph.solution}</p>
                            </div>
                            <div className={style.boxI}>
                                <div className ={style.boy}>
                                        <img src={think} alt="" />
                                </div>
                                <h4>Deliverable</h4>
                                <p>{paragraph.Deliverable}</p>
                            </div>
                    </div>
               </div>
            </MediaQuery>

        </>
    )
}
export default FeaturePage

function Problem(){
    const [isClick, setIsClick]= useState(false)
    const Handleclick=()=>{
        setIsClick(!isClick)
    }
    return(
            <>
                <div className ={style.content}>
                    <motion.button variants={animation}initial="hidden" animate={isClick? "visible":""}onClick ={Handleclick}className ={style.button}>
                        <div className ={style.clickButton}>
                            <h4>Problem Statement</h4>
                            {!isClick? <FaChevronDown className={style.icon}/>: <FaChevronUp className={style.icon}/>}
                        </div>
                    </motion.button>
                    <motion.p variants={hideParagraph} initial="hidden"animate={isClick? "visible":"1"} >{paragraph.problem}</motion.p>
                </div>
            </>
    )
}
function Solution(){
    const [isClick, setIsClick]= useState(false)
    const Handleclick=()=>{
        setIsClick(!isClick)
    }
    return(
            <>
                <div className ={style.content}>
                    <motion.button variants={animation}initial="hidden" animate={isClick? "visible":""}onClick ={Handleclick}className ={style.button}>
                        <div className ={style.clickButton}>
                            <h4>Solution</h4>
                            {!isClick? <FaChevronDown className={style.icon}/>: <FaChevronUp className={style.icon}/>}
                        </div>
                    </motion.button>
                    <motion.p variants={hideParagraph} initial="hidden"animate={isClick? "visible":"1"} >{paragraph.solution}</motion.p>
                </div>
            </>
    )
}
function Deliverable(){
    const [isClick, setIsClick]= useState(false)
    const Handleclick=()=>{
        setIsClick(!isClick)
    }
    return(
            <>
                <div className ={style.content}>
                    <motion.button variants={animation}initial="hidden" animate={isClick? "visible":""}onClick ={Handleclick}className ={style.button}>
                        <div className ={style.clickButton}>
                            <h4>Deliverable</h4>
                            {!isClick? <FaChevronDown className={style.icon}/>: <FaChevronUp className={style.icon}/>}
                        </div>
                    </motion.button>
                    <motion.p variants={hideParagraph} initial="hidden"animate={isClick? "visible":"1"} >{paragraph.Deliverable}</motion.p>
                </div>
            </>
    )
}