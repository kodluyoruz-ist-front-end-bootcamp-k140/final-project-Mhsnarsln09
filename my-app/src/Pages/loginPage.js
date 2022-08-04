import { Link } from "react-router-dom"
import "./page.css"

export function LoginPage() {
    return (
        <div className="loginpage">
            <h1 className="loginheader">MyNutritionist</h1>
            <div className="loginformbox">
                <form className="loginform" >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control lgnfrm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control lgnfrm" id="exampleInputPassword1" />
                    </div>
                </form>
                 <button 
                 type="submit" className="btn lgnbtn" >Log In</button>
            </div>
            <div className="signupbox">
                <h5>Don't have an account?<Link to="signup"><span style={{color:"#519259"}}> Sign Up</span></Link></h5>
            </div>
       
        </div>
        
    )
}