import React from "react"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#7DCE13"}} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MyNutritionist</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About Us</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link to="/" className="btn btn-outline-success" style={{color:"white"}}>Login</Link >
        <Link  to="/" className="btn btn-success" style={{marginLeft:"5px"}}>Sign Up</Link >
      </form>
    </div>
  </div>
</nav>
  )
}