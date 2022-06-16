import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import './about.scss';
const About = () => {
    const owl_option = {
        nav: false,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ["<p className='backword'><</p>", "<p className='forward'>></p>"],
        responsive: {
            0: {
                items: 2,
                stagePadding: -100,
                margin: 10,
            },
            400: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            600: {
                items: 2,
                stagePadding: -100,
                margin: 10,
            },
            700: {
                items: 2.5,
                stagePadding: 10,
                margin: 10,

            },
            1000: {
                items: 3,
                stagePadding: 10,
                margin: 10,

            },
            1200: {
                items: 5,
                stagePadding: 10,
                margin: 10,

            }
        },
    };
    return (
        <>
            <section className="main-about ptb" id="aboutus">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-img text-center">
                                <h2 className="white  text-uppercase text-center ">Access The Most Exclusive Experiences </h2>
                                <p className="grey pt-4 text-start">DRIVEN is about positioning and education, taught through a multi-reality realm of experiences . From our upcoming DRIVENverse to the ultra exclusive DRIVEN WolfPack Mastermind happening in extravagant locations around the globe, DRIVEN NFTs hold the key to it all.</p>
                                <p className="grey py-4 text-start"> Exclusive impact driven experiences designed to provide the tools, skills and technology people need, to claim their stake in the new digital era.  </p>
                                <p className="grey  text-start">DRIVEN NFTs X DRIVEN Experiences collab generates some of the most powerful and valuable digital art assets in education and DRIVEN NFT holders and members will always have priority access to DRIVEN NFT drops.</p>
                                {/* <p className="grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br /> doloremque laudantium, totam rem aperiam eaque ipsa.</p> */}

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12 p-0">
                        <div className="first-second">

                            <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={3000}  {...owl_option}>
                            <div className="item mt-2">
                                        <div className="">
                                            <div className="main-tile text-center">
                                                <img src="/driven-assets/slide-image-1ten.png" className="img-fluid w-100 h-100" alt="" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-four.png" className="img-fluid h-100 w-100" alt="" />                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-three.png" className="img-fluid h-100 w-100" alt="" />
                                                    

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-four.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-five.png" className="img-fluid h-100 w-100" alt="" />
                                                    

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-six.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-eight.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-eleven.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;
