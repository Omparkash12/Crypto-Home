import React from 'react';
import './About.css';
import MainHeading from '../Shared/MainHeading/MainHeading';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Video from './Video/Video';
import OurStory from './OurStory/OurStory';
import Sponsored from './Sponsored/Sponsored';
import Footer from '../Shared/Footer/Footer'

// Images
import planet from '../Images/planet.svg';
import ThinkingAngels from './ThinkingAngels/ThinkingAngels';
import Community from './Community/Community';
import storyPlanetRing1 from '../Images/storyPlanetRing1.png';
import storyPlanetRing2 from '../Images/storyPlanetRing2.png';


const About = () => {
    const headingParaWidth = {
        width: '54%',
        margin: '0 auto'
    }
    const headingWidth = {
    }

    return (
        <div className='aboutBG'>
            <Navbar />
            <Banner />
            <div className="lightBG"></div>
            <div className="storyPlannetimg1">
                <img src={storyPlanetRing1} alt="" />
            </div>
            <div className="storyPlannetimg2">
                <img src={storyPlanetRing2} alt="" />
            </div>
            <div className="paddingVideo">
                <MainHeading headingtext1='' headingtext2='Meet Crypto Resorts' headingtext3='' headingPara='Intended to bring together thousands of creators, crypto professionals and  enthusiasts worldwide.' headingParaWidth={headingParaWidth} headingWidth= {headingWidth} />
                <Video />
            </div>
            <OurStory />
            <Sponsored />
            <ThinkingAngels />
            <Community communityText1='Join the community!' communityText2='Where crypto peeps from around the world learn together, share their art, and trade alpha!' communityBtn=''/>
            <Footer/>
        </div>
    )
}

export default About;