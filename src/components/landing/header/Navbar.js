import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const { login, logout } = useAuth();
    const { account } = useWeb3React();
    const [shownav, setShowNav] = useState(false)


    const [open, Close] = useState(true);

    const connectMetamask = () => {
        localStorage.setItem('connectorId', 'injected');
        if (account) {
            logout();
        } else {
            login('injected');
        }
    };



    const showModal = () => {
        window.$("#exampleModal").modal('show');
    }
    const disconnect = () => {
        logout()
    }

    const Disconnect = async () => {
        logout();
        localStorage.setItem('connectorId', '');
    };
    const handleResize = () => {
        console.log("window.innerWidth", window?.innerWidth)
        if (window.innerWidth < 768) {
            setShowNav(false)
        } else {
            setShowNav(true)
        }
    }
    useEffect(() => {
        handleResize();
    }, [])
    const wallletconnect = () => {
        localStorage.setItem('connectorId', 'walletconnect');
        if (account) {
          logout();
        } else {
          login('walletconnect');
        }
      };
      const connectMetaMask = () => {
        console.log("$$$")
        if (account) {
          logout()
        } else {
          login("injected")
        }
      } 

      useEffect(()=>{
        login("injected");
      },[])

    return (
        <section className="main-navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-11 mx-auto">
                        {/* mobile */}
                        {/* <nav className="navbar d-block d-lg-none w-100 queryFlex navbar-expand-lg ">
                            <a className="navbar-brand" href="/">
                                <img src="hash-max-assets/header/logo.png" className="img-fluid logoIMg" alt="" />
                            </a>
                            <button onClick={() => Close(true)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <div class="style-bar"></div>
                                <div class="style-bar"></div>
                                <div class="style-bar"></div>
                            </button>
                            {open && <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <HashLink className="nav-link my-1 " to="#collection">
                                            Collection
                                        </HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link my-1 " to="#roadmap">
                                            Roadmap
                                        </HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link my-1 " to="#team">
                                            Staking
                                        </HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link my-1 " to="/merch" >
                                            Merch
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link my-1 " to="/nftperks">
                                            NFT perks
                                        </NavLink>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <a className="">
                                        <img src="hash-max-assets/header/twitter-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a>
                                    <a className="">
                                        <img src="hash-max-assets/header/discord-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a>
                                    <a className="">
                                        <img src="hash-max-assets/header/instagram-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a>
                                </form>
                            </div>
                            }
                        </nav> */}
                        {/* mobile */}
                        {/* laptop */}
                        <nav className="navbar   navbar-expand-lg ">
                            <Link className="navbar-brand" to="/">
                                <img src="logo.svg" className="img-fluid logoIMg" alt="" />
                            </Link>
                            {/* onClick={() => setShowNav(!shownav)}  */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <div class="style-bar"></div>
                                <div class="style-bar"></div>
                                <div class="style-bar"></div>
                            </button>
                            {/* {shownav && */}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav mx-auto">
                                    {/* <li className="nav-item">
                                        <HashLink className="nav-link " to="/#collection">
                                            Our Roadmap
                                        </HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link " to="/#roadmap">
                                            FAQS
                                        </HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link " to="/#team">
                                           About US
                                        </HashLink>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <Link exact className="nav-link " to="/merching"  >
                                            Merch
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/nftperks">
                                            NFT perks
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/minting">
                                            Mint
                                        </Link>
                                    </li> */}

                                </ul>
                                <div className="form-inline my-2 my-lg-0">
                                    {/* <a href='https://www.twitter.com/drivenuniverse' className="" target="_blank">
                                        <img src="hash-max-assets/header/twitter-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a>
                                    <a href='https://discord.gg/FFcVEp89' className="" target="_blank">
                                        <img src="hash-max-assets/header/discord-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a>
                                    <a href='https://www.instagram.com/drivenuniverse/' className="" target="_blank">
                                        <img src="hash-max-assets/header/instagram-icon.svg" className="img-fluid socialHeight" alt="" />
                                    </a> */}
                                    <button className='btn-common connectButton' data-toggle="modal" data-target="#exampleModalmerchf">{account ? "Disconnect Wallet" : "Connect Wallet" }</button>
                                </div>
                            </div>
                            {/* } */}
                        </nav>
                        {/* laptop */}
                    </div>
                </div>

            </div>

            {/* //wallet connect modal */}
            <div class="modal fade" id="exampleModalmerchf" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-wallet">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-white text-center text-uppercase w-100" id="exampleModalLabel">{account ? "Disconnect Wallet" : "Connect Wallet" }</h4>
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
        </section>
    )
}

export default Navbar;