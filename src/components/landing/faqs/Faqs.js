import { useState } from 'react';
import './faqs.scss';
const Faqs = () => {
    return (
        <>
            <section className="main-faqs ptb" id="faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-content  ptb20">
                                <p className="grey text-md-left text-center">FAQ</p>
                                <h2 className="white">GET THE <span className="rainbow"> FACTS STRAIGHT </span>  </h2>
                                {/* <p className=" ptb20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br/> doloremque laudantium, totam rem aperiam eaque ipsa.</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 inner-upper">
                            <div className="inner-side ptb20">
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link d-flex justify-content-between align-items-center " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <h5 className="">Magni dolores eos qui ratione voluptatem sequi nesciunt?</h5>
                                                    <p className='font-weight-bold'>+</p>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                Regarding liquidity, we have setup outstanding features such as bankless bonus to motivate liquidity providers and we promote liquidity locking for new tokens to avoid rug pull situation. Primarily, our duty as a community is to ensure a constant exponential increase in liquidity size.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <h5 className="">Ut enim ad minima veniam, quis nostrum exercitationem?</h5>
                                                    <p className='font-weight-bold'>+</p>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                Although the future price of $TBT depends on the market. Meanwhile, our innovative plan towards boosting utility will definitely affect the price of $TBT positively. Moreover, we have a blazing community of holders who strongly  believe in Blazeswap project; this is factually advantageous to the value of $TBT.

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <h5 className="">Nisi ut aliquid ex ea commodi consequatur?</h5>
                                                    <p className='font-weight-bold'>+</p>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                We plan to expand our ecosystem by diversifying to scalable blockchains like Solana, Fantom, Polygon, Avalanche, etc. Apart from that, we will continue working on innovative products and services that will induce the overall expansion of the DeFi space.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfour">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                    <h5 className="">Quis autem vel eum iure reprehenderit qui in ea voluptate?</h5>
                                                    <p className='font-weight-bold'>+</p>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                            <div className="card-body">
                                                Prizes attract people to DEX and we are aware of that. You will earn free tokens for various activities and at different stages. For example, you’ll get free $TBT by staking LP tokens in farms. We’ll also be activating the lottery feature in the later phase of the project to boost your chances of earning more prizes.</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-tile'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='inner-content  text-center'>
                                    <img src="/hash-max-assets/community/community-gif.gif" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className='col-sm-6 my-auto pl-md-5'>
                                <div className='inner-content text-sm-left text-center mt-sm-0 mt-4'>
                                    <h6 className='grey text-uppercase'>Xenoverse Community</h6>
                                    <h2 className="white">JOIN THE</h2>
                                    <h2 className='rainbow'> Xenoverse <br></br> Community</h2>
                                    <button className='btn-common ptb20'><img src="/hash-max-assets/community/discord.svg" className='img-fluid mr-2' alt="" /> Join the Discord</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs;
