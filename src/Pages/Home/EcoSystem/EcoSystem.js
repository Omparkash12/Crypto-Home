import React from 'react';
import './EcoSystem.css';

// images
import ecosystem from '../../Images/ecosystem.png'
import storyPlanetRing1 from '../../Images/eco_circle1.png';
import storyPlanetRing2 from '../../Images/eco_circle2.png';
import our_projects_ellipse from '../../Images/our_pages_Ellipse.png';


const EcoSystem = () => {
  return (
    <div className='fullContainer'>
        <div className="containerDiv">
            <div className="Ecosystem_section">
                <div className="row ecosystem_data align-items-md-center">
                    <div className="col-lg-6 ecosystem_data_1">
                        <img src={ecosystem} alt="" />
                    </div>
                    <div className="col-lg-6 ecosystem_data_2 text-white text-md">
                        <div className="position-relative">
                            <div className="our_project_ellipse"><img src={our_projects_ellipse} alt="" /></div>
                            <div className="eco_circle_1"><img src={storyPlanetRing1} alt="" /></div>
                            <div className="eco_circle_2"><img src={storyPlanetRing2} alt="" /></div>
                            <h4>ECOSYSTEM</h4>
                        </div>
                        <h1>A real private community</h1>
                        <ul className='eco_list m-0'>
                            <li>Dedicated to the creator community</li>
                            <li>Own a real piece of the community</li>
                            <li>Turn your crypto into a physical asset with Crypto Resorts NFT</li>
                            <li>Intended to become home for creators, crypto enthusiasts, professionals and investors</li>
                            <li>Creator economy and Blockchain based community</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EcoSystem