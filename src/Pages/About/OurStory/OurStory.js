import React from 'react';
import './OurStory.css';
import MainHeading from '../../Shared/MainHeading/MainHeading';

import ourStoryBrandIcon from '../../Images/ourStoryBrandIcon.svg'
// import planetring1 from '../../Images/storyPlanetRing1.png';
// import planetring2 from '../../Images/storyPlanetRing2.png';
// import planetring2 from '../../Images/storyPlanetRing2.png';
// import planet from '../../Images/planet.svg';


const OurStory = () => {
    const headingParaWidth = {
    }

    return (
        <>
            <MainHeading headingtext1='' headingtext2='Our Story' headingtext3='' headingPara='Navigating the uncharted waters of non-fungible tokens' headingParaWidth={headingParaWidth} />

            <div className="fullContainer position-relative">                
                <div className="containerDiv">
                    <div className="ourStorySetion">
                        <div className="row storyData text-white">
                            <div className="col-lg-6 storyData1">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </p>
                                <p>
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                </p>

                                <ul className="storyList m-0">
                                    <li>Neque porro quisquam est, qui dolorem ipsum</li>
                                    <li>quia dolor sit amet, consectetur, adipisci velit,</li>
                                    <li>sed quia non numquam eius modi tempora</li>
                                    <li>incidunt ut labore et dolore magnam aliquam</li>
                                    <li>quaerat voluptatem.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 storyData2 text-center">
                                <div className="storyIcon">
                                    <img src={ourStoryBrandIcon} alt="" />
                                </div>
                                <h1>CRYPTO</h1>
                                <p>RESORTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory;