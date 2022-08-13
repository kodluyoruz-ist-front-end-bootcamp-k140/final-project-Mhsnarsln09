import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HeaderButton } from "./headerButton"


export function Header() {
 
  const { user } = useSelector(state => state.auth)
  return (
    <nav className="navbar bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><h5 style={{color:"#2C3333"}}>MyNutritionist</h5></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{color:"#2C3333"}}>MyNutritionist</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item mb-1">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item mb-1 ">
            <Link className="nav-link " to="/about">About Us</Link>
          </li>
          <li className="nav-item mb-3 ">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          
          <hr />
          <li className="nav-item mt-2 mb-1">
            <Link className="nav-link" aria-current="page" to="/bmi-calculator">BMI Analysis</Link>
          </li>
         {user && <li className="nav-item mb-1 ">
            <Link className="nav-link " to="/nutritionist">Nutritionist</Link>
          </li>}
          {user && <li className="nav-item mb-1 ">
            <Link className="nav-link" to="/training">Training</Link>
          </li>}
          {user && <li className="nav-item mb-1 ">
            <Link className="nav-link" to="/my-diet-plan">My Diet Plan</Link>
          </li>}
        </ul>
        
      </div>
      <div className="lgnrgstr">
         <HeaderButton/>
      </div>
     
    </div>
    
  </div>
</nav>
  )
}