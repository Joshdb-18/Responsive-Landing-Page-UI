import React from 'react';
import './GetStarted.css';
import gs1Img from '../../images/getStarted-1.png';
import gs2Img from '../../images/getStarted-2.png';
import gs3Img from '../../images/getStarted-3.png';

const GetStarted = () => {
    return (
        <section className='gsParentDiv'>
            <div className= 'gsChildDiv'>
                {/* 2 Divs */}
                <div className='gsLeft'>
                    {/* 2 Divs */}
                    <div className='geText'>
                        <p className='gsTitle'>How To Get Started</p>
                        <p className='gsSubTitle'>Simple and easy way to start your investment <br/> in cryptocurrency</p>
                        <p className='gsSubTitleMob'>Simple and easy way to start your investment in cryptocurrency</p>
                    </div>
                    <div className='gsBtn'>
                        <button>Get Started</button>
                    </div>
                </div>

                <div className='gsRight'>
                    {/* Div 1 */}
                    <div className='gsCatBox'>
                        <img className='gsImg' src={gs1Img} alt='img' />
                        <div className='gsCatText'>
                            <p>Create Your Account</p>
                            <p>Your account and personal identity are guaranteed safe.</p>
                        </div>
                    </div>

                    {/* Div 2 */}
                    <div className='gsCatBox'>
                        <img className='gsImg' src={gs2Img} alt='img' />
                        <div className='gsCatText'>
                            <p>Connect Bank Account</p>
                            <p>Connect the bank account to start transactions.</p>
                        </div>
                    </div>

                    {/* Div 3 */}
                    <div className='gsCatBox'>
                        <img className='gsImg' src={gs3Img} alt='img' />
                        <div className='gsCatText'>
                            <p>Start Build Portfolio</p>
                            <p>Buy and sell popular currencies and keep track of them.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GetStarted