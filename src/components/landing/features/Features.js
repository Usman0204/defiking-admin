import React from 'react';
import './features.scss';
const Features = () => {
    return (
        <>
            <section className="main-stake ptb" id="whyus">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12">
                            <div className="main-tile1 text-center">
                                <h2 className="white ptb20">A Suitable Community For A Blazing<br /> DeFi Territory.</h2>
                                {/* <p className="grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br/> doloremque laudantium, totam rem aperiam eaque ipsa.</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="row ptb20">

                        <div className="col-sm-3">
                            <a href="https://t.me/Teamblaze1" target="_blank" rel="noopener noreferrer">
                                <div className="main-tile text-center">
                                    <img src="\BlazeDexassets\community-icons\telegram-icon.svg" className="img-fluid" alt="" />
                                    <h4 className="common ptb20">23k+</h4>
                                    <p className="grey">Telegram Members</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="https://mobile.twitter.com/TBtoken" target="_blank" rel="noopener noreferrer">
                                <div className="main-tile text-center">
                                    <img src="\BlazeDexassets\community-icons\twitter-icon.svg" className="img-fluid" alt="" />
                                    <h4 className="common ptb20">35k+</h4>
                                    <p className="grey">Twitter Members</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="https://facebook.com/Tbtcoin.net " target="_blank" rel="noopener noreferrer">
                                <div className="main-tile text-center">
                                    <img src="\BlazeDexassets\community-icons\facebook-icon.svg" className="img-fluid" alt="" />
                                    <h4 className="common ptb20">25k+</h4>
                                    <p className="grey">Facebook Members</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="https://t.me/MoonTrip1" target="_blank" rel="noopener noreferrer">
                                <div className="main-tile text-center">
                                    <img src="\BlazeDexassets\community-icons\announcement-icon.svg" className="img-fluid" alt="" />
                                    <h4 className="common ptb20">20k+</h4>
                                    <p className="grey">Announcement Members</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;
