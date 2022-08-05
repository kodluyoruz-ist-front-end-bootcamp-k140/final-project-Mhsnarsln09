import { Link } from "react-router-dom"
export function HeaderButton(){
    return(
        <form className="d-flex" role="search">
        <Link to="/login" className="btn btn-outline-success" style={{color:"white"}}>Login</Link >
        <Link  to="/signup" className="btn btn-success" style={{marginLeft:"5px"}}>Sign Up</Link >
      </form>
    )
}