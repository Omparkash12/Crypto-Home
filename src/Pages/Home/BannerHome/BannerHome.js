import React from 'react';
import './BannerHome.css';

// images
import homeBannerImg from '../../Images/homeBannerImg.png';
import homeInstagram from '../../Images/homeInstagram.svg';
import homeLinkedIn from '../../Images/homeLinkedIn.svg';
import homeDiscord from '../../Images/homeDiscord.svg';
import homefB from '../../Images/homeFB.svg';
// import homeBannerLeftShadow from '../../Images/homeBannerleftShadow.png';
// import homeBannerRightShadow from '../../Images/homeBannerRightShadow.png';
// import homeBannerGridImg from '../../Images/homeBannerGridImg1.png';
import homeBannerGridImg1 from '../../Images/homeBannerGridImg1.png';


// Stars
// import star1 from '../../Images/star1.svg';
// import star2 from '../../Images/star2.svg';
// import star3 from '../../Images/star3.svg';

const BannerHome = () => {
    return (
        <div className="fullContainer position-relative overflow-hidden">
            <div  className="home_banner_shadow1"></div>
            <div className="home_banner_shadow2"></div>
            <div className="home_banner_grid"><img src={homeBannerGridImg1} alt="" /></div>
            <div className="socialmediaIcons">
                <a href='/#' className="instagram">
                    <img src={homeInstagram} alt="" />
                </a>
                <a href='/#' className="linkedIn">
                    <img src={homeLinkedIn} alt="" />
                </a>
                <a href='/#' className="discard">
                    <img src={homeDiscord} alt="" />
                </a>
                <a href='/#' className="facebook">
                    <img src={homefB} alt="" />
                </a>
            </div>
            <div className="containerDiv">
                <div className="banner_home">
                    <div className="row text-white banner_home_data align-items-center">
                        <div className="col-lg-7 banner_home_data1">
                            <h2>Welcome to</h2>
                            <h1>Crypto Resorts</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                            <div className="exploreBtn">
                                <a href="/#">Explore</a>
                                {/* <h6 className=''>Mint</h6> */}
                                <div className="arrowRingBnt d-flex align-items-center">
                                    <h6 className=''>Mint</h6>
                                    <div className="circle4">
                                        <div className="circle1"></div>
                                    </div>
                                    <div className="circle3">
                                        <div className="circle2"></div>
                                    </div>
                                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="white" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        {/* <img src={homeBannerImg} alt="bannerImg" /> */}
                        {/* <div className="col-lg-5 banner_home_data2" style={{backgroundImage: `url(${homeBannerImg})`}}>
                            <div className="">❆</div>
                            <div className="">❅</div>
                            <div className="">❆</div>
                            <div className="">❅</div>
                            <div className="">❆</div>
                            <div className="">❅</div>
                            <div className="">❆</div>
                            <div className="">❅</div>
                            <div className="">❆</div>
                            <div className="">❅</div>
                            <div className="">❆</div>
                        </div> */}
                        <div style={{ backgroundImage: `url(${homeBannerImg})`, }} className="col-lg-5  d-flex align-items-center justify-content-center snow-animation animated banner_home_data2_addedOne">
                            <div class="snowflake">
                                ❅
                            </div>
                            <div class="snowflake">
                                ❅
                            </div>
                            <div class="snowflake">
                                ❆
                            </div>
                            <div class="snowflake">
                                ❄
                            </div>
                            <div class="snowflake">
                                ❅
                            </div>
                            <div class="snowflake">
                                ❆
                            </div>
                            <div class="snowflake">
                                ❄
                            </div>
                            <div class="snowflake">
                                ❅
                            </div>
                            <div class="snowflake">
                                ❆
                            </div>
                            <div class="snowflake">
                                ❄
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerHome;