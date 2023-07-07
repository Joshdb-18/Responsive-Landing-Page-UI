import React from 'react';
import './MarketTrend.css';
import arrowIcon from '../../icons/arrow.svg';
import btc from '../../images/marketTrend/btc-ic.png';
import btcChart from '../../images/marketTrend/btc-chart-state 1.png';



const MarketTrend = () => {
    return (
        <section className='mtParentDiv'>
            <div className='mtChildDiv'>
                <div className='mtTopDiv'>
                    <p>Market Trend</p>
                </div>
                {/* 4 Coins Category Boxes */}
                <div className='mtBottomDiv'>
                    {/* 1 */}
                    <div className='mtCoinBox'> 
                        <div className='mtCoinInfo'>
                            <div className='mtCoinInfoChild'>
                                <img src={btc} alt='img' />
                                <p className='mtCInfoName'>BTC</p>
                                <p className='mtCInfoFull'>BITCOIN</p>
                            </div>
                            <div className='arrowDiv'>
                                <img src={arrowIcon} alt='arrow'/>
                            </div>
                        </div>
                        <hr/>
                        <div className='mtCoinValue'>
                            <div className='mtCoinValueChild'>
                                <p>$56,623.54</p>
                                <p>1.41%</p>
                            </div>
                            <div className='chartDiv'>
                                <img src={btcChart} alt='arrow'/>
                            </div>
                        </div>
                    </div> 

                    {/* 2 */}
                    <div className='mtCoinBox'> 
                        <div className='mtCoinInfo'>
                            <div className='mtCoinInfoChild'>
                                <img src={btc} alt='img' />
                                <p className='mtCInfoName'>BTC</p>
                                <p className='mtCInfoFull'>BITCOIN</p>
                            </div>
                            <div className='arrowDiv'>
                                <img src={arrowIcon} alt='arrow'/>
                            </div>
                        </div>
                        <hr/>
                        <div className='mtCoinValue'>
                            <div className='mtCoinValueChild'>
                                <p>$56,623.54</p>
                                <p>1.41%</p>
                            </div>
                            <div className='chartDiv'>
                                <img src={btcChart} alt='arrow'/>
                            </div>
                        </div>
                    </div> 

                    {/* 3 */}
                    <div className='mtCoinBox'> 
                        <div className='mtCoinInfo'>
                            <div className='mtCoinInfoChild'>
                                <img src={btc} alt='img' />
                                <p className='mtCInfoName'>BTC</p>
                                <p className='mtCInfoFull'>BITCOIN</p>
                            </div>
                            <div className='arrowDiv'>
                                <img src={arrowIcon} alt='arrow'/>
                            </div>
                        </div>
                        <hr/>
                        <div className='mtCoinValue'>
                            <div className='mtCoinValueChild'>
                                <p>$56,623.54</p>
                                <p>1.41%</p>
                            </div>
                            <div className='chartDiv'>
                                <img src={btcChart} alt='arrow'/>
                            </div>
                        </div>
                    </div> 

                    {/* 4 */}
                    <div className='mtCoinBox'> 
                        <div className='mtCoinInfo'>
                            <div className='mtCoinInfoChild'>
                                <img src={btc} alt='img' />
                                <p className='mtCInfoName'>BTC</p>
                                <p className='mtCInfoFull'>BITCOIN</p>
                            </div>
                            <div className='arrowDiv'>
                                <img src={arrowIcon} alt='arrow'/>
                            </div>
                        </div>
                        <hr/>
                        <div className='mtCoinValue'>
                            <div className='mtCoinValueChild'>
                                <p>$56,623.54</p>
                                <p>1.41%</p>
                            </div>
                            <div className='chartDiv'>
                                <img src={btcChart} alt='arrow'/>
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
        </section>
    )
}

export default MarketTrend;