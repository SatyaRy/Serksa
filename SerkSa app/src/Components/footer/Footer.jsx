
import style from "./footer.module.css"
import { Link } from "react-router-dom"
import CloudImage from "../../model/Image.jsx"
export default function Footer(){
    const facebookLink = "https://www.facebook.com/profile.php?id=61557592977225&mibextid=JRoKGi"
    const telegramLink = "https://t.me/serksa_admin"
    const emailLink = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqbzMMZrFVXDdRbpvwpgCxmJJnJqVhbfbVXZGKJHFBfcJhhKnfDgMBFXwplqbLXgRQzL"
    const youtubeLink ="https://www.youtube.com/@MetaSeng55"
    return(
        <>
            <div className ={style.container}>
                 <CloudImage idName ={style.saly} imageName={"saly"} modelStyle={{width: "40%",paddingBottom:"4vh"}} alt="" />
                 <div className ={style.mainBox}>
                     <div className={style.smallBox}>
                            <h4 style ={{color: "white",fontSize:"2.5rem" ,fontWeight:"bold"}}>Ready To Get Started?</h4>
                            <h4 style ={{color: "white" ,fontSize:"18px" ,fontWeight:"200" ,paddingRight:"10vw"}}>as we are serksa, we’ll bring what is the best solutions for those who found difficult to do their self pace learning.</h4>
                            <Link to ="/development"><button><div style={{display:"flex", justifyContent:"space-evenly"}}><h4 style={{ marginTop:"1vh",fontSize:"1rem",paddingBottom:"5px"}}>Download App</h4><CloudImage imageName={"apple"} alt="" /></div></button></Link>
                            <Link to = "/development"><button><div style={{display:"flex", justifyContent:"space-evenly"}}><h4 style={{ marginTop:"1vh",fontSize:"1rem"}}>Download App</h4><CloudImage imageName={"playstore"} alt="" /></div></button></Link>
                            <div className ={style.contact}>
                               <Link to ={telegramLink}><button style={{width:"150px", backgroundColor:"#0081FE",border:"solid white",borderRadius:"15px",color:"white",fontSize:"1rem"}}>Contact Us</button></Link>
                                <div className ={style.contactMethods}>
                                        <Link to ={facebookLink}><CloudImage imageName={"facebook"} modelStyle={{width:"30px"}} alt="" /></Link>
                                        <Link to ={telegramLink}><CloudImage imageName={"telegram"} modelStyle={{width:"30px"}}alt=""/></Link>
                                        <Link to ={emailLink}><CloudImage imageName={"SerkSa/email"} modelStyle={{width:"30px"}}alt="" /></Link>
                                        <Link to ={youtubeLink}><CloudImage imageName={"youtube"} modelStyle={{width:"40px"}}alt="" /></Link>
                                </div>
                            </div>
                      </div>
                 </div>
            </div>
        </>
    )
}