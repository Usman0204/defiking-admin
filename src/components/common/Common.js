import React, { useState } from 'react'
import './common.scss'
import Img1 from "../../Assets/common/b1.png";
import Img2 from "../../Assets/common/b2.png";
import Img3 from "../../Assets/common/b3.png";
import Img4 from "../../Assets/common/b4.png";
import Img5 from "../../Assets/common/m1.png";
import Img6 from "../../Assets/common/m2.png";
import Img7 from "../../Assets/common/m3.png";
import Img8 from "../../Assets/common/m4.png";
import Img9 from "../../Assets/common/ml1.png";
import Img10 from "../../Assets/common/ml2.png";
import Img11 from "../../Assets/common/ml3.png";
import Img12 from "../../Assets/common/ml4.png";
import Img13 from "../../Assets/common/w1.png";
import Img14 from "../../Assets/common/w2.png";
import Img15 from "../../Assets/common/w3.png";
import Img16 from "../../Assets/common/w4.png";
import Img17 from "../../Assets/common/l1.png";
function Common() {
    const [currentImg, setCurrentImg] = useState(Img1);
    const [currentImg2, setCurrentImg2] = useState(Img5);
    const [currentImg3, setCurrentImg3] = useState(Img9);
    const [currentImg4, setCurrentImg4] = useState(Img13);
    const [currentImg5, setCurrentImg5] = useState(Img1);
    const [tab, setTab] = useState('common')
    const [arr, setArr] = useState([
        { id: 1, src: Img2 },
        { id: 2, src: Img3 },
        { id: 3, src: Img4 },
    ])
    const [arr2, setArr2] = useState([
        { id: 1, src: Img6 },
        { id: 2, src: Img7 },
        { id: 3, src: Img8 },
    ])
    const [arr3, setArr3] = useState([
        { id: 1, src: Img10 },
        { id: 2, src: Img11 },
        { id: 3, src: Img12 },
    ])
    const [arr4, setArr4] = useState([
        { id: 1, src: Img14 },
        { id: 2, src: Img15 },
        { id: 3, src: Img16 },
    ])

    const setImg = (val) => {
        let dumVal = val.src;
        let dumVal2 = arr;
        dumVal2.filter((i) => {
            if (i.id === val.id) {
                val.src = currentImg;
            }
        })
        setCurrentImg(dumVal);
        setArr(dumVal2);
    };
    const setImg2 = (val) => {
        let dumVal = val.src;
        let dumVal2 = arr2;
        dumVal2.filter((i) => {
            if (i.id === val.id) {
                val.src = currentImg2;
            }
        })
        setCurrentImg2(dumVal);
        setArr2(dumVal2);
    };
    const setImg3 = (val) => {
        let dumVal = val.src;
        let dumVal2 = arr3;
        dumVal2.filter((i) => {
            if (i.id === val.id) {
                val.src = currentImg3;
            }
        })
        setCurrentImg3(dumVal);
        setArr3(dumVal2);
    };
    const setImg4 = (val) => {
        let dumVal = val.src;
        let dumVal2 = arr4;
        dumVal2.filter((i) => {
            if (i.id === val.id) {
                val.src = currentImg4;
            }
        })
        setCurrentImg4(dumVal);
        setArr4(dumVal2);
    };
    // const setImg2 = (val) => {
    //     let dumVal = val.src;
    //     let dumVal2 = arr2;
    //     dumVal2.filter((i) => {
    //         if (i.id === val.id) {
    //             val.src = currentImg2;
    //         }
    //     })
    //     setCurrentImg2(dumVal);
    //     setArr2(dumVal2);
    // };

    console.log("$$$$$$$$$", arr)

    return (
        <>
            <div className="common-main ptb">
                <div className="container-fluid">
                    <div className="row ptb">
                        <div className="col-10 p-0 mx-auto bg-light">
                            <div className="row">
                                <div className="col-xl-5 mb-5">
                                    {tab === 'common' &&
                                        <div className=" ">
                                            <img className="img-fluid roundede w-100 imageCover" src={currentImg} alt="" />
                                            <div className="images" >
                                                {arr.map((item, index) => {
                                                    return (
                                                        <img
                                                            key={index}
                                                            className="w-25"
                                                            onClick={() => setImg(item)}
                                                            src={item.id === index + 1 ? item.src : Img2}
                                                            alt=""
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    }

                                    {tab === 'uncommon' &&
                                        <div className=" ">
                                            <img className="img-fluid roundede w-100 imageCover" src={currentImg2} alt="" />
                                            <div className="images">
                                                {arr2.map((item, index) => {
                                                    return (
                                                        <img
                                                            key={index}
                                                            className="w-25"
                                                            onClick={() => setImg2(item)}
                                                            src={item.id === index + 1 ? item.src : Img5}
                                                            alt=""
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    }
                                    {tab === 'rare' &&
                                        <div className=" ">
                                            <img className="img-fluid roundede w-100 imageCover" src={currentImg3} alt="" />
                                            <div className="images">
                                                {arr3.map((item, index) => {
                                                    return (
                                                        <img
                                                            key={index}
                                                            className="w-25"
                                                            onClick={() => setImg3(item)}
                                                            src={item.id === index + 1 ? item.src : Img9}
                                                            alt=""
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    }
                                    {tab === 'ultrarare' &&
                                        <div className=" ">
                                            <img className="img-fluid roundede w-100 imageCover" src={currentImg4} alt="" />
                                            <div className="images">
                                                {arr4.map((item, index) => {
                                                    return (
                                                        <img
                                                            key={index}
                                                            className="w-25"
                                                            onClick={() => setImg4(item)}
                                                            src={item.id === index + 1 ? item.src : Img13}
                                                            alt=""
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    }
                                    {tab === 'legendary' &&
                                        <div className=" ">
                                            <img className="img-fluid roundede w-100 imageCover" src={Img17} alt="" />
                                        </div>
                                    }

                                </div>
                                <div className="col-xl-7 mb-5 pl-xl-5">
                                    <ul class="nav customNavs nav-pills timelineUl mb-3 d-flex justify-content-between" id="pills-tab" role="tablist">
                                        <li onClick={() => setTab('common')} class="nav-item text-center mt-sm-0 mt-3" role="presentation">
                                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><img className='impfilter' src="\driven-assets\timeline\common.png" alt="" /></a>
                                            <h5 className=' text-white mt-2 robot'>COMMON</h5>
                                        </li>
                                        <li onClick={() => setTab('uncommon')} class="nav-item text-center mt-sm-0 mt-3" role="presentation">
                                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><img src="\driven-assets\timeline\uncommon.png" alt="" /></a>
                                            <h5 className=' text-white mt-2 robot'>UNCOMMON</h5>
                                        </li>
                                        <li onClick={() => setTab('rare')} class="nav-item text-center mt-sm-0 mt-3" role="presentation">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><img src="\driven-assets\timeline\rare.png" alt="" /></a>
                                            <h5 className=' text-white mt-2 robot'>RARE</h5>
                                        </li>
                                        <li onClick={() => setTab('ultrarare')} class="nav-item text-center mt-sm-0 mt-3" role="presentation">
                                            <a class="nav-link" id="pills-profile-tab1" data-toggle="pill" href="#pills-profile1" role="tab" aria-controls="pills-profile" aria-selected="false"><img src="\driven-assets\timeline\uncommon.png" alt="" /></a>
                                            <h5 className=' text-white mt-2 robot'>ULTRA RARE</h5>
                                        </li>
                                        <li onClick={() => setTab('legendary')} class="nav-item text-center mt-sm-0 mt-3" role="presentation">
                                            <a class="nav-link" id="pills-contact-tab1" data-toggle="pill" href="#pills-contact1" role="tab" aria-controls="pills-contact" aria-selected="false"><img src="\driven-assets\timeline\rare.png" alt="" /></a>
                                            <h5 className=' text-white mt-2 robot'>LEGENDARY</h5>
                                        </li>
                                    </ul>
                                    <div class="tab-content text-white ptb" id="pills-tabContent">
                                        <div class="tab-pane text-white fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h2>DRIVEN BULLISH COLLECTION</h2>
                                                {/* <h4 className='d-flex align-items-end'>35 <p>UNITS</p></h4> */}
                                            </div>
                                            <div className='pt-4 lightSpan'>
                                                <p>TOTAL: <span>4000 NFTS</span> </p>
                                                <p>40 <span>DESIGNS</span></p>
                                                <p>RARITY: <span>1:100</span></p>
                                                <p>LEVEL: <span>COMMON</span></p>
                                                <p>PERKS: <span>UNLOCK DRIVEN ALPHA MERCH STORE ACCESS
                                                    2 DAY PASSES TO DRIVEN VERSE (ETA JULY 2022)</span></p>
                                                <p>ATTRIBUTE: <span>BULL</span></p>
                                            </div>

                                        </div>

                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h2 className=''>DRIVEN TO THE MOON COLLECTION</h2>
                                                {/* <h4 className='d-flex align-items-end'>35 <p>UNITS</p></h4> */}
                                            </div>
                                            <div className='pt-4 lightSpan'>
                                                <p>TOTAL: <span> 949 NFTS</span></p>
                                                <p>20 <span>DESIGNS</span></p>
                                                <p>RARITY: <span>1:50</span> </p>
                                                <p>LEVEL: <span>UNCOMMON</span></p>
                                                <p>PERKS: <span>UNLOCK DRIVEN ALPHA MERCH STORE, 2 DAY PASSES TO DRIVEN VERSE (ETA JULY 2022), 1 DRIVENVERSE LAUNCH PARTY VIRTUAL TICKET (ETA AUGUST 2022), ACCESS TO ALL DRIVENVERSE VR TRADING SUMMITS WITH GENERAL ADMISSION</span></p>
                                                <p>ATTRIBUTE: <span> ROCKETS & ASTRONAUTS</span></p>
                                            </div>

                                        </div>

                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h2>DRIVEN MILLIONAIRE COLLECTION</h2>
                                            </div>
                                            <div className='pt-4 lightSpan'>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p>TOTAL: <span>50 NFTS</span></p>
                                                    <h6 className='d-flex align-items-end'>ATTRIBUTE:<span className='invisible'>.</span><span> LION</span></h6>
                                                </div>
                                                <p>25 <span>DESIGNS</span></p>
                                                <p>RARITY: <span>1:2</span></p>
                                                <p>LEVEL: <span>RARE</span></p>
                                                <p>PERKS: <span>UNLOCK DRIVEN ALPHA MERCH STORE, 2 DAY PASSES TO DRIVEN VERSE (ETA JULY 2022), 1 DRIVENVERSE LAUNCH PARTY VIRTUAL TICKET (ETA AUGUST 2022), 2 DRIVEN TRADING SUMMIT VIP TICKETS, VIP ACCESS TO ALL DRIVENVERSE EVENTS, NFT ART PHYSICAL CANVAS</span>
                                                </p>
                                            </div>

                                        </div>
                                        <div class="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h2>DRIVEN WOLFPACK COLLECTION</h2>
                                            </div>
                                            <div className='pt-4 lightSpan'>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p>TOTAL: <span>10 NFTS</span></p>
                                                    <h6 className='d-flex align-items-end'>ATTRIBUTE: <span className='invisible'>.</span><span>WOLF</span></h6>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p>10 <span>DESIGNS</span> </p>
                                                    <h6 className='d-flex align-items-end'>RARITY: <span className='invisible'>.</span><span> 1:1</span></h6>
                                                </div>

                                                <p>LEVEL: <span>ULTRA RARE</span></p>
                                                <p>LEVEL: <span>RARE</span></p>
                                                <p><span>UNLOCK DRIVEN ALPHA MERCH STORE ACCESS
                                                    2 DAY PASSES TO DRIVEN VERSE (ETA JULY 2022)
                                                    DRIVENVERSE LAUNCH PARTY VIRTUAL TICKET
                                                    (ETA AUGUST 2022)
                                                    2 DRIVEN TRADING SUMMIT ALL ACCESS TICKETS
                                                    NFT ART CANVAS
                                                    WOLFPACK MASTERMIND INVITATION
                                                    ROLEX</span></p>
                                            </div>


                                        </div>
                                        <div class="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h2>DRIVEN ALPHA#001 NFT</h2>
                                                {/* <h4 className='d-flex align-items-end'>35 <p>UNITS</p></h4> */}
                                            </div>
                                            <div className='pt-4 lightSpan'>
                                                <p>TOTAL: <span>1 NFTS</span></p>
                                                <p>1 <span>DESIGN</span></p>
                                                <p>RARITY: <span>1:1</span></p>
                                                <p>LEVEL: <span>LEGENDARY</span> </p>
                                                <p>PERKS: <span>UNLOCK DRIVEN ALPHA MERCH STORE ACCESS
                                                    2 DAY PASSES TO DRIVEN VERSE (ETA JULY 2022)
                                                    DRIVENVERSE LAUNCH PARTY VIRTUAL TICKET
                                                    (ETA AUGUST 2022)
                                                    2 DRIVEN TRADING SUMMIT ALL ACCESS TICKETS
                                                    NFT ART CANVAS
                                                    WOLFPACK MASTERMIND INVITATION
                                                    ROLEX  720S MCLAREN</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                    {/* <ul className="list-inline joinusBtn">
                                        <li className="list-inline-item">
                                            <button className="btn-common"><img src="hash-max-assets/header/discord-icon.svg" alt="" /> Join us on Discord</button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button className="btn-common"><img src="hash-max-assets/header/twitter-icon.svg" alt="" /> Join us on Twitter</button>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common