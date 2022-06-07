import React from 'react';
import './Footer.css';
// Images
import twitter from '../../Images/footerTwitter.svg';
import footerIcon from '../../Images/footerIcon.svg';
import linkedIn from '../../Images/footerLinkedIn.svg';
import footerTelegram from '../../Images/footerTelegram.svg';
import footerBrand from '../../Images/footerBrand.svg';
import footerPlanetImg1 from '../../Images/footerPlanetImg1.png'
import footerPlanetImg2 from '../../Images/footerPlanetImg2.png'


const Footer = () => {
    return (
        <div className='fullContainer footerBG'>
            <div className="footerimg1"></div>
            <div className="footerimg2">
                <img src={footerPlanetImg1} alt="" />
            </div>
            <div className="footerimg3">
                <img src={footerPlanetImg2} alt="" />
            </div>
            <div className='containerDiv footerSection'>
                <div className="footerCont">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 footerData1 displayNoneData1">
                            <h3 className=''>Quick Links</h3>
                            <div className="row list">
                                <div className="col-lg-6 col-md-6 list1 ">
                                    <ul className="list-inline">
                                        <li>
                                            <a href="/#">Resorts</a>
                                        </li>
                                        <li>
                                            <a href="/#">NFT's</a>
                                        </li>
                                        <li>
                                            <a href="/#">Creators</a>
                                        </li>
                                        <li>
                                            <a href="/#">Timeline</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-md-6 list2">
                                    <ul className="list-inline">
                                        <li>
                                            <a href="/#">About</a>
                                        </li>
                                        <li>
                                            <a href="/#">Citizemship</a>
                                        </li>
                                        <li>
                                            <a href="/#">Opportunities</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-lg-5 col-md-5 footerData2 text-center mobileViewBrandData">
                                <div className="brandHeading">
                                    <img src={footerBrand} alt="" className="footerBrandImg" />
                                    <h2>CRYPTO</h2>
                                    <p className='resortText'>RESORTS</p>
                                </div>

                                <p className="footerPara">
                                    Crypto Resorts is taking the next step in the evolution of NFTs by introducing a way to turn digital ownership into physical.
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-5 col-md-5 footerData2 text-center">
                            <div className="brandHeading">
                                <img src={footerBrand} alt="" className="footerBrandImg" />
                                <h2>CRYPTO</h2>
                                <p className='resortText'>RESORTS</p>
                            </div>

                            <p className="footerPara">
                                Crypto Resorts is taking the next step in the evolution of NFTs by introducing a way to turn digital ownership into physical.
                            </p>

                            <div className="footerSocialLinks d-flex justify-content-center align-items-center displayNoneData2">
                                <div className="twitter">
                                    <img src={twitter} alt="" />
                                </div>
                                <div className="twitter px-3">
                                    <img src={footerIcon} alt="" />
                                </div>
                                <div className="linkedIn px-3">
                                    <img src={linkedIn} alt="" />
                                </div>
                                <div className="telegram">
                                    <img src={footerTelegram} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 footerData1 mobileViewLinksData">
                                <h3 className=''>Quick Links</h3>
                                <div className="row list">
                                    <div className="col-lg-6 col-md-6 list1 ">
                                        <ul className="list-inline">
                                            <li>
                                                <a href="/#">Resorts</a>
                                            </li>
                                            <li>
                                                <a href="/#">NFT's</a>
                                            </li>
                                            <li>
                                                <a href="/#">Creators</a>
                                            </li>
                                            <li>
                                                <a href="/#">Timeline</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-md-6 list2">
                                        <ul className="list-inline">
                                            <li>
                                                <a href="/#">About</a>
                                            </li>
                                            <li>
                                                <a href="/#">Citizemship</a>
                                            </li>
                                            <li>
                                                <a href="/#">Opportunities</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-4 footerData3 text-white">
                            <h3>Get Latest Updates</h3>
                            <p className='text1'>
                                Get notified about News, Artwork, Live bid and more
                            </p>
                            <div className="subscribeSection">
                                <span>
                                    <input type="search" placeholder='Type your email ID' />
                                    <button className='subscribebtn'>Subscibe</button>
                                </span>
                            </div>
                            <p className='text2'>
                                It’s safe to share your confidentials
                            </p>


                            <div className="footerSocialLinks d-flex justify-content-center align-items-center mobileViewSocialLinkData">
                                <div className="twitter">
                                    <img src={twitter} alt="" />
                                </div>
                                <div className="twitter px-3">
                                    <img src={footerIcon} alt="" />
                                </div>
                                <div className="linkedIn px-3">
                                    <img src={linkedIn} alt="" />
                                </div>
                                <div className="telegram">
                                    <img src={footerTelegram} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer