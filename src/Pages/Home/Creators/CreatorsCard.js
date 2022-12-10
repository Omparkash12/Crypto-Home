import React from 'react';
import './Creators.css';

const CreatorsCard = (props) => {
    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 array_data_1'>
            <div className="creators_data">
                <div className="creators_images">
                    <img src={props.imageUrl} alt="" />
                </div>
                <div className="creators_brief">
                    <h4>{props.imageName}</h4>
                    <h5>{props.imageOccupation}</h5>
                </div>
            </div>
        </div>
    )
}

export default CreatorsCard;