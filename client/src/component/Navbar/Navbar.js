import React from 'react'
import { Link } from 'react-router-dom'
import { currentUser } from '../../util/currentUser'
import logo from './../../images/logo.png'
import './Navbar.css'
function Navbar() {
    function logOut() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login'
      }
    
      function loginpage()
      {
        window.location.reload();
      }
    function btnview() {
        if (!currentUser) {
          return (
            <>
              <h6 className='me-2 text-light nav-logout' onClick={loginpage} >Login  <span><i class="fa-solid fa-right-from-bracket"></i></span> </h6>
            </>
          )
        }
        else {
          return (
            <>
              <h6 className='me-2 text-light nav-logout' onClick={logOut}>Logout  <span><i class="fa-solid fa-right-from-bracket"></i></span> </h6>
    
            </>
          )
    
        }
      }

  return (
    <div> <div>
    <nav class="navbar navbar-expand-lg navbar-dark background mb-4 navcurv positionskty">
      <div class="container-fluid">
       <a class="navbar-brand" href="#"><img src={logo} className="img-fluid logoImg   me-2" /> <span className='nav-title'>contactApp</span></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link " aria-current="page" href="#">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/profile" className='nav-link' >Profile</Link>
            </li>
            <li class="nav-item">
              <Link to="/contactus" className='nav-link' > Contact Us </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className='nav-link' > About Us </Link>
            </li>
            
          </ul>
          <form class="d-flex align-items-center">
            {
              btnview()
            }
          </form>
        </div>
      </div>
    </nav>
  </div>
  </div>
  )
}

export default Navbar