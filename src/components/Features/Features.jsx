import React from 'react';
import './Features.css';
import fImg1 from '../../images/features/feature-image 1.png';
import FeatureData from './FeaturesData.json'

const Features = () => {
    return (
        <section className='ftParentDiv'>
            <div className='ftChildDiv'>
                {/* 2 Main Divs */}
                <div className='ftTopDiv'>
                    <p>CryptoCap Amazing Features</p>
                    <p>Explore sensational features to prepare your best investment in cryptocurrency</p>
                </div>

                {/* Mapped 4 Boxes */}
                <div className='ftBottomDiv'>
                    {
                        FeatureData.map(data =>{
                            return (
                              <div className="featureBox" key={data.id}>
                                <div className="featureInfo" >
                                  <div className="featureContent">
                                    <img src={data.img} alt="img" />
                                    <div className="featureContDiv">
                                      <p>{data.heading}</p>
                                      <p>{data.description}</p>
                                    </div>
                                  </div>
                                  <div className="featureLink">
                                    <a href="/">See Explained &rarr;</a>
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

export default Features