import React from 'react';
import './Navbar.css';
import languages from '../../icons/languages.svg';

const Navbar = () => {
    return (
      <>
        <header className="navMainDiv">
          <p className="navLogo">
            Crypto<span style={{ color: "#0FAE96" }}>Cap</span>
          </p>
          <div className="navCategories">
            <ul className="navUl">
              <li style={{color : 'var(--primary-color)'}}>
                  Home
              </li>
              <li>
                  Businesses
              </li>
              <li>
                  Trade
              </li>
              <li>
                  Market
              </li>
              <li>
                  Learn
              </li>
            </ul>
          </div>
          <div className='navRightSec'>
            {/* style={{backgroundColor : 'red'}} */}
            <img src={languages} alt="langIcon" />
            <select className='langSelect'>
              <option value="1">EN</option>
              <option value="2">AR</option>
              <option value="3">JA</option>
            </select>
            <button className='loginBtn' >Login</button>
          </div>
        </header>
      </>
    );
}

export default Navbar;

