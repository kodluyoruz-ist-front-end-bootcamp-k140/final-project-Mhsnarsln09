import "./style.css"
import { Link } from "react-router-dom"


export function AuthFalse() {
   
    return (
        <div>
            <div className="authFalse">
                <h2 className="hph2">MyNutritionist</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis quasi reprehenderit soluta. Mollitia minima illo placeat aspernatur provident aperiam pariatur fugiat praesentium laboriosam ducimus?</p>
                <div className="authfalsebtn" >
                <Link to="/auth/login" className="btn btn-success " style={{color:"white"}}>Login</Link >
                <Link  to="/auth/signup" className="btn btn-success " style={{marginLeft:"5px",color:"white"}}>Sign Up</Link >
                </div>
            </div>
        </div>

    )
}