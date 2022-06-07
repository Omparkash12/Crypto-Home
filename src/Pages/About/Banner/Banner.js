import React from 'react';
import './Banner.css';

import sun from '../../Images/sun.png';
import planet1 from '../../Images/planet1.svg';
import planet2 from '../../Images/planet2.svg';
import planet3 from '../../Images/planet3.svg';


const Banner = () => {
    return (
        <div className="fullContainer bannerBG">
            <div className='containerDiv'>
                <div className="bannerData">
                    <div className="row align-items-center">
                        <div className="col-lg-6 bannerData1">
                            <h1>Building an open digital economy</h1>
                            <p>
                                As Crypto Resorts is a real place and what holders do with their NFTs will affect the future of the community, owning a Crypto Resorts NFT requires a level of responsibility not usually associated with NFT ownership. With this in mind, Crypto Resorts NFTs come with proprietary layers of security features to safeguard the NFT owners and overall community.
                            </p>
                            <a href="/#" className='learnMorebtn'>Learn more
                                <span className=''>
                                    <svg className='ms-2' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464467C6.97631 0.269205 6.65973 0.269204 6.46447 0.464467C6.2692 0.659729 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM-4.37114e-08 4.5L10 4.5L10 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="white" />
                                    </svg>
                                </span>
                            </a>
                        </div>

                        <div className="col-lg-6 bannerData2 text-center">
                            <div className="system">
                                <div className="system__orbit system__orbit--sun">
                                    <img src={sun} alt="Sun" className="system__icon system__icon--sun ecosystem-img" />
                                </div>

                                <div className="system__orbit system__orbit--blank1">
                                </div>
                                
                                <div className="system__orbit system__orbit--earth">
                                    <div className="system__planet system__planet--earth">
                                        <img src={planet1} alt="Earth" />
                                    </div>
                                </div>

                                <div className="system__orbit system__orbit--saturn">
                                    <div className="system__planet system__planet--saturn">
                                        <img src={planet2} alt="Saturn" />
                                    </div>
                                </div>

                                <div className="system__orbit system__orbit--pluto">
                                    <div className="system__planet system__planet--pluto">
                                        <img src={planet3} alt="Pluto" />
                                    </div>
                                </div>

                                <div className="system__orbit system__orbit--blank2">
                                </div>

                                <div className="system__orbit system__orbit--blank3">
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner