import React from 'react';
import './Community.css';
import communityFace from '../../Images/communityFace.svg'

const Community = (props) => {
    return (
        <div className='fullContainer'>
            <div className="containerDiv">
                <div className="communitySetion">
                    <img src={communityFace} alt="FaceImage" />
                    <h1>{props.communityText1}</h1>
                    <p>{props.communityText2}</p>
                    <div className='joinbtn'>
                        <a href="/#">Join Our Discord</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;