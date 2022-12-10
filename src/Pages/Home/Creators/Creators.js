import React from 'react';
import './Creators.css';
import CreatorArray from './CreatorsArray';
import CreatorsCard from './CreatorsCard';
import Slider1 from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




// import $ from 'jquery';
// import 'jquery-ui-dist/jquery-ui';

// import Flickity from 'react-flickity-component'
// Images
import creators_large_circle_1 from '../../Images/creators_large_circle_1.svg'
import creators_large_circle_2 from '../../Images/creators_large_circle_2.svg'
import creators_small_circle_1 from '../../Images/creators_small_circle_1.svg'
import creators_small_circle_2 from '../../Images/creators_small_circle_2.svg'
// import creator_grid_image from '../../Images/creator_grid_image.svg'
import snow1 from '../../Images/snow1.svg';
import snow2 from '../../Images/snow2.svg';
import snow3 from '../../Images/snow3.svg';

import creator_image_1 from '../../Images/creators_image_1.svg';
import creator_image_2 from '../../Images/creators_image_2.svg';
import creator_image_3 from '../../Images/creators_image_3.svg';
import creator_image_4 from '../../Images/creators_image_4.svg';
import creator_image_5 from '../../Images/creators_image_5.svg';
import creator_image_6 from '../../Images/creators_image_6.svg';
import creator_image_7 from '../../Images/creators_image_7.svg';
import creator_image_8 from '../../Images/creators_image_8.svg';

// const flickityOptions = {
//     initialIndex: 1,
//     draggable: false,
//     groupCells: 2,
//     autoPlay: false,
// }

const Creators = () => {


    const slider1 = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive: [

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    }


    return (
        <>
            <div className='fullContainer creator_section position-relative'>
                <div className="creator_grid_Bg">
                    {/* <img src={creator_grid_image} alt="" /> */}

                    <div className="containerDiv">
                        <div className="creator_all_data text-white">
                            <div className="creators_large_circle_1"><img src={creators_large_circle_1} alt="" /></div>
                            <div className="creators_large_circle_2"><img src={creators_large_circle_2} alt="" /></div>
                            <div className="creators_heading d-flex align-items-center justify-content-between">
                                <div className="heading_text1">
                                    <h5>CREATORS</h5>
                                    <h2>Meet Our Top Artists</h2>
                                </div>

                                <div className="heading_text2 desktop_view_data">
                                    <a href="/#">Explore All</a>
                                </div>
                            </div>

                            <div className="row desktop_creators">

                                {
                                    CreatorArray.map((val) => {
                                        return <CreatorsCard key={val.imageUrl}
                                            imageUrl={val.imageUrl}
                                            imageName={val.imageName}
                                            imageOccupation={val.imageOccupation}
                                        />
                                    })
                                }
                            </div>
                            <div className="creators_small_circle_1"><img src={creators_small_circle_1} alt="" /></div>
                            <div className="creators_small_circle_2"><img src={creators_small_circle_2} alt="" /></div>
                            <div className="d-flex align-items-center justify-content-center snow-animation animated creators_stars">
                                <div className="snowflake">
                                    <img src={snow3} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow1} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow2} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow1} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow3} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow1} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow1} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow1} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow2} alt="" />
                                </div>
                                <div className="snowflake">
                                    <img src={snow3} alt="" />
                                </div>
                            </div>



                        </div>



                        {/* <Flickity
                            className={'carousel row text-white'} // default ''
                            elementType={'div'} // default 'div'
                            options={flickityOptions} // takes flickity options {}
                            disableImagesLoaded={false} // default false                            
                            reloadOnUpdate // default false
                            static // default false
                        >
                            <div className="creators_data creator_data_1 col-4">
                                <div className="creators_images">
                                    <img src={creator_image_1} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Roger Herwitz</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>

                            <div className="creators_data creator_data_1 col-4">
                                <div className="creators_images">
                                    <img src={creator_image_2} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Giana Vetros</h4>
                                    <h5>78 Artworks</h5>
                                </div>
                            </div>

                            <div className="creators_data creator_data_1 col-4">
                                <div className="creators_images">
                                    <img src={creator_image_3} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Carter Boter</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1 col-4">
                                <div className="creators_images">
                                    <img src={creator_image_4} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Alena Septimus</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1 col-4">
                                <div className="creators_images">
                                    <img src={creator_image_5} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Jayson Donlin</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>

                            <div className="creators_data creator_data_1 col-4">
                                <div className="creators_images">
                                    <img src={creator_image_6} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Brandon</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1 col-4">
                                <div className="creators_images">
                                    <img src={creator_image_7} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Hanna Barter</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1 col-4">
                                <div className="creators_images">
                                    <img src={creator_image_8} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Merilyn Lisa</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                        </Flickity> */}

                        {/* <div className="heading_text2 mobile_view_data">
                            <a href="/#">Explore All</a>
                        </div> */}
                    </div>
                    <Slider1 className='row slider_content containerDiv pr-0' {...slider1}>
                        <div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_1} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Roger Herwitz</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_2} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Roger Herwitz</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_3} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Roger Herwitz</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_2} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Giana Vetros</h4>
                                    <h5>78 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_3} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Giana Vetros</h4>
                                    <h5>78 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_4} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Giana Vetros</h4>
                                    <h5>78 Artworks</h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_3} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Carter Boter</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_4} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Carter Boter</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_5} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Carter Boter</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_4} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Alena Septimus</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_5} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Alena Septimus</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_6} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Alena Septimus</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_5} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Jayson Donlin</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_6} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Jayson Donlin</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_7} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Jayson Donlin</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_6} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Brandon</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_7} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Brandon</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_8} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Brandon</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_7} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Hanna Barter</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_8} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Hanna Barter</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_1} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Hanna Barter</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_8} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Merilyn Lisa</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_1} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Merilyn Lisa</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                            <div className="creators_data creator_data_1">
                                <div className="creators_images">
                                    <img src={creator_image_2} alt="" />
                                </div>
                                <div className="creators_brief">
                                    <h4>Merilyn Lisa</h4>
                                    <h5>572 Artworks</h5>
                                </div>
                            </div>
                        </div>
                    </Slider1>
                </div>
            </div>

        </>
    )
}

export default Creators;