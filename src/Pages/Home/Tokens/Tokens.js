import React from 'react';
import './Tokens.css';

import token_ellipse from '../../Images/our_pages_Ellipse.png';
import snow1 from '../../Images/snow1.svg';
import snow2 from '../../Images/snow2.svg';
import snow3 from '../../Images/snow3.svg';

const Tokens = () => {
    return (
        <div className='fullContainer'>
            <div className="containerDiv">

                <div className="token_section text-center text-white position-relative">
                    <div className="d-flex align-items-center justify-content-center snow-animation animated banner_home_data2_addedOne our_project_snow_animation token_top_stars">
                        <div className="snowflake">
                            <img src={snow3} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow2} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow3} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow2} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow3} alt="" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center snow-animation animated banner_home_data2_addedOne token_bottom_stars">
                        <div className="snowflake">
                            <img src={snow3} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow2} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow3} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow1} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow2} alt="" />
                        </div>
                        <div className="snowflake">
                            <img src={snow3} alt="" />
                        </div>
                    </div>
                    <div className="token_ellipse">
                        <img src={token_ellipse} alt="" />
                    </div>
                    <h2>
                        Non-Fungible Property Tokens <span>(NFPT)</span>
                    </h2>
                    <p>
                        Crypto Resorts is taking the next step in the evolution of NFTs by introducing a way to turn digital ownership into physical.
                    </p>
                    <div className="learn_more-btn">
                        <a href="/#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokens;