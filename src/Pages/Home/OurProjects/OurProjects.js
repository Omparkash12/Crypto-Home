import React from 'react';
import './OurProjects.css';

// Images
import ourProjectImg1 from '../../Images/ourProjectImg1.png';
import ourProjectImg2 from '../../Images/ourProjectImg2.png';
import ourProjectImg3 from '../../Images/ourProjectImg3.png';
import projectPlayBtn from '../../Images/projectPlayBtn.svg';
import storyPlanetRing1 from '../../Images/storyPlanetRing1.png';
import storyPlanetRing2 from '../../Images/storyPlanetRing2.png';

import snow1 from '../../Images/snow1.svg';
import snow2 from '../../Images/snow2.svg';
import snow3 from '../../Images/snow3.svg';

const OurProjects = () => {
    return (
        <div className='fullContainer position-relative overflow-hidden'>
            <div className="animation_circle1"><img src={storyPlanetRing1} alt="" /></div>
            <div className="animation_circle2"><img src={storyPlanetRing2} alt="" /></div>
            <div className="side_animation"></div>
            <div className="col-lg-5  d-flex align-items-center justify-content-center snow-animation animated banner_home_data2_addedOne our_project_snow_animation">
                <div className="snowflake">
                    <img src={snow1} alt="" />
                </div>
                <div className="snowflake">
                    <img src={snow2} alt="" />
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
                    <img src={snow2} alt="" />
                </div>
                <div className="snowflake">
                    <img src={snow1} alt="" />
                </div>
                <div className="snowflake">
                    <img src={snow3} alt="" />
                </div>
                <div className="snowflake">
                    <img src={snow2} alt="" />
                </div>
                <div className="snowflake">
                    <img src={snow1} alt="" />
                </div>
            </div>
            <div className="containerDiv text-white">
                <div className="our_project_section">
                    <div className="project_heading d-flex align-items-center justify-content-between">
                        <div className="heading_text1">
                            <h5>ASSETS</h5>
                            <h2>Our Projects</h2>
                        </div>

                        <div className="heading_text2 desktop_view_data">
                            <a href="/#">Explore All</a>
                        </div>
                    </div>

                    <div className="row data_row m-0">
                        <div className="col-lg-4 col-md-12 col-sm-12 our_project_datas">
                            <div className="ourProjectImg1">
                                <img src={ourProjectImg1} alt="" />
                            </div>
                            <div className="image_data1">
                                <div className="heartIcon">
                                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.3468 4.91832C25.9278 3.95587 25.3238 3.08369 24.5684 2.35064C23.8125 1.61539 22.9213 1.0311 21.9431 0.62954C20.9289 0.211494 19.841 -0.0024864 18.7428 2.1797e-05C17.202 2.1797e-05 15.6987 0.418667 14.3923 1.20944C14.0797 1.39861 13.7828 1.60638 13.5015 1.83276C13.2203 1.60638 12.9234 1.39861 12.6108 1.20944C11.3044 0.418667 9.80112 2.1797e-05 8.26032 2.1797e-05C7.15082 2.1797e-05 6.0757 0.210895 5.05995 0.62954C4.07859 1.03268 3.19412 1.61258 2.43465 2.35064C1.67831 3.08287 1.07412 3.95524 0.656325 4.91832C0.2219 5.91997 0 6.98364 0 8.07832C0 9.11097 0.212524 10.187 0.634448 11.2817C0.987613 12.1965 1.49392 13.1455 2.14087 14.1037C3.16599 15.6201 4.57552 17.2017 6.32572 18.8049C9.22606 21.4625 12.0983 23.2984 12.2201 23.3728L12.9609 23.8442C13.289 24.0519 13.7109 24.0519 14.0391 23.8442L14.7798 23.3728C14.9017 23.2953 17.7708 21.4625 20.6742 18.8049C22.4244 17.2017 23.834 15.6201 24.8591 14.1037C25.506 13.1455 26.0155 12.1965 26.3655 11.2817C26.7874 10.187 27 9.11097 27 8.07832C27.0031 6.98364 26.7812 5.91997 26.3468 4.91832ZM13.5015 21.3912C13.5015 21.3912 2.37527 14.3177 2.37527 8.07832C2.37527 4.91832 5.00995 2.35684 8.26032 2.35684C10.545 2.35684 12.5264 3.62207 13.5015 5.47031C14.4767 3.62207 16.4581 2.35684 18.7428 2.35684C21.9931 2.35684 24.6278 4.91832 24.6278 8.07832C24.6278 14.3177 13.5015 21.3912 13.5015 21.3912Z" fill="#F8F8F8" />
                                    </svg>
                                    <p>3.2k</p>
                                </div>
                                {/* <div className="ourProjectImg1">
                                        <img src={ourProjectImg1} alt="" />
                                    </div> */}

                                <div className="image_data_text d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <h3>Crystal Resort</h3>
                                        <h4>$150M Assets Tokenised</h4>
                                    </div>
                                    <div className="playBtn">
                                        <img src={projectPlayBtn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 our_project_datas resposive_padding">
                            <div className="ourProjectImg2">
                                <img src={ourProjectImg2} alt="" />
                            </div>
                            <div className="image_data1">
                                <div className="heartIcon">
                                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.3468 4.91832C25.9278 3.95587 25.3238 3.08369 24.5684 2.35064C23.8125 1.61539 22.9213 1.0311 21.9431 0.62954C20.9289 0.211494 19.841 -0.0024864 18.7428 2.1797e-05C17.202 2.1797e-05 15.6987 0.418667 14.3923 1.20944C14.0797 1.39861 13.7828 1.60638 13.5015 1.83276C13.2203 1.60638 12.9234 1.39861 12.6108 1.20944C11.3044 0.418667 9.80112 2.1797e-05 8.26032 2.1797e-05C7.15082 2.1797e-05 6.0757 0.210895 5.05995 0.62954C4.07859 1.03268 3.19412 1.61258 2.43465 2.35064C1.67831 3.08287 1.07412 3.95524 0.656325 4.91832C0.2219 5.91997 0 6.98364 0 8.07832C0 9.11097 0.212524 10.187 0.634448 11.2817C0.987613 12.1965 1.49392 13.1455 2.14087 14.1037C3.16599 15.6201 4.57552 17.2017 6.32572 18.8049C9.22606 21.4625 12.0983 23.2984 12.2201 23.3728L12.9609 23.8442C13.289 24.0519 13.7109 24.0519 14.0391 23.8442L14.7798 23.3728C14.9017 23.2953 17.7708 21.4625 20.6742 18.8049C22.4244 17.2017 23.834 15.6201 24.8591 14.1037C25.506 13.1455 26.0155 12.1965 26.3655 11.2817C26.7874 10.187 27 9.11097 27 8.07832C27.0031 6.98364 26.7812 5.91997 26.3468 4.91832ZM13.5015 21.3912C13.5015 21.3912 2.37527 14.3177 2.37527 8.07832C2.37527 4.91832 5.00995 2.35684 8.26032 2.35684C10.545 2.35684 12.5264 3.62207 13.5015 5.47031C14.4767 3.62207 16.4581 2.35684 18.7428 2.35684C21.9931 2.35684 24.6278 4.91832 24.6278 8.07832C24.6278 14.3177 13.5015 21.3912 13.5015 21.3912Z" fill="#F8F8F8" />
                                    </svg>
                                    <p>3.2k</p>
                                </div>
                                {/* <div className="ourProjectImg1">
                                        <img src={ourProjectImg1} alt="" />
                                    </div> */}

                                <div className="image_data_text d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <h3>Crystal Resort</h3>
                                        <h4>$150M Assets Tokenised</h4>
                                    </div>
                                    <div className="playBtn">
                                        <img src={projectPlayBtn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 our_project_datas">
                            <div className="ourProjectImg3">
                                <img src={ourProjectImg3} alt="" />
                            </div>
                            <div className="image_data1">
                                <div className="heartIcon">
                                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.3468 4.91832C25.9278 3.95587 25.3238 3.08369 24.5684 2.35064C23.8125 1.61539 22.9213 1.0311 21.9431 0.62954C20.9289 0.211494 19.841 -0.0024864 18.7428 2.1797e-05C17.202 2.1797e-05 15.6987 0.418667 14.3923 1.20944C14.0797 1.39861 13.7828 1.60638 13.5015 1.83276C13.2203 1.60638 12.9234 1.39861 12.6108 1.20944C11.3044 0.418667 9.80112 2.1797e-05 8.26032 2.1797e-05C7.15082 2.1797e-05 6.0757 0.210895 5.05995 0.62954C4.07859 1.03268 3.19412 1.61258 2.43465 2.35064C1.67831 3.08287 1.07412 3.95524 0.656325 4.91832C0.2219 5.91997 0 6.98364 0 8.07832C0 9.11097 0.212524 10.187 0.634448 11.2817C0.987613 12.1965 1.49392 13.1455 2.14087 14.1037C3.16599 15.6201 4.57552 17.2017 6.32572 18.8049C9.22606 21.4625 12.0983 23.2984 12.2201 23.3728L12.9609 23.8442C13.289 24.0519 13.7109 24.0519 14.0391 23.8442L14.7798 23.3728C14.9017 23.2953 17.7708 21.4625 20.6742 18.8049C22.4244 17.2017 23.834 15.6201 24.8591 14.1037C25.506 13.1455 26.0155 12.1965 26.3655 11.2817C26.7874 10.187 27 9.11097 27 8.07832C27.0031 6.98364 26.7812 5.91997 26.3468 4.91832ZM13.5015 21.3912C13.5015 21.3912 2.37527 14.3177 2.37527 8.07832C2.37527 4.91832 5.00995 2.35684 8.26032 2.35684C10.545 2.35684 12.5264 3.62207 13.5015 5.47031C14.4767 3.62207 16.4581 2.35684 18.7428 2.35684C21.9931 2.35684 24.6278 4.91832 24.6278 8.07832C24.6278 14.3177 13.5015 21.3912 13.5015 21.3912Z" fill="#F8F8F8" />
                                    </svg>
                                    <p>3.2k</p>
                                </div>
                                {/* <div className="ourProjectImg1">
                                        <img src={ourProjectImg1} alt="" />
                                    </div> */}

                                <div className="image_data_text d-flex align-items-center justify-content-between">
                                    <div className="">
                                        <h3>Crystal Resort</h3>
                                        <h4>$150M Assets Tokenised</h4>
                                    </div>
                                    <div className="playBtn">
                                        <img src={projectPlayBtn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading_text2 mobile_view_data">
                        <a href="/#">Explore All</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurProjects