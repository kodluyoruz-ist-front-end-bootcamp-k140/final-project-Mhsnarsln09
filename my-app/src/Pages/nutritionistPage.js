import { Header } from "../components/Header";
import { Chat } from "../components/Message/chat";
import "./page.css"

export function NutritionistPage() {

    return (
        <div className="nutpag">
          
            <Header />
            <div className="container nutpage">
            <div className="logodiv" style={{backgroundColor:"white", width:"85%", height:"100vh"}}>
                <img src="logo.png" alt="" />
            
               <Chat/> 
               </div>
            </div>
            
        </div>
    )
}