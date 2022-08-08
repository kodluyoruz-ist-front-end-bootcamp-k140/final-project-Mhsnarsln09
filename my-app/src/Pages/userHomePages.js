import { Header } from "../components/Header";

import "./page.css"


export function UserHomePages() {


    return (
        <div>
            <Header />
            <div className="imgpage1">
                <img src="https://149802973.v2.pressablecdn.com/wp-content/uploads/2021/01/hero-how-to-become-a-dietitian-390x390-1.jpg" alt="..." />
            </div>
            <div className="imgpage2">
                <img src="https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/diyet-hakkinda-merak-edilen-9-soru_5189_1.jpg" alt="..." />
            </div>
            <div className="textpage1">
                <h2>BMI Analysis</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis?</p>
            </div>
           



        </div>
    )
}