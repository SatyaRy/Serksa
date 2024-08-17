import style from "../../Components/KeyPage/KeyPage.module.css"
import MediaQuery from "react-responsive"
import leader from "../../assets/icon/leader.svg"
import road from "../../assets/icon/road.svg"
import score from "../../assets/icon/score.svg"
import firstFeature from "../../assets/icon/firstFeature.svg"
import secondFeature from "../../assets/icon/secondFeature.svg"
import lamp from "../../assets/icon/lamp.svg"
import hand from "../../assets/icon/hand.svg"
import mind from "../../assets/icon/mind.svg"
import acess from "../../assets/icon/acess.svg"
import internet from "../../assets/icon/internet.svg"
import fly from "../../assets/icon/fly.svg"
import champ from "../../assets/icon/champ.svg"
import note from "../../assets/icon/note.svg"
import reward from "../../assets/icon/thirdFeature.svg"
export default function KeyPage(){
    return(
            <>
                <div className ={style.container}>
                    <h4>App Features</h4>
                    <div className ={style.boxI}>
                        <div className={style.LeaderBox}>
                            <button>Gamify Learning</button>
                            <img src={score} alt="" />
                        </div>  
                        <div className={style.LeaderBox}>
                        <button>Roadmap & Tips</button>
                            <img src={road} alt="" />
                        </div>  
                        <div className={style.LeaderBox}>
                        <button>Rewards System</button>
                            <img src={leader} alt="" />
                        </div>  
                    </div>
                </div>
                <div className ={style.containerII}>
                    <h4>Let’s see what special about our app features!</h4>
                    <div className ={style.gamifyFeature}>
                        <FeatureMock FeatureMockup={firstFeature}/>
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
                    <div className ={style.roadmapFeature}>
                        <div className ={style.roadmapTips}>
                                <h4 style ={{fontSize: "2rem"}}>Reward System</h4>
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
                       <FeatureMock FeatureMockup={secondFeature}/>
                    </div>
                    <div className ={style.gamifyFeature}>
                       <FeatureMock FeatureMockup={secondFeature}/>
                        <div className ={style.gamifyBox}>
                             <h4 style ={{fontSize: "2rem"}}>Reward System</h4>
                             <Detail
                                Icon={note}
                                Methods={"Points exchange"}
                                Description={"In our app, students can earn points by participating in games and following their learning roadmap. These points can be exchanged for exciting rewards"}
                             />
                             <Detail
                                Icon={fly}
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
            <img src={Icon} alt="" style={{width:"10%"}} />
            <div className={style.detail}>
                    <h4 style={{fontSize:"1rem", textAlign:"start"}}>{Methods}</h4>
                    <h4 style={{fontSize:"0.7rem" ,marginTop: "1vh", textAlign:"start", fontWeight:"400"}}>{Description}</h4>
            </div>
        </div>
         
    );
}
function FeatureMock({FeatureMockup}){
    return(
           <img 
                src={FeatureMockup} 
                alt="" id={style.gamify}
           /> 
    );
}