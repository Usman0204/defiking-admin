import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
    return (
        <>
            <section className="main-footer">

                <div className="container">
                    <div className='row ptb'>
                        <div className='col-sm-12 text-center'>
                            <h2 className='white mt-2'>EXCITED TO MINT YOUR <br /> FIRST META Nft?</h2>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item">
                                    <a className="" href='https://twitter.com/JungleMeta' target='_blank'>
                                        <img src="hash-max-assets/footer/twitter-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a>
                                </li>
                                <li className="list-inline-item mx-4">
                                    <a className="" href='https://discord.gg/tQXFTGfzJX' target='_blank'>
                                        <img src="hash-max-assets/footer/discord-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="" href='https://t.me/+RVAZj1z1Kpc5MmQ0' target='_blank'>
                                        <img src="hash-max-assets/footer/telegram-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="container-fluid footer-inner">
                    <div className="container p-0">
                        <div className="row">

                            <div className="col-lg-3 pl-lg-0 ml-0 col-md-6 col-12 my-auto">
                                <div className="inner-icon text-center mt-md-0 mt-3">
                                    <img src="/hash-max-assets/header/logo.svg" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 my-auto pt-2">
                                <div className="inner-icon ptb20">
                                    <ul className="list-inline text-uppercase text-center">
                                        <li className="list-inline-item">
                                            <a className="" target="_blank">
                                                Home
                                            </a>

                                        </li>
                                        <li className="list-inline-item">
                                            <a className="mx-3" target="_blank">
                                                About
                                            </a>

                                        </li>
                                        <li className="list-inline-item">
                                            <a className="" target="_blank">
                                                Features
                                            </a>

                                        </li>
                                        <li className="list-inline-item">
                                            <a className="mx-3" target="_blank">
                                                FAQ
                                            </a>

                                        </li>
                                        <li className="list-inline-item">
                                            <a className="" target="_blank">
                                                Community
                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 my-auto">
                                <div className="inner-icon">

                                    <ul className="list-inline yo iconUl text-center ptb20">
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">
                                                <a className="" href='' target="_blank">
                                                    <img src="/hash-max-assets/footer/discord-icon.svg" className="img-fluid" alt="" />
                                                </a>

                                            </div>

                                        </li>
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">

                                                <a className="" href='' target="_blank">
                                                    <img src="/hash-max-assets/footer/twitter-icon.svg" className="img-fluid" alt="" />
                                                </a>
                                            </div>

                                        </li>
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">

                                                <a className="" target="_blank">
                                                    <img src="/hash-max-assets/footer/instagram-icon.svg" className="img-fluid" alt="" />
                                                </a>
                                            </div>

                                        </li>
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">
                                                <a className="" href='' target="_blank">
                                                    <img src="/hash-max-assets/footer/telegram-icon.svg" className="img-fluid" alt="" />
                                                </a>

                                            </div>

                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            <section className="rights ptb20 border-top border-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center col-12">
                            <div className="inner-rights">
                                <p className="grey">© 2022 META JUNGLE CLUB, All Rights Reserved</p>
                            </div>
                        </div>
                        {/* <div className="col-sm-4 col-12 text-right mt-sm-0 mt-3">
                            <div className="inner-logo">
                                <ul className='list-inline'>
                                    <li className='list-inline-item'>
                                        <a className='grey'>Terms of Service</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className='grey'>|</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className='grey'>Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
