
import { Link } from "react-router-dom"
import "./page.css"

export function RegisterPage() {
    return (
        <div className="loginpage">
            <h1 className="loginheader">MyNutritionist</h1>
            <div className="registerformbox">
                <form className="registerform" >
                <div className="mb-3">
                        <label htmlFor="regInputEmail1" className="form-label">User Name</label>
                        <input type="text" className="form-control lgnfrm" id="regInputtext" aria-describedby="regmailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="regInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control lgnfrm" id="regInputEmail1" aria-describedby="regemailHelp" />
                        <div id="regemailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="regInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control lgnfrm" id="regInputPassword1" />
                    </div>
                </form>
                 <button 
                 type="submit" className="btn lgnbtn" >Sıgn Up</button>
                 <p className="regh5">Already have an account? <Link to="/">Log In</Link> </p>
            </div>
        </div>
        
    )
}