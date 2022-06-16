/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './banner.scss';
import { useWeb3React } from '@web3-react/core'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Banner = () => {

    const { account } = useWeb3React();
    const [minted, setMinted] = useState(false);
    const [inProcess, setInProcess] = useState(false);

    // const appoved = async (e) => {
    //     if (account) {
    //         try {
    //             e.preventDefault();
    //             setInProcess(true)
    //             const tx = await Approve()
    //             if (tx) {
    //                 toast.success('Successfully Approved', {
    //                     position: "top-right",
    //                     autoClose: 2000,
    //                 });
    //                 setMinted(true)
    //             }
    //             setInProcess(false)
    //             window.$("#exampleModalLong2").modal('hide');

    //         }
    //         catch (err) {
    //             console.log(err)
    //             toast.error(err.message, {
    //                 position: "top-right",
    //                 autoClose: 2000,
    //             });
    //             setInProcess(false)
    //         }
    //     }
    //     else {
    //         window.$("#exampleModalLong2").modal('hide');
    //         toast.error('Please Connect to wallet', {
    //             position: "top-right",
    //             autoClose: 2000,
    //         });
    //     }
    // }


    return (
        <>
            <section className="main-banner ptb" id="banner">
                <div className="container-fluid py-3">
                    <div className="row ptb">
                        <div className="col-sm-11 mx-auto">
                            <div className="row">
                        <div className="col-lg-6 my-auto order-lg-0 order-1">
                            <div className="inner-content">
                              
                                <h2 className="white text-uppercase">DRIVEN NFTS ALPHA COLLECTION</h2>
                                <p className="ptb20 text-light">The first ever NFT Collection powered by DRIVEN. Backed by a community of elite traders and influencers impacting the world through trading education and technology.</p>
                                <ul className="list-inline ptb20">
                                    {/* <li className="list-inline-item">
                                        <a className="btn-common" href="" target="_blank">Mint Now </a>
                                    </li> */}
                                    <li className="list-inline-item mt-sm-0 mt-5">
                                        <a href="https://opensea.io/collection/drivenalphacollection" className="btn-common white" target="_blank">View on OpenSea</a>
                                    </li>
                                </ul>
                            
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className="inner-content text-center">
                                <div className="inner-img pb-lg-0 pb-5">
                                <img src="/driven-assets/header-image-card.png" className="img-fluid banrImgRight" alt="" />

                            </div>
                            
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

export default Banner;
