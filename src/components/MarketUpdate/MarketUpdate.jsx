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
                        <p>TRADE</p>
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
                                                <div style={{padding: '4px 10px 4px 10px'}}>{data.symbol}</div>
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
                {/*  
                <table className="table">
                <thead>
                    <tr className="tHeadRow" >
                    <th>NO</th>
                    <th>NAME</th>
                    <th>LAST PRICE</th>
                    <th>CHANGE</th>
                    <th>MARKET STATS</th>
                    <th>TRADE</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 7 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array.from({ length: 6 }).map((_, colIndex) => (
                        <td key={colIndex}>
                            Row {rowIndex + 1}, Col {colIndex + 1}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>
                */}

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