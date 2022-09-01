import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" href="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
                {/* <Link className="nav-link active" aria-current="page" href="/about">About</Link> */}
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.addService}</a>
                {/* <Link className="nav-link active" aria-current="page" href="/">{props.addService}</Link> */}
              </li>
            </ul>
            {/* <div className="d-flex">
            <div className="btn btn-primary rounded mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height : '30px' , width : "30px"}}></div>
            <div className="btn btn-danger rounded mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height : '30px' , width : "30px"}}></div>
            <div className="btn btn-success rounded mx-2" onClick={()=>{props.toggleMode("success")}} style={{height : '30px' , width : "30px"}}></div>
            <div className="btn btn-warning rounded mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height : '30px' , width : "30px"}}></div>
            </div> */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox"  onClick={()=>{props.toggleMode(null)}}id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
 
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  addtxt: PropTypes.string
};
Navbar.defaultProps = {

  addService: "Service"                     // Default Props

}