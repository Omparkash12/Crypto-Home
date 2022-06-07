import React from 'react';
import './ThinkingAngels.css';

const ArrayColumn = (props) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-6 profile_all'>
            <img className='profileImg' src={props.imageUrl} alt="" />
            <h3 className=''>{props.imageName}</h3>
            <h4 className=''>{props.occupation}</h4>
        </div>
    )
}

export default ArrayColumn