import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../firebase"
import "./page.css"

export function LoginPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async e =>{
        e.preventDefault()
        
        const user = await login(email, password)
        console.log(user)
    }
    return (
        <div className="loginpage">
            <h1 className="loginheader">MyNutritionist</h1>
            <div className="loginformbox">
                <form className="loginform" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control lgnfrm" defaultValue={email} onChange={e=>setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control lgnfrm" defaultValue={password} onChange={e=>setPassword(e.target.value)} />
                    </div>
                 <button disabled ={!email || !password}
                 type="submit" className="btn btn-success lgnbtn" >Log In</button>
                 </form>
            </div>
             
            <div className="signupbox">
                <h5>Don't have an account?<span onClick={()=>navigate(`/signup`)}
                style={{color:"#519259",cursor:"pointer"}}> Sign Up</span></h5>
            </div>
        </div>
      
    )
}