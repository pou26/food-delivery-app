import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="menu">
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent">
  <div className="container-fluid">

  <Link className="cafe-logo" aria-current="page" to="/">
  <img src="..\image\circle-logo.png" className="d-block w-100" alt="..." />
  </Link>


    {/* <Link className="navbar-brand fs-1 fst-italic" to="/">Hut Tea Matim</Link> */}
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">SignUp</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">Pricing</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

