import React from 'react';
import s_b_img from '../../images/s_b_img.png';
import './StartAndBuild.css';

const StartAndBuild = () => {
    return (
        <section className='sbParentDiv'>
            <div className='sbChildDiv'>
                <div className='sbLeftDiv'>
                    <div className='sbLeftChildDiv'>
                        <div>Start and Build Your Crypto Portfolio Here</div>
                        <div>Only at CryptoCap, you can build a good portfolio and learn <br/>
                        best practices about cryptocurrency.</div>
                    </div>
                    <button className='sbBtn'>Get Started</button>
                </div>
                <div className='sbRightDiv'>
                    <div className='sbImgDiv'>
                        <img src={s_b_img} alt='img'/>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default StartAndBuild