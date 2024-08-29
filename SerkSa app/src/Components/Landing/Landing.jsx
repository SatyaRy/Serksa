import robot from "../../assets/icon/Logo2.svg";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import {Link} from "react-router-dom"
import "./Landing.scss"
import {useMediaQuery} from "react-responsive"
export default function LandingPage() {
  return (
            <>
              <HandleBig/>
            </>
  );
}

const HandleBig = () => {
  const WaitList = "https://forms.gle/e7MvMrJNAo7dZ5jZ8";
  return (
    <>
         <motion.div 
            variants={animation}
            initial="hidden"
            animate ="visable"
            className= "Mainlanding">
            <h4 className="application" >
              SerkSa Application
            </h4>
            <h4 className="description">
              We created a gamified app to enhance high school learning experiences.
            </h4>
            <div className="buttonText">
                <div className="button">
                    <button className ="work"><Link to={WaitList}>Register</Link></button>
                    <button className ="learn"><HashLink smooth to ='#about' style ={{color: "black"}}>Learn more</HashLink></button>
                </div>
                <div className="animateRobotI">
                  <motion.img
                    variants={animation}
                    initial="hideRobot"
                    animate="showRobot"
                    transition="showRobot"
                    src={robot}
                    className="robot"/>
                </div>
        </div>
      </motion.div>
    </>
  );
};

const animation = {
  hidden: {
    marginLeft: "-100vw",
    opacity: 0.5,
  },
  visable: {
    marginLeft: 0,
    transition: {
      delay: 1,
      duration: 0.5,
    },
    opacity: 1,
  },
  hideRobot: {
    translateY: "100vh",
  },
  showRobot: {
    translateY: 0,
    transition: { delay: 1, duration: 0.5 },
  },
};

const ButtonStyle={
  backgroundColor: "#9747FF",
  width: "240px",
  height:"70px ",
  border: "none",
  fontSize: "20px",
  borderRadius: "8px",
  color: "white",
}
const MobileButton ={
  backgroundColor: "#9747FF",
  width: "95%",
  height:"50px ",
  border: "none",
  fontSize: "20px",
  borderRadius: "8px",
  color: "white",
}