import style from "../../Components/KeyPage/KeyPage.module.css"
import {motion} from "framer-motion"
import CloudImage from "../../model/Image.jsx"
import {FeatureData} from "../../data/FeatureData.jsx"
export default function KeyPage(){
    console.log(FeatureData[1].icon)
    return(
            <>
                <div className ={style.container}>
                    <h4>App Features</h4>
                    <CloudImage modelStyle ={{width: "100%",paddingTop:"2vh"}} imageName={"SerkSa/roadmap"} setting={"svg"}/>
                </div>
                <div className ={style.containerII}>
                    <h4 className={style.HeaderText}>Let’s see what special about our app features!</h4>
                    <div className ={style.gamifyFeature}>
                        <FeatureMock FeatureMockup="SerkSa/gamify"/>
                        <GamifyBox 
                        type ="Gamify Learning" 
                        firstIcon={FeatureData[0].icon} 
                        firstMethods={FeatureData[0].methods}
                        firstDes={FeatureData[0].description} 

                        secondIcon={FeatureData[1].icon} 
                        secondMethods={FeatureData[1].methods}
                        secondDes={FeatureData[1].description} 

                        thirdIcon={FeatureData[2].icon} 
                        thirdMethods={FeatureData[2].methods}
                        thirdDes={FeatureData[2].description} 
                        />
                    </div>
                        <div className ={style.gamifyFeature} id={style.roadmapFeature}>
                            <FeatureMock FeatureMockup="SerkSa/roadtip"/>
                            <GamifyBox 
                            type ="Gamify Learning" 
                            firstIcon={FeatureData[3].icon} 
                            firstMethods={FeatureData[3].methods}
                            firstDes={FeatureData[3].description} 

                            secondIcon={FeatureData[4].icon} 
                            secondMethods={FeatureData[4].methods}
                            secondDes={FeatureData[4].description} 

                            thirdIcon={FeatureData[5].icon} 
                            thirdMethods={FeatureData[5].methods}
                            thirdDes={FeatureData[5].description} 
                        />
                        </div>
                    <div className ={style.gamifyFeature}>
                       <FeatureMock FeatureMockup="SerkSa/reward"/>
                       <GamifyBox 
                        type ="Gamify Learning" 

                        firstIcon={FeatureData[6].icon} 
                        firstMethods={FeatureData[6].methods}
                        firstDes={FeatureData[6].description} 

                        secondIcon={FeatureData[7].icon} 
                        secondMethods={FeatureData[7].methods}
                        secondDes={FeatureData[7].description} 

                        thirdIcon={FeatureData[8].icon} 
                        thirdMethods={FeatureData[8].methods}
                        thirdDes={FeatureData[8].description} 
                        />
                    </div>
                </div>
            </>
    )
}
function Detail({iconName,Methods,Description}){
    return(
         
        <div className ={style.smallBoxI}>
            <CloudImage imageName ={iconName} modelStyle ={{width: "20%"}} setting={"auto"}/>
            <motion.div className={style.detail}
                    initial={{x:100}}
                    whileInView={{x:0}}
                    transition={{duration:0.5}}
                    viewport={{once: true}}>
                <h4 style={{fontSize:"1rem", textAlign:"start"}}>{Methods}</h4>
                <h4 style={{fontSize:"1rem" ,marginTop: "1vh", textAlign:"start", fontWeight:"400"}}>{Description}</h4>
            </motion.div>
        </div>
         
    );
}
function FeatureMock({FeatureMockup}){
    return(
            <CloudImage idName={style.gamify} imageName={FeatureMockup} setting={"auto"} />
    );
}

function GamifyBox({firstIcon, firstMethods,firstDes,type,secondIcon,secondMethods,secondDes,thirdIcon,thirdMethods,thirdDes}){
    return(
            <>
                 <div className ={style.gamifyBox}>
                    <h4 style ={{fontSize: "2rem"}}>{type}</h4>
                            <Detail
                                iconName={firstIcon}
                                Methods={firstMethods}
                                Description={firstDes}
                             />
                             <Detail
                                iconName={secondIcon}
                                Methods={secondMethods}
                                Description={secondDes}
                             />
                             <Detail
                                iconName={thirdIcon}
                                Methods={thirdMethods}
                                Description={thirdDes}
                             />
                </div>
            </>
    )
}