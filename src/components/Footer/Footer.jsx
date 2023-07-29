import React from 'react';
import './Footer.css';
import insta from '../../icons/instagram-ic.svg'
import fb from '../../icons/facebook-ic.svg'
import twi from '../../icons/twitter-ic.svg'
import you from '../../icons/youtube-ic.svg'

const Footer = () => {
    return (
        <section className='footParent'>
            <div className='footChild'>
                {/* 2 Main Divs */}

                {/* 1 */}
                <div className='footLeftDiv'>
                    <div className='footLeftLogo'>
                        <p>Trading<span style={{ color: "var(--primary-color)" }}>App</span></p>
                    </div>

                    <div className='footLeftSoCo'>
                        <div className='socialDiv'>
                            <img src={insta} alt='img' />
                            <img src={fb} alt='img' />
                            <img src={twi} alt='img' />
                            <img src={you} alt='img' />
                        </div>

                        <div className='copyright'>2023 CoinMarketCap. All rights reserved</div>
                    </div>
                </div>

                {/* 2 */}
                <div className='footRightDiv'>
                    {/* 3 Sub Divs */}
                    <div className='footRightSubDiv'>
                        <div className='footTitle'>About Us</div>
                        <div className='footMenu'>
                            <div>About</div>
                            <div>Careers</div>
                            <div>Blog</div>
                            <div>Legal & privacy</div>
                        </div>
                    </div>

                    <div className='footRightSubDiv'>
                        <div className='footTitle'>Services</div>
                        <div className='footMenu'>
                            <div>Aplications</div>
                            <div>Buy Crypto</div>
                            <div>Affilliate</div>
                            <div>Institutional Services</div>
                        </div>
                    </div>

                    <div className='footRightSubDiv'>
                        <div className='footTitle'>Learn</div>
                        <div className='footMenu'>
                            <div>What is Cryptocurency?</div>
                            <div>Crypto Basic</div>
                            <div>Tips and Tutorials</div>
                            <div>Market Update</div>
                        </div>
                    </div>
                </div>
                <div className='Mobcopyright'>2023 CoinMarketCap. All rights reserved</div>
            </div>
        </section>
    )
}

export default Footer