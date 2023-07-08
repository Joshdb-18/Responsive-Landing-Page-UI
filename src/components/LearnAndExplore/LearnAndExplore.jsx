import React from 'react';
import './LearnAndExplore.css';

const LearnAndExplore = () => {
    return (
        <section className='leParentDiv'>
            <div className= 'leChildDiv'>
                <div className='leContent'>
                    <p className='leTitle'>New In Cryptocurrency?</p>
                    <p className='leSubTitle'>We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.</p>
                </div>
                <button className='leBtn'>Learn & Explore Now</button>
            </div>
        </section>
    )
}

export default LearnAndExplore;