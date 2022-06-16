import React from 'react'
import Footer from '../landing/footer/Footer'
import Navbar from '../landing/header/Navbar'
import './nftperks.scss'

function NftPerks() {
    return (
        <>
            <div className="merch-main nftperks-main">
                <Navbar/>
                <div className="container-fluid pb-5">
                    <div className="row">
                        <div className="col-sm-12 p-0 mx-auto">
                            <div className="heading-div text-center mt-5">
                                <h2>Driven NFT <span className='common'>Holder Perks </span> </h2> </div>
                            <div className="row ptb my-5 ">
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-2  col-md-6  pt-lg-0 pt-5">
                                    <div className="cardo mb-md-0 mb-5">
                                        <div className="img-container-div">
                                            <img src="merch/car.jpg" alt="metamasklogo" className='img-fluid' />
                                        </div>
                                        <div className="text-center mt-4">
                                            <h4 className='font-weight-bold text-white text-uppercase mb-2'><span className='common'>720S NFT Wrapped McLaren</span> </h4>
                                            <button className='btn-common-2 mt-5 text-uppercase w-75' data-toggle="modal" data-target="#exampleModalconfrim">Claim</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6  pt-lg-0 pt-5">
                                    <div className="cardo mb-md-0 mb-5">
                                        <div className="img-container-div">
                                            <img src="merch/rolex.jpg" alt="metamasklogo" className='img-fluid' />
                                        </div>
                                        <div className="text-center mt-4">
                                            <h4 className='font-weight-bold text-white text-uppercase mb-2'><span className='common'>Rolex Watch</span> </h4>
                                            <button className='btn-common-2 mt-5 text-uppercase w-75' data-toggle="modal" data-target="#exampleModalconfrim">Claim</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 pt-lg-0 pt-5">
                                    <div className="cardo mb-md-0 mb-5">
                                        <div className="img-container-div">
                                            <img src="merch/wolfpackmastermind.png" alt="metamasklogo" className='img-fluid' />
                                        </div>
                                        <div className="text-center mt-4">
                                            <h4 className='font-weight-bold text-white text-uppercase mb-2'><span className='common'>Wolfpack Mastermind Tickers</span> </h4>
                                            <button className='btn-common-2 mt-5 text-uppercase w-75' data-toggle="modal" data-target="#exampleModalconfrim">Claim</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6  pt-lg-0 pt-5">
                                    <div className="cardo mb-md-0 mb-5">
                                        <div className="img-container-div">
                                            <img src="merch/canvasnft.png" alt="metamasklogo" className='img-fluid' />
                                        </div>
                                        <div className="text-center mt-4">
                                            <h4 className='font-weight-bold text-white text-uppercase mb-2'><span className='common'>NFT Canvas</span> </h4>
                                            <button className='btn-common-2 mt-5 text-uppercase w-75' data-toggle="modal" data-target="#exampleModalconfrim">Claim</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6  pt-lg-0 pt-5">
                                    <div className="cardo mb-md-0 mb-5">
                                        <div className="img-container-div">
                                            <img src="merch/DRIVENVERSE.png" alt="metamasklogo" className='img-fluid' />
                                        </div>
                                        <div className="text-center mt-4">
                                            <h4 className='font-weight-bold text-white text-uppercase mb-2'><span className='common'>DRIVENVERSE Launch Party Tickets</span> </h4>
                                            <button className='btn-common-2 mt-5 text-uppercase w-75' data-toggle="modal" data-target="#exampleModalconfrim">Claim</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalconfrim">
                Launch demo modal
            </button> */}

            <>
                {/* //buy now modal */}
                <div class="modal fade" id="exampleModalconfrim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            {/* <div class="modal-header">
                                <h4 class="modal-title text-white text-center text-uppercase w-100" id="exampleModalLabel">Connect <span className='common'>Wallet</span> </h4>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"><img src="assets/errorSign.svg" alt="" /></button>
                            </div> */}
                            <div class="modal-body p-sm-4 p-4 text-center">
                                <div className="row pb-2 pt-1">

                                    <div className="col-md-12 my-auto p-0 text-left">
                                        <h4 className='font-weight-bold text-white mb-3 ml-3'>Contact <span className='common'>Information</span> </h4>
                                        <div className="row my-4">
                                            <div className="input-pack-container ">
                                                <div className="row">
                                                    <div className="col-md-6 d-flex flex-column">
                                                        <label for="exampleInputEmail1">full name</label>
                                                        <input type="text" placeholder='Enter your full name' />
                                                    </div>
                                                    <div className="col-md-6 d-flex flex-column">
                                                        <label for="exampleInputEmail1">email address</label>
                                                        <input type="text" placeholder='Enter your email address' />
                                                    </div>
                                                    <div className="col-md-6 d-flex flex-column">
                                                        <label for="exampleInputEmail1">Phone Number</label>
                                                        <input type="number" placeholder='enter Phone Number' />
                                                    </div>
                                                    <div className="col-md-6 d-flex flex-column">
                                                        <label for="exampleInputEmail1">shipping address</label>
                                                        <input type="text" placeholder='Enter shipping address' />
                                                    </div>
                                                    <div className="col-md-12 d-flex flex-column">
                                                        <label for="exampleInputEmail1">NFT number</label>
                                                        <input type="number" placeholder='Enter NFT number' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button className='btn-common-2  w-50  ' data-dismiss="modal">Confirm</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <div className="fotter-hide-top">
                <Footer />
            </div>
        </>
    )
}

export default NftPerks