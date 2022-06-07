import React from 'react';
import './MainHeading.css';

const MainHeading = (props) => {
    return (
            <div className="containerDiv">
                <div className="mainHeadingText text-center">
                    <h1 style={props.headingWidth}>
                        <span className='middleText'>{props.headingtext1}</span>{props.headingtext2}<span className='middleText'>{props.headingtext3}</span>
                    </h1>
                    <p style={props.headingParaWidth}>
                        {props.headingPara}                        
                    </p>
                </div>
            </div>
    )
}

export default MainHeading;