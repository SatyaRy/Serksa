import style from "../../Components/KeyPage/KeyPage.module.css"
import { lazy,Suspense} from "react"
import MediaQuery from "react-responsive"
import leader from "../../assets/icon/leader.svg"
import road from "../../assets/icon/road.svg"
import score from "../../assets/icon/score.svg"
import firstFeature from "../../assets/icon/firstFeature.svg"
import secondFeature from "../../assets/icon/secondFeature.svg"
import mind from "../../assets/icon/mind.svg"
import acess from "../../assets/icon/acess.svg"
import internet from "../../assets/icon/internet.svg"
import fly from "../../assets/icon/fly.svg"
import champ from "../../assets/icon/champ.svg"
import note from "../../assets/icon/note.svg"
import reward from "../../assets/icon/Reward.svg"
import {motion} from "framer-motion"
import allFeature from "../../assets/icon/allFeature.svg"
import lamp from "../../assets/icon/lamp.svg"
import hand from "../../assets/icon/hand.svg"
import CloudImage from "../../model/Image.jsx"
export default function KeyPage(){
    return(
            <>
                <div className ={style.container}>
                    <h4>App Features</h4>
                    <CloudImage modelStyle ={{width: "100%",paddingTop:"2vh"}} imageName={"SerkSa/roadmap"}/>
                </div>
                <div className ={style.containerII}>
                    <h4 className={style.HeaderText}>Let’s see what special about our app features!</h4>
                    <div className ={style.gamifyFeature}>
                        <FeatureMock FeatureMockup="SerkSa/gamify"/>
                        <div className ={style.gamifyBox}>
                             <h4 style ={{fontSize: "2rem"}}>Gamify Learning</h4>
                             <Detail
                                Icon={mind}
                                Methods={"Engagement"}
                                Description={"The game format makes learning interactive and fun, reducing boredom and enhancing interest in the subject."}
                             />
                             <Detail
                                Icon={hand}
                                Methods={"Enhanced Memory Recall"}
                                Description={"If played in groups, it promotes teamwork and communication, as players may discuss hints to reach a consensus."}
                             />
                             <Detail
                                Icon={lamp}
                                Methods={"Enhanced Memory Recall "}
                                Description={"Students strengthen their memory by connecting hints to answers, improving their ability to recall information."}
                             />
                        </div>
                    </div>
                    <MediaQuery maxWidth={768}>
                        <div className ={style.gamifyFeature}>
                            <FeatureMock FeatureMockup="SerkSa/roadtip"/>
                            <div className ={style.gamifyBox}>
                                <h4 style ={{fontSize: "2rem"}}>Roadmap & Tips</h4>
                                <Detail
                                    Icon={acess}
                                    Methods={"Access to Quality Resources"}
                                    Description={"The game format makes learning interactive and fun, reducing boredom and enhancing interest in the subject."}
                                />
                                <Detail
                                    Icon={internet}
                                    Methods={"Structured Learning Path"}
                                    Description={"The comprehensive roadmap provides students with a clear, step-by-step guide through each subject and lesson, ensuring they know exactly what to focus on and when."}
                                />
                                <Detail
                                    Icon={champ}
                                    Methods={"Self-Paced Learning"}
                                    Description={"The feature allows students to learn at their own pace, following the roadmap and utilizing resources as needed, which caters to individual learning styles."}
                                />
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery minWidth={769}>
                        <div className ={style.roadmapFeature}>
                            <div className ={style.roadmapTips}>
                                    <h4 style ={{fontSize: "2rem"}}>Roadmap & Tips</h4>
                                    <Detail
                                        Icon={acess}
                                        Methods={"Access to Quality Resources"}
                                        Description={"By offering additional materials and references like the MOEYS book, students have access to high-quality learning resources that support their studies beyond the app."}
                                    />
                                    <Detail
                                        Icon={internet}
                                        Methods={"Structured Learning Path"}
                                        Description={"The comprehensive roadmap provides students with a clear, step-by-step guide through each subject and lesson, ensuring they know exactly what to focus on and when."}
                                    />
                                    <Detail
                                        Icon={champ}
                                        Methods={"Self-Paced Learning"}
                                        Description={"The feature allows students to learn at their own pace, following the roadmap and utilizing resources as needed, which caters to individual learning styles."}
                                    />
                            </div>
                        <FeatureMock FeatureMockup="SerkSa/roadtip"/>
                        </div>
                    </MediaQuery>
                    <div className ={style.gamifyFeature}>
                       <FeatureMock FeatureMockup="SerkSa/reward"/>
                        <div className ={style.gamifyBox}>
                             <h4 style ={{fontSize: "2rem"}}>Reward System</h4>
                             <Detail
                                Icon={note}
                                Methods={"Points exchange"}
                                Description={"In our app, students can earn points by participating in games and following their learning roadmap. These points can be exchanged for exciting rewards"}
                             />
                             <Detail
                                Icon={mind}
                                Methods={"Increased Motivation"}
                                Description={"A rewards system encourages students to stay engaged and committed to their learning by providing tangible incentives, making the learning process more enjoyable and goal-oriented."}
                             />
                             <Detail
                                Icon={champ}
                                Methods={"Positive Reinforcement"}
                                Description={"Rewards reinforce positive behavior and achievements, helping students build confidence and develop a sense of accomplishment, which can lead to sustained interest and improved academic performance."}
                             />
                        </div>
                    </div>
                </div>
            </>
    )
}
function Detail({Icon,Methods,Description}){
    return(
         
        <div className ={style.smallBoxI}>
            <motion.img loading="lazy"
                initial={{y:100}}
                whileInView={{y:0}}
                transition={{duration:0.5}}
                viewport={{once: true}}
                src={Icon} alt="" style={{width:"20%"}}/>
            <motion.div className={style.detail}
            initial={{x:100}}
            whileInView={{x:0}}
            transition={{duration:0.5}}
            viewport={{once: true}}
            >
                    <h4 style={{fontSize:"1rem", textAlign:"start"}}>{Methods}</h4>
                    <h4 style={{fontSize:"1rem" ,marginTop: "1vh", textAlign:"start", fontWeight:"400"}}>{Description}</h4>
            </motion.div>
        </div>
         
    );
}
function FeatureMock({FeatureMockup}){
    return(
            <CloudImage idName={style.gamify} imageName={`${FeatureMockup}`} />
    );
}