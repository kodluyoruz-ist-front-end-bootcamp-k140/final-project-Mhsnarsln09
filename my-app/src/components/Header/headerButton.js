import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { logout } from "../../firebase"

import "./header.css"
export function HeaderButton(){

  const { user } = useSelector(state => state.auth)

  const handleLogout = async () => {
    await logout()
   
  }


    return(
        <form className="d-flex" role="search" >
       {!user && <Link to="/auth/login" className="btn hdrbtn" style={{color:"white"}}>Login</Link >}
       {!user && <Link  to="/auth/signup" className="btn hdrbtn" style={{marginLeft:"5px",color:"white"}}>Sign Up</Link >}
       {user && <h6  style={{marginRight:"10px",paddingTop:"10px"}}>{user.email}</h6 >}
       {user && <Link onClick={handleLogout} to="/" className="btn hdrbtn" style={{marginLeft:"5px",color:"white"}}>Log Out</Link >}
       
      </form>
    )
}