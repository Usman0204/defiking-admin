/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './unlishrobot.scss';
import { useWeb3React } from '@web3-react/core'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UnlishRobot = () => {

    const { account } = useWeb3React();
    const [minted, setMinted] = useState(false);
    const [inProcess, setInProcess] = useState(false);


    return (
        <>
            <section className="main-Xenoverse " id="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12  p-0">
                            <div className='color-Back'>
                            </div>
                            <video  src="https://res.cloudinary.com/blogpost-app/video/upload/v1648547473/NFT_collection_Video_1_zlbult.mp4" className="for-video"  height="100%" width="100%"  loop autoPlay playsInline muted></video>
                            <div className='tt'/>
                        </div>
                    </div>

                </div>
            </section>
            <section className="main-Xenoverse ptb" id="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-11 mx-auto">
                            <div className="row mt-4">
                                <div className="col-sm-6">
                                    <div className="inner-content ptb20">
                                        <div className="inner-img">
                                            <h2 className='white text-uppercase'>HOLD THE KEYS TO THE DRIVEN UNIVERSE</h2>
                                            <p className='ptb20 grey mt-3'>DRIVEN NFTS ARE DESIGNED TO POSITION PEOPLE TO WIN IN THE DECENTRALIZATION MOVEMENT. A POWERFUL EXPRESSION OF SKILLS THAT WILL MAKE A CHANGE AND IMPACT PEOPLE SUCH AS TRADING, CRYPTO, AND MINDSET.</p>
                                            <p className='grey'>ON TOP OF THAT, DRIVEN NFTS ARE ATTACHED TO OVER 1 MILLION DOLLARS IN PERKS. FROM METAVERSE ACCESS, EVENTS AND EXPERIENCES, TO SUMMIT TICKETS, TO LUXURY MASTERCLASSES, ROLEXES AND A BRAND NEW MCLAREN 720S.</p>
                                        </div>
                                        <div className="inner-img mt-3">
                                            {/* <h3 className='white text-uppercase'>UNLEASH THE robots!</h3>
                                            <p className='grey'>beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut</p> */}
                                            <ul className="list-inline mt-3">
                                                <li className="list-inline-item width-100">
                                                    <input placeholder=' Discord handle' type='text' className="inpo-common width-100">
                                                    </input>
                                                </li>
                                                <li className="list-inline-item width-100">
                                                    <input placeholder='Email Address' type='text' className="inpo-common width-100">
                                                    </input>
                                                </li>
                                                <li className="list-inline-item width-100">
                                                    <button className="btn-common-2 width-100">
                                                        Submit
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-sm-6 my-auto">
                                    <div className="inner-content text-center">

                                        <img src="/driven-assets/about-us-image.png" className="img-fluid bullRight" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default UnlishRobot;
