import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../firebase"
import {logout as logoutHandle} from "../../store/auth"
import "./header.css"
export function HeaderButton(){
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const handleLogout = async () => {
    await logout()
    dispatch(logoutHandle())
  }


    return(
        <form className="d-flex" role="search" >
       {!user && <Link to="/auth/login" className="btn btn-info" style={{color:"white"}}>Login</Link >}
       {!user && <Link  to="/auth/signup" className="btn btn-info" style={{marginLeft:"5px",color:"white"}}>Sign Up</Link >}
       {user && <h6  style={{marginRight:"10px",paddingTop:"10px"}}>{user.email}</h6 >}
       {user && <Link onClick={handleLogout} to="/auth/login" className="btn btn-info" style={{marginLeft:"5px",color:"white"}}>Log Out</Link >}
       
      </form>
    )
}