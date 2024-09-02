
import style from "./footer.module.css"
import { Link } from "react-router-dom"
import CloudImage from "../../model/Image.jsx"
export default function Footer(){
    const telegramLink = "https://t.me/serksa_admin"
    return(
        <>
            <div className ={style.container}>
                 <CloudImage idName ={style.saly} setting={"auto"} imageName={"saly"} modelStyle={{width: "40%",paddingBottom:"4vh"}} alt="" />
                 <div className ={style.mainBox}>
                     <div className={style.smallBox}>
                            <h4 style ={{color: "white",fontSize:"2.5rem" ,fontWeight:"bold"}}>Ready To Get Started?</h4>
                            <h4 style ={{color: "white" ,fontSize:"18px" ,fontWeight:"200" ,paddingRight:"10vw"}}>as we are serksa, we’ll bring what is the best solutions for those who found difficult to do their self pace learning.</h4>
                            <Link to ="/development"><button><div style={{display:"flex", justifyContent:"space-evenly"}}><h4 style={{ marginTop:"1vh",fontSize:"1rem",paddingBottom:"5px"}}>Download App</h4><CloudImage setting={"auto"} imageName={"apple"} alt="" /></div></button></Link>
                            <Link to = "/development"><button><div style={{display:"flex", justifyContent:"space-evenly"}}><h4 style={{ marginTop:"1vh",fontSize:"1rem"}}>Download App</h4><CloudImage setting={"auto"}imageName={"playstore"} alt="" /></div></button></Link>
                            <div className ={style.contact}>
                               <Link to ={telegramLink}><button style={{width:"150px", backgroundColor:"#0081FE",border:"solid white",borderRadius:"15px",color:"white",fontSize:"1rem"}}>Contact Us</button></Link>
                                <div className ={style.contactMethods}>
                                    {Social.map((value,index)=>{
                                        return(
                                                <>
                                                    <Link key ={index } to ={value.link}><CloudImage  setting={"auto"} imageName={`${value.image}`} modelStyle={{width:value.style}}alt="" /></Link>
                                                </>
                                        )
                                    })}
                                </div>
                            </div>
                      </div>
                 </div>
            </div>
        </>
    )
}

const Social = [
    {
        link: "https://www.facebook.com/profile.php?id=61557592977225&mibextid=JRoKGi",
        image: "facebook",
        style : "30px",
    },
    {
        link: "https://t.me/serksa_admin",
        image: "telegram",
        style : "30px",
    },
    {
        link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqbzMMZrFVXDdRbpvwpgCxmJJnJqVhbfbVXZGKJHFBfcJhhKnfDgMBFXwplqbLXgRQzL",
        image: "SerkSa/email",
        style : "30px",
    },
    {
        link: "https://www.youtube.com/@MetaSeng55",
        image: "youtube",
        style : "40px",
    },
]