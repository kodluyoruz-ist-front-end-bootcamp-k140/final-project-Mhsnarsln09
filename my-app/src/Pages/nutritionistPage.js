import { Header } from "../components/Header";
import { Chat } from "../components/Message/chat";
import "./page.css"

export function NutritionistPage() {

    return (
        <div className="nutpag">
           <div className="logodiv">
                <img src="logo.png" alt="" />
            </div>
            <Header />
            <div className="container nutpage">
               <Chat/> 
            </div>
            
        </div>
    )
}