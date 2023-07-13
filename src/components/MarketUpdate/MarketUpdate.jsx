import React from 'react';
import './MarketUpdate.css';
import searchIc from '../../icons/search.png';
import Data from './MUData.json'

const MarketUpdate = () => {
    return (
      <section className="muParentDiv">
        <div className="muChildDiv">
            {/* 4 Main Divs */}

            {/* * 1 * */}
            <div className="muHeader">
                <p>Market Update</p>
            </div>

            {/* * 2 * */}
            <div className="muCategoryDiv">
                {/* 2 Sub Divs */}

                <div className="muCatTitle">
                <p>Cryptocurrency Categories</p>
                </div>

                <div className="muCatSubDiv">
                {/* left */}
                <div className="muCatSubLeft">
                    <p>Popular</p>
                    <p>Metaverse</p>
                    <p>Entertainment</p>
                    <p>Energy</p>
                    <p>Gaming</p>
                    <p>Music</p>
                    <p>See All 12+</p>
                </div>

                {/* Right */}
                <div className="muCatSubRight">
                    <div className="searchDiv">
                    <img src={searchIc} alt="img" />
                    <p>Search Coin</p>
                    </div>
                </div>
                </div>
            </div>

            {/* * 3 * */}
            <div className="muTableDiv">
                {/* Head */}
                <div className='tHeadDiv'>
                    <div className='tHeadLeft'>
                        <p>NO &nbsp;&nbsp;</p>
                        <p>NAME</p>
                    </div>


                    <div className='tHeadRight'>
                        <p>LAST PRICE</p>
                        <p>CHANGE</p>
                        <p>MARKET STATS</p>
                        <p style={{marginRight : '1vw'}}>TRADE</p>
                    </div>
                </div>

                {/* Body */}

                {
                    Data.map(data =>{
                        return (
                            <div className='tBodyDiv' key={data.id}>
                                <div className='tBodyLeft'>
                                    {/* 2 Sub Divs */}
                                    <div className='tBodyNo'>
                                            <p>{data.no}</p>
                                    </div>

                                    <div className='tBodyName'>
                                        <div className='tBodyCoinsDiv'>
                                            <img src={data.img} alt='img'/>
                                            <div className='tBodyCoinsData'>
                                                <div>{data.name}</div>
                                                <div className="vl"></div>
                                                <div style={{padding: '4px 7px'}}>{data.symbol}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='tBodyRight'>
                                    <p>{data.value}</p>
                                    <p>{data.percent}</p>
                                    <img src={data.chart} alt='img'/>
                                    <button>Trade</button>
                                </div>
                            </div>
                        )
                    })  
                }
            </div>

            {/* * 4 * */}
            <div className="muLink">
                <a href="/">See All Coins</a>
            </div>
        </div>
      </section>
    );
}

export default MarketUpdate;