import React from 'react';
import './robotcollection.scss';
import OwlCarousel from 'react-owl-carousel';
const RobotCollection = () => {
    const owl_option = {
        nav: false,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        // navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
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
                items: 3,
                stagePadding: 10,
                margin: 25,

            },
            1000: {
                items: 4,
                stagePadding: 10,
                margin: 25,

            },
            1200: {
                items: 6,
                stagePadding: 10,
                margin: 25,

            }
        },
    };
    return (
        <>
            <section className="community ptb" id="collection">
                <div className="container-fluid p-0">
                <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-img text-center mb-5">
                                <h2 className="white  text-uppercase  ">96 UNIQUE DESIGNS </h2>
                                <h2 className="white"> + 5000 NFTS + 1MM IN PERKS</h2>
                            </div>
                        </div>

                    </div>
                    <div className="row">
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
                                    
                                    {/* <div className="item mt-2 bg-danger">
            <div className="main-card  text-center">
                <div className="icon">
                   sadadasd
                </div>
            </div>
        </div>
        <div className="item mt-2">
            <div className="main-card text-center">
                <div className="icon">
                   sadadasd
                </div>
            </div>
        </div> */}

                                </OwlCarousel>
                            </div>
                            <div className="first-second">

                                <OwlCarousel className="slider-items owl-carousel ltf-owl"  autoplayTimeout={7000}  autoplaySpeed={7000}   {...owl_option}>
                                
                                  
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-twelve.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-thirteen.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-fourteen.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-fifteen.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-sixteen.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-seventeen.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mt-2">
                                        <div className="main-card text-center">
                                            <div className="">
                                                <div className="main-tile text-center">
                                                    <img src="/driven-assets/slide-image-eighteen.png" className="img-fluid h-100 w-100" alt="" />
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="item mt-2 bg-danger">
            <div className="main-card  text-center">
                <div className="icon">
                   sadadasd
                </div>
            </div>
        </div>
        <div className="item mt-2">
            <div className="main-card text-center">
                <div className="icon">
                   sadadasd
                </div>
            </div>
        </div> */}

                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RobotCollection;
