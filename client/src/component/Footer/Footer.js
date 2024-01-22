import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
  
  <footer class="footer-section mt-4">
    
    <div class="copyright-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div class="copyright-text">
                        <p className='fontStyle'>Copyright &copy; 2023, All Right Reserved  </p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div class="footer-menu">
                        <ul className='li-item'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                            <li><a href="/about">About Us</a></li>
                                                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

  </div>
  )
}

export default Footer