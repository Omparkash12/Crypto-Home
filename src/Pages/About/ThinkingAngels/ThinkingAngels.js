import React from 'react';
import './ThinkingAngels.css';
import MainHeading from '../../Shared/MainHeading/MainHeading';
import Array from './Array';
import ArrayColumn from './ArrayColumn';

// Images
// import angel1 from '../../Images/angel1.png';
// import angel2 from '../../Images/angel2.png';
// import angel3 from '../../Images/angel3.png';
// import angel4 from '../../Images/angel4.png';
// import angel5 from '../../Images/angel5.png';
// import angel6 from '../../Images/angel6.png';
// import angel7 from '../../Images/angel7.png';
// import angel8 from '../../Images/angel8.png';
// import angel9 from '../../Images/angel9.png';
// import angel10 from '../../Images/angel10.png';
// import angel11 from '../../Images/angel11.png';
// import angel12 from '../../Images/angel12.png';


const ThinkingAngels = () => {
    const headingParaWidth = {
    }
    const headingWidth = {
        width: '72%',
        margin: 'auto'
    }

    return (
        <>
            <MainHeading headingtext1='' headingtext2='With some of the most forward-thinking angels' headingtext3='' headingPara='who are just as passionate about this space as we are.' headingParaWidth={headingParaWidth} headingWidth={headingWidth} />
            <div className='fullContainer'>
                <div className="containerDiv">
                    <div className="row thinking_angels">
                        {
                            Array.map((val) => {
                                return <ArrayColumn
                                    key={val.index}
                                    imageUrl={val.imageUrl}
                                    imageName={val.imageName}
                                    occupation={val.occupation}
                                />
                            })
                        }

                        {/* <div className="col-lg-3 angel_1">
                            <img src={angel1} alt="image1" />
                        </div>
                        <div className="col-lg-3 angel_1"></div>
                        <div className="col-lg-3 angel_1"></div>
                        <div className="col-lg-3 angel_1"></div> */}
                    </div>
                </div>
            </div></>

    )
}

export default ThinkingAngels;