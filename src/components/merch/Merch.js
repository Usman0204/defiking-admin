import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import Footer from '../landing/footer/Footer'
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../hooks/useAuth'
import './merch.scss'
import Category from './ListitemArray';
import CartData from './CartData'
import { addToCart, setproducts } from '../../redux/action/ProductActios'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../landing/header/Navbar'
import Lock from '../../images/tshirt.jpg'

function Merch() {
    const dispatch = useDispatch();
    const history = useHistory();
    const modalButton = () => {
        window.$("#exampleModalbuynow").modal('hide');
        history.push('/checkout');
    }
    const { account } = useWeb3React();
    console.log("account", account)
    const { login, logout } = useAuth();
    const connectMetaMask = () => {
        console.log("connect wallet ")
        if (account) {
            logout()
        } else {
            login("injected")
        }
    }
    // console.log("account", account)
    const wallletconnect = () => {
        localStorage.setItem('connectorId', 'walletconnect');
        if (account) {
            logout();
        } else {
            login('walletconnect');
        }
    };
    const [category, setCategory] = useState('Small');
    const [modalOBJ, setModalOBJ] = useState({});
    console.log("modalobj", modalOBJ)
    const BuyNow = (pid) => {
        let dumObj = CartData.find((i) => i.id === pid);
        setModalOBJ(dumObj);
    }
    const categoryupdate = (elem) => {
        // console.log("category we he hdre ",elem)
        setCategory(elem)
        setModalOBJ({...modalOBJ , size :elem });
    }

    useEffect(() => {
        if(account){
            window.$("#exampleModalmerch").modal('hide');
        }else{
            window.$("#exampleModalmerch").modal('show');  
        }
    }, [account])
    
    const allproduct = CartData.map((elem) => {
        const { id, src, productname, detail, price } = elem;
        return (
            <div className="col-md-4 " key={id}>
                <div className="cardo mb-md-0 mb-5">
                    <div className="img-container-div">
                        <img src={Lock} alt="metamasklogo" className='img-fluid' />
                    </div>
                    <div className="text-center mt-4">
                        <h4 className='font-weight-bold text-white mb-2'>Driven trading <span className='common'>{productname}</span> </h4>
                        {/* <p className='text-secondary'>{detail}</p> */}
                        <button className='btn-common-2 mt-3  w-75' data-toggle="modal" onClick={() => BuyNow(elem.id)} data-target="#exampleModalbuynow">BUY NOW</button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="merch-main">
                <Navbar/>
                <div className="container-fluid pb-5">
                    <div className="row">
                        <div className="col-sm-11 mx-auto">
                            <div className="heading-div text-center mt-5">
                                <h2>Driven trading <span className='common'>merch</span> </h2>
                                {/* <p className='py-2'>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium <br /> doloremque totam rem aperiam.</p> */}
                            </div>
                            <div className="row ptb my-5">
                                {allproduct ? allproduct : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* //wallet connect modal */}
            <div class="modal fade"  id="exampleModalmerch" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-wallet">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white text-center text-uppercase w-100" id="exampleModalLabel">Connect <span className='common'>Wallet</span> </h4>
                            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"><img src="assets/errorSign.svg" alt="" /></button>
                        </div>
                        <div class="modal-body p-4 text-center">
                            <button className='w-100 ' type='button' >
                                <div className="row pb-2 pt-1">
                                    {account ?
                                        <div className='outerdivs-meta' onClick={connectMetaMask}>
                                            <div className="col-12 text-end">
                                                <img src="merch/MetaMask_Fox.png" alt="metamasklogo" className='img-fluid' />
                                            </div>
                                            <div className="col-12 my-auto p-0 text-start">
                                                <p>Disconnect Metamask</p>
                                            </div>
                                        </div>
                                        :
                                        <div className='outerdivs-meta' onClick={connectMetaMask}>
                                            <div className="col-12 text-end">
                                                <img src="merch/MetaMask_Fox.png" alt="metamasklogo" className='img-fluid' />
                                            </div>
                                            <div className="col-12 my-auto p-0 text-start">
                                                <p>Connect Metamask</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </button>
                            <button className='w-100 mt-3' type='button' >
                                <div className="row pb-2">
                                    {account ?
                                        <div className='walletconnect' onClick={wallletconnect}>
                                            <div className="col-12 text-end ">
                                                <img src="merch/walletconnect.png" className='img-fluid' alt="walletconnect logo" />
                                            </div>
                                            <div className="col-12 my-auto p-0 text-start">
                                                <p>Wallet Disconnect</p>
                                            </div>
                                        </div>
                                        :
                                        <div className='walletconnect' onClick={wallletconnect}>
                                            <div className="col-12 text-end ">
                                                <img src="merch/walletconnect.png" className='img-fluid' alt="walletconnect logo" />
                                            </div>
                                            <div className="col-12 my-auto p-0 text-start">
                                                <p>WalletConnect</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* //buy now modal */}
            {/* {account ? */}
                <div class="modal fade" id="exampleModalbuynow" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            {/* <div class="modal-header">
                                  <h4 class="modal-title text-white text-center text-uppercase w-100" id="exampleModalLabel">Connect <span className='common'>Wallet</span> </h4>
                                  <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"><img src="assets/errorSign.svg" alt="" /></button>
                              </div> */}
                            <div class="modal-body p-4 text-center">
                                <div className="row pb-2 pt-1">
                                    <div className="col-md-6 pb-md-0 pb-4 text-end">
                                        <div className="imgDiv">
                                            {/* <img src={modalOBJ?.src} alt="Picture" className='img-fluid' /> */}
                                            <img src={Lock} alt="Picture" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-auto p-0 text-left">
                                        <h4 className='font-weight-bold text-white mb-3'>Driven trading <span className='common'>{modalOBJ?.productname}</span> </h4>
                                        {/* <p className='text-secondary'>{modalOBJ?.detail}</p> */}
                                        <div className="row my-4">
                                            <div className="col-12 pl-0 text-left">
                                                <p>Product Price</p>
                                                <h6 className='skdj'>{modalOBJ?.price}</h6>
                                                <div class="form-group main-text-feild-head ">
                                                    <label For="name">Choose Category</label>
                                                    <div className="button-list">
                                                        <div className="dropdown buttons-list-all">
                                                            <button className="button-listing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <p>{category ? category : null}</p>
                                                                {/* <img src="\bluemoon-nft\popular-sellers\dropdown-icon.svg" className="img-fluid main-same-img" /> */}
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                {Category.map((elem) => {
                                                                    return (
                                                                        <a className="dropdown-item" onClick={() => {
                                                                            categoryupdate(elem.item?elem.item:'Small');
                                                                        }}>{elem.item}</a>
                                                                    )
                                                                }
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={modalButton}>
                                            <button type='button' className='btn-common-2  w-100' onClick={() => dispatch(addToCart(modalOBJ))}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* : null} */}
            <div className="fotter-hide-top">
                <Footer />
            </div>
        </>
    )
}

export default Merch