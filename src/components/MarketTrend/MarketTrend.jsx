import React from 'react';
import './MarketTrend.css';
import arrowIcon from '../../icons/arrow.svg';
import Data from './MTData.json';


const MarketTrend = () => {
    return (
        <section className='mtParentDiv'>
            <div className='mtChildDiv'>
                <div className='mtTopDiv'>
                    <p>Market Trend</p>
                </div>

                {/* Mapped 4 Coins Boxes */}
                <div className='mtBottomDiv'>
                    {
                        Data.map(info =>{
                            return (
                                <div className='mtCoinBox' key={info.id}> 
                                    <div className='mtCoinInfo'>
                                        <div className='mtCoinInfoChild'>
                                            <img src={info.img} alt='img' />
                                            <p className='mtCInfoName'>{info.symbol}</p>
                                            <p className='mtCInfoFull'>{info.name}</p>
                                        </div>
                                        
                                        <div className='arrowDiv'>
                                            <img src={arrowIcon} alt='arrow'/>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className='mtCoinValue'>
                                        <div className='mtCoinValueChild'>
                                            <p>{info.value}</p>
                                            <p>{info.percent}</p>
                                        </div>
                                        <div className='chartDiv'>
                                            <img src={info.chart} alt='arrow'/>
                                        </div>
                                    </div>
                                </div> 
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default MarketTrend;