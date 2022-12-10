import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

// Images
import logo from "../../Images/logo.png";
import wallet from "../../Images/wallet.svg";
import mobile3lines from "../../Images/mobile3lines.svg";
import mobileWallet from '../../Images/mobilewallet.svg';
import mobileBrandIcon from '../../Images/mobileBrandIcon.svg';

const Navbar = () => {
    return (
        // style={{
        //   backgroundImage: `url(${blur})`,
        // }}


        <>
            <div className="">
                <nav className="navbar navbar-expand-xl p-0 fixed-top containerDiv">
                    <div className="px-4 py-3 NavbarBG">
                        <button className="toogleNavBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <img src={mobile3lines} alt="" />
                        </button>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="3Lines">
                            <img src={mobile3lines} alt="" />
                        </span>
                    </button> */}
                        <Link className="navbar-brand m-0" to="/Crypto-Home">
                            <img src={logo} className="img-fluid brandImage1" alt="" />
                            <img src={mobileBrandIcon} className="img-fluid brandImage2" alt="" />
                        </Link>

                        {/* <img src={logo} className="brandImage3" alt="" />
                        <img src={mobileWallet} className="brandImage4" alt="" /> */}

                        <Link to="/Crypto-Home" className="brandImage3 desktopLogo">
                            <img src={logo} alt="" />
                        </Link>
                        <Link to="" className="brandImage4">
                            <img src={mobileWallet} alt="" />
                        </Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 ">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/#">Resorts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">NFT’s</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">Creators</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">Timeline</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">Citizenship</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">Opportunities</a>
                                </li>
                            </ul>
                            <a className="wallet" href="/#">
                                <div className="walletimg me-3">
                                    <img src={wallet} alt="" />
                                </div>
                                <p className='m-0'>
                                    Connect<br />Wallet
                                </p>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>



            {/* <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Link with href
            </a> */}
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Button with data-bs-target
            </button> */}

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Crypto Resorts</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body off_canvas_nav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/#">Resorts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">NFT’s</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">Creators</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">Timeline</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">Citizenship</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/#">Opportunities</a>
                                </li>
                            </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;