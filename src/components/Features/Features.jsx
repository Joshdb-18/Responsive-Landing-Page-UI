import React from 'react';
import './Features.css';
import fImg1 from '../../images/features/feature-image 1.png';
import rightArrow from '../../icons/right-arrow.svg';

const Features = () => {
    return (
        <section className='ftParentDiv'>
            <div className='ftChildDiv'>
                <div className='ftTopDiv'>
                    <p>CryptoCap Amazing Features</p>
                    <p>Explore sensational features to prepare your best investment in cryptocurrency</p>
                </div>
                {/* 4 Boxes */}
                <div className='ftBottomDiv'>
                    {/* 1 */}
                    <div className='featureBox'> 
                        <div className='featureInfo'>
                            <div className='featureContent'>
                                <img src={fImg1} alt='img' />
                                <div className='featureContDiv'>
                                    <p>Manage Portfolio</p>
                                    <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                                </div>
                            </div>
                            <div className='featureLink'>
                                <a href='/'>See Explained &rarr;</a>
                                {/* <img src={rightArrow} alt='img' /> */}
                            </div>
                        </div>
                    </div> 

                    {/* 2 */}
                    <div className='featureBox'> 
                        <div className='featureInfo'>
                            <div className='featureContent'>
                                <img src={fImg1} alt='img' />
                                <div className='featureContDiv'>
                                    <p>Manage Portfolio</p>
                                    <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                                </div>
                            </div>
                            <div className='featureLink'>
                                <a href='/'>See Explained &rarr;</a>
                                {/* <img src={rightArrow} alt='img' /> */}
                            </div>
                        </div>
                    </div> 

                    {/* 3 */}
                    <div className='featureBox'> 
                        <div className='featureInfo'>
                            <div className='featureContent'>
                                <img src={fImg1} alt='img' />
                                <div className='featureContDiv'>
                                    <p>Manage Portfolio</p>
                                    <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                                </div>
                            </div>
                            <div className='featureLink'>
                                <a href='/'>See Explained &rarr;</a>
                                {/* <img src={rightArrow} alt='img' /> */}
                            </div>
                        </div>
                    </div> 

                    {/* 4 */}
                    <div className='featureBox'> 
                        <div className='featureInfo'>
                            <div className='featureContent'>
                                <img src={fImg1} alt='img' />
                                <div className='featureContDiv'>
                                    <p>Manage Portfolio</p>
                                    <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                                </div>
                            </div>
                            <div className='featureLink'>
                                <a href='/'>See Explained &rarr;</a>
                                {/* <img src={rightArrow} alt='img' /> */}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Features