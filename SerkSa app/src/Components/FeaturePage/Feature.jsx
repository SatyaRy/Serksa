
import style from "./Feature.module.css"
import {motion} from "framer-motion"
import { MdNavigateNext } from "react-icons/md";
import CloudImage from "../../model/Image.jsx"
function FeaturePage (){
    return(
        <>  
               <div className ={style.container}>
                <h4 className ={style.top}>Project Overview</h4>
                    <div className ={style.mainBoxI}>
                            <FeatureBox title={"Problem Statement"} name ={"SerkSa/boy"} description={paragraph.problem}/>
                            <FeatureBox title={"Solution"} name ={"SerkSa/think"} description={paragraph.solution}/>
                            <FeatureBox title={"Deliverable"} name ={"SerkSa/board"} description={paragraph.deliverable}/>
                    </div>
               </div>

        </>
    )
}
export default FeaturePage

const paragraph={
    problem:"Traditional methods often leave them overwhelmed espcially in complex subject like science ",
    solution:"SerkSa is a gamify learning app that supports high school students by providing structured lesson roadmaps and interactive games.",
    deliverable:"It includes a rewards system that motivates students to earn points for study materials and special features."
}
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
const FeatureBox=({title,name,description})=>{
    return(
            <>
                 <motion.div className={style.boxI} 
                                initial={{y: 100}}
                                whileInView={{y:0}}
                                transition={{duration:0.5}}
                                viewport={{once: true}}>
                    <motion.div className ={style.boy}
                                 variants={animation}
                                 initial="hidden"
                                 whileHover="visible">
                                <CloudImage imageName={`${name}`} setting={"auto"}  modelStyle={{width:"60%"}}/>
                    </motion.div>
                                <h4>{title}</h4>
                                <p>{description}</p>
                                <motion.button whileHover={{scale:"1.05"}} >
                                <motion.div className ={style.button}whileHover={{x:2}}>
                                    <span>Read More</span> <MdNavigateNext id={style.icon}/>
                                </motion.div>
                                </motion.button>
                </motion.div>
            </>
    )
}