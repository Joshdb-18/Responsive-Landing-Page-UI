import React from 'react';
import './LearnCrypto.css';
import img4 from '.././../images/LearnCrypto/img-4.png'
const LearnCrypto = () => {
    return (
        <section className='lcParentDiv'>
            <div className='lcChildDiv'>
                {/* 3 Main Divs */}
                <div className='lcTopDiv'>
                    <p>Learn About Cryptocurrency</p>
                    <p>Learn all about cryptocurrency to start investing</p>
                </div>

                <div className='lcMidDiv'>
                    {/* 2 Sub Divs */}

                    {/* 1st Sub Div */}
                    <div className='lcMidFirstDiv'>
                        {/* 2 Sub Divs */}
                        <div className='midFirstDivLeft'>
                            <div className='midFirstDivLeftHead'>
                                <p>All about Investing in NFTs and related risks</p>
                                <p>TIPS & TRICKS</p>
                            </div>
                        </div>

                        <div className='midFirstDivRight'>
                            <div className='articleBox'> 
                                <img src={img4} alt='img' />
                                <div className='articleContent'>
                                    <div className='articleContDiv'>
                                        <p>TIPS & TRICKS</p>
                                        <p>How to setup crypto wallet in your account</p>
                                        <p>A crypto wallet is a place where you can securely keep your crypto.. </p>
                                    </div>
                                </div>
                            </div> 

                            <div className='articleBox'> 
                                <img src={img4} alt='img' />
                                <div className='articleContent'>
                                    <div className='articleContDiv'>
                                        <p>TIPS & TRICKS</p>
                                        <p>How to setup crypto wallet in your account</p>
                                        <p>A crypto wallet is a place where you can securely keep your crypto.. </p>
                                    </div>
                                </div>
                            </div> 
                        </div>

                    </div>

                    
                    {/* 2nd Sub Div */}
                    <div className='lcMidSecondDiv'>
                        {/* 1 */}
                        <div className='articleBox'> 
                            <img src={img4} alt='img' />
                            <div className='articleContent'>
                                <div className='articleContDiv'>
                                    <p>TIPS & TRICKS</p>
                                    <p>How to setup crypto wallet in your account</p>
                                    <p>A crypto wallet is a place where you can securely keep your crypto.. </p>
                                </div>
                            </div>
                        </div> 

                        {/* 2 */}
                        <div className='articleBox'> 
                            <img src={img4} alt='img' />
                            <div className='articleContent'>
                                <div className='articleContDiv'>
                                    <p>TIPS & TRICKS</p>
                                    <p>How to setup crypto wallet in your account</p>
                                    <p>A crypto wallet is a place where you can securely keep your crypto.. </p>
                                </div>
                            </div>
                        </div> 

                        {/* 3 */}
                        <div className='articleBox'> 
                            <img src={img4} alt='img' />
                            <div className='articleContent'>
                                <div className='articleContDiv'>
                                    <p>TIPS & TRICKS</p>
                                    <p>How to setup crypto wallet in your account</p>
                                    <p>A crypto wallet is a place where you can securely keep your crypto.. </p>
                                </div>
                            </div>
                        </div> 

                        {/* 4 */}
                        <div className='articleBox'> 
                            <img src={img4} alt='img' />
                            <div className='articleContent'>
                                <div className='articleContDiv'>
                                    <p>TIPS & TRICKS</p>
                                    <p>How to setup crypto wallet in your account</p>
                                    <p>A crypto wallet is a place where you can securely keep your crypto.. </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className='lcBottomDiv'>
                    <a href='/'>See All Articles</a>
                </div>
            </div>
        </section>
    )
}

export default LearnCrypto