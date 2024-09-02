import "../Error/Error.scss"
import {Link} from "react-router-dom";
import CloudImage from "../../model/Image.jsx"
export default function ErrorHandle(){
    const telegramLink = "https://t.me/serksa_admin"
    return(
           <>
             <div className ="container">
                <div className = "errorText">
                    <h4>Oops !</h4>
                    <h4>App Is Under Development</h4>
                    <h4>Our app is still under development by the developer, contact us for more info!</h4>
                    <div className ="button">
                         <Link to ="/"><button>Home</button></Link>
                         <Link to ={telegramLink}><button>Contact</button></Link>
                    </div>
                </div>
                <div className ="errorImage">
                  <CloudImage setting={"auto"} imageName={"SerkSa/error"} modelStyle={{width:"500px",height:"500px"}}/>
                </div>
             </div>
           </>
    )
}