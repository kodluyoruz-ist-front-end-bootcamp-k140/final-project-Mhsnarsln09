import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { register } from "../firebase"
import "./page.css"

export function RegisterPage() {
    const navigate = useNavigate()

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async e =>{
        e.preventDefault()
        
        const user = await register(email, password)
        console.log(user)
    }


    return (
        <div className="loginpage">
            <h1 className="loginheader">MyNutritionist</h1>
            <div className="registerformbox">
                <form className="registerform" onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="regInputEmail1" className="form-label">Email address</label>
                        <input  type="email" className="form-control lgnfrm" defaultValue={email} onChange={e=>setEmail(e.target.value)} />
                        <div id="regemailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="regInputPassword1" className="form-label">Password</label>
                        <input  type="password" className="form-control lgnfrm" defaultValue={password} onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <button disabled ={!email || !password}
                    type="submit" className="btn btn-success lgnbtn" >Sıgn Up</button>
                </form>
                 
                 <p className="regh5">Already have an account? <span  onClick={()=>navigate(`/login`)}
                 >Log In</span ></p>
            </div>
        </div>
        
    )
}