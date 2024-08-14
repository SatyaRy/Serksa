import style from "../../Components/About/About.module.css"
import logo from "../../assets/icon/white.svg"
import iphone from "../../assets/icon/iphone.svg"
import iphone2 from "../../assets/icon/iphone1.svg"
import {motion} from "framer-motion"
export default function AboutPage(){
    const Logo = logo
    const mock = iphone
    const mockI = iphone2
    const moving = [
        {
            
        }
    ]
    return(
           <>
                <div className ={style.question} >
                    <div className = {style.section}>
                        <img src={Logo} alt="" />
                        <h1>What is SERKSA?</h1>
                    </div>
                    <p className ={style.paragraph}>SerkSa is a gamified educational app designed to tackle the common challenges high school students face in self-learning. It provides a structured roadmap for each lesson, reinforcing foundational knowledge and keeping students motivated through interactive games. Tailored for Cambodian students, SerkSa combines user-friendly design with localized content to empower students and bridge educational gaps, ensuring that every learner has the tools they need to succeed.</p>
                    <div className ={style.iphone}>
                        <motion.img src={mockI} alt="" />
                        <img  id ={style.mock}src={mock} alt="" />
                    </div>
                </div>
           </>
    )

w
}