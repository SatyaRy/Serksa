
import style from "./Feature.module.css"
import {motion, AnimatePresence} from "framer-motion"
import {useState} from "react"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import MediaQuery from "react-responsive"
import school from "../../assets/icon/school.svg"
import idea from "../../assets/icon/idea.svg"
import think from "../../assets/icon/think.svg"
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
const paragraph={
    problem:"Traditional methods often leave them overwhelmed espcially in complex subject like science ",
    solution:"SerkSa is a gamify learning app that supports high school students by providing structured lesson roadmaps and interactive games.",
    Deliverable:"It includes a rewards system that motivates students to earn points for study materials and special features."
}
function FeaturePage (){
    const animation={
        hidden: {
            scale: 1
        },
        visible:{
            scale: 1.05,
            boxShadow: "0px 0px 4px #FF52AF",
            borderOpacity: 0.7
        }
    }
    return(
        <>  
               <div className ={style.container}>
                <h4 className ={style.top}>Project Overview</h4>
                    <div className ={style.mainBoxI}>
                            <div className={style.boxI} >
                                <motion.div className ={style.boy}
                                 variants={animation}
                                 initial="hidden"
                                 whileHover="visible"
                                >
                                <img src={school} alt="" />
                                </motion.div>
                                <h4>Problem Statement</h4>
                                <p>{paragraph.problem}</p>
                                <button>
                                    <div className ={style.button}>
                                        <h4>Read More</h4> <MdNavigateNext id={style.icon}/>
                                    </div>
                                </button>
                            </div>
                            <div className={style.boxI}>
                                <motion.div className ={style.boy}
                                  variants={animation}
                                  initial="hidden"
                                  whileHover="visible"
                                >
                                    <img src={idea} alt="" />
                                </motion.div>
                                <h4>Solution</h4>
                                <p>{paragraph.solution}</p>
                                <button>
                                    <div className ={style.button}>
                                        <h4>Read More</h4>
                                        <MdNavigateNext id={style.icon}/>
                                    </div>
                                </button>
                            </div>
                            <div className={style.boxI}>
                                <motion.div className ={style.boy}
                                  variants={animation}
                                  initial="hidden"
                                  whileHover="visible"
                                >
                                        <img src={think} alt="" />
                                </motion.div>
                                <h4>Deliverable</h4>
                                <p>{paragraph.Deliverable}</p>
                                <button>
                                    <div className ={style.button}>
                                            <h4>Read More</h4>
                                            <MdNavigateNext id={style.icon}/>
                                        </div>
                                </button>
                            </div>
                    </div>
               </div>

        </>
    )
}
export default FeaturePage


