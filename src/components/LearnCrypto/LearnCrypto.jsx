import React from 'react';
import './LearnCrypto.css';
import Data1 from './LCFirstData.json';
import Data2 from './LCSecondData.json';
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
                            {
                                Data1.map(data =>{
                                    return (
                                        <div className='articleBox' key={data.id}> 
                                            <img src={data.img} alt='img' />
                                            <div className='articleContent'>
                                                <div className='articleContDiv'>
                                                    <p>{data.subhead}</p>
                                                    <p>{data.heading}</p>
                                                    <p>{data.description} </p>
                                                </div>
                                            </div>
                                        </div>  
                                    )
                                })
                            }
                        </div>

                    </div>

                    
                    {/* 2nd Sub Div */}
                    <div className='lcMidSecondDiv'>
                        {/* Mapped */}
                        
                        {
                                Data2.map(data =>{
                                    return (
                                        <div className='articleBox' key={data.id}> 
                                            <img src={data.img} alt='img' />
                                            <div className='articleContent'>
                                                <div className='articleContDiv'>
                                                    <p>{data.subhead}</p>
                                                    <p>{data.heading}</p>
                                                    <p>{data.description} </p>
                                                </div>
                                            </div>
                                        </div>  
                                    )
                                })
                            }

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