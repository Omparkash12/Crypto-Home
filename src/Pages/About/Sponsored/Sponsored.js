import React from 'react';
import './Sponsored.css';
import sponsor1 from '../../Images/sponsor1.png'
import sponsor2 from '../../Images/sponsor2.png'
import sponsor3 from '../../Images/sponsor3.png'
import sponsor4 from '../../Images/sponsor4.png'
import sponsor5 from '../../Images/sponsor5.png'

const Sponsored = () => {
    return (
        <div className='fullContainer'>
            <div className="containerDiv">
                <div className="sporsoredSection text-white text-center">
                    <h1>Backed by top<span className="diffColor"> firms</span> & <span className="diffColor">industry leaders</span></h1>
                    <p>
                        who are helping us pave the way towards a brand new digital economy
                    </p>
                    <div className="sponsoredBrands">
                        <div className="sponsor1">
                            <img src={sponsor1} alt="" />
                        </div>
                        <div className="sponsor1">
                            <img src={sponsor2} alt="" />
                        </div>
                        <div className="sponsor1">
                            <img src={sponsor3} alt="" />
                        </div>
                        <div className="sponsor1">
                            <img src={sponsor4} alt="" />
                        </div>
                        <div className="sponsor1">
                            <img src={sponsor5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsored