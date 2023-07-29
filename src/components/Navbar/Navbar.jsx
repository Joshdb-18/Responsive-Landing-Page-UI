import React from 'react';
import './Navbar.css';
import languages from '../../icons/languages.svg';

const Navbar = () => {
    return (
      <>
        <header className="navParentDiv">
          <div className='navChildDiv'>
            {/* 3 Main Divs */}

            <div className='navLeftLogo'>
              <p>Trading<span style={{ color: "var(--primary-color)" }}>App</span></p>
            </div>

            <div className="navItemsDiv">
              <div className="navItem" style={{color: 'var(--primary-color)'}}>Home</div>
              <div className="navItem">Businesses</div>
              <div className="navItem">Trade</div>
              <div className="navItem">Market</div>
              <div className="navItem">Learn</div>
            </div>

            <div className='navRightSec'>
              <div className='langSection'>
                <img src={languages} alt="langIcon" />
                <select className='langSelect'>
                  <option value="1">EN</option>
                  <option value="2">AR</option>
                  <option value="3">JA</option>
                </select>
              </div>

              <button className='loginBtn' >Login</button>
            </div>
          </div>

          {/* Mobile Nav */}
          <nav className="mobileNav">
            <div className='mobLogo'>
              <p>Crypto<span style={{ color: "var(--primary-color)" }}>Cap</span></p>
            </div>
            <i className="bi bi-list" style={{fontSize : '3rem'}}></i>
            
          </nav>


        </header>


      </>
    );
}

export default Navbar;

