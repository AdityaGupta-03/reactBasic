import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom"
export default function Navbar(props) {
  const location = useLocation();
  let btnText = (props.mode==="light") ? "dark" : "light";

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"? "active" : ""}`} aria-current="page" to="/">Form</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="rounded bg-primary mx-2" onClick={()=>{props.toggle("primary")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
              <div className="rounded bg-secondary mx-2" onClick={()=>{props.toggle("secondary")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
              <div className="rounded bg-warning mx-2" onClick={()=>{props.toggle("warning")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
              <div className="rounded bg-success mx-2" onClick={()=>{props.toggle("success")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
              <div className="rounded bg-danger mx-2" onClick={()=>{props.toggle("danger")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
            </div>
            <div className="form-check form-switch mx-5">
              <label className={`form-check-label text-${btnText}`} htmlFor="switch">Enable {btnText} Mode</label>
              {/* Using Toggle function which is defined in App class to toggle the mode of the site*/}
              <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={()=>{props.toggle(null)}}/>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

// What type of data is to be passed in props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

// Default arguements of the props
Navbar.defaultProps = {
  title: "Set your title here",
  about: "About"
}