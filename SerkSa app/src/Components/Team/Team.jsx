import "./Team.scss"
import CloudImage from "../../model/Image.jsx"
import {TeamData} from "../../data/TeamData.jsx"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion"
export default function Team(){
    const isBigScreen = useMediaQuery({query:`(min-width: 648px)`})
    const isSmallScreen = useMediaQuery({query:`(max-width: 648px )`})
    const animation={
        hidden:{
            scale:1
        },
        visible:{
            scale:1.01,
            border: "solid blue"
        }
    }
    return(
            <>
                {isBigScreen && <div className ="teamContainer">
                   {TeamData.map((value,index)=>{
                    return(
                            <>
                               <motion.div key ={index}
                                variants={animation}
                                initial="hidden"
                                whileHover="visible" className ="imageContainer">
                                    <CloudImage imageName={`${value.picture}`} idName= {"teamPicture"} setting={"svg"} />
                                    <div className ="teamDetail">
                                        <span>{value.name}</span>
                                        <span>{value.role}</span>
                                    </div>
                                    <div className ="teamSocial">
                                        <CloudImage setting={"auto"} idName= {"socialIcon"} imageName={"facebook"} alt="" />
                                        <CloudImage setting={"auto"} idName= {"socialIcon"} imageName={"github"} alt="" />
                                        <CloudImage setting={"auto"} idName= {"socialIcon"} imageName={"linkin"} alt="" />
                                    </div>
                             </motion.div>
                            </>
                    )
                   })}
                </div>}
                 {isSmallScreen && 
                 <div className ="teamContainer">
                    <MobileTeam/>
                </div>}
            </>
    )
}

const MobileTeam=()=>{
    const [index, setIndex] = useState(0)
    const {name,role,picture} = TeamData[index< 7? index:0]
    const HandleClick=()=>{
        setIndex(c=>c+1)
    }
    if(index>6){
        setIndex(0)
    }
    console.log(index)
    console.log(name)
    return(
            <>
                <div className ="imageContainer">
                    <CloudImage imageName={`${picture}`} modelStyle={{width: "150px"}} setting={"svg"} />
                    <div className ="teamDetail">
                        <div className ="moveIcon">
                            <FaChevronLeft onClick={HandleClick} style ={{fontSize:"2rem", color: "#99D2FF"}}/>
                            <FaChevronRight onClick={HandleClick} style ={{fontSize:"2rem", color: "#99D2FF"}}/>
                        </div>
                         <span style ={{fontSize:"1.5rem", color:"black"}}>{name}</span>
                         <span style ={{fontSize:"1.1rem",color:"#407BFF"}}>{role}</span>
                    </div>
                          <div className ="teamSocial">
                                <CloudImage setting={"auto"} idName= {"socialIcon"} imageName={"facebook"} alt="" />
                                <CloudImage setting={"auto"} idName= {"socialIcon"} imageName={"github"} alt="" />
                                <CloudImage setting={"auto"} idName= {"socialIcon"} imageName={"linkin"} alt="" />
                    </div>
                </div>
            </>
    )
}