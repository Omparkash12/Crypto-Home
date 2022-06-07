import React from 'react';
import './Video.css';

const Video = () => {
    return (
        <div className='fullContainer'>
            <div className="containerDiv">
                <div className="videoSection">
                    <video className='aboutVideoplayer' width="100%" height="auto" loop controls
                        poster=''
                        src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164">
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Video