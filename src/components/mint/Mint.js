/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Minting from "../../hooks/Minting";
import "./mint.scss";
import { useWeb3React } from "@web3-react/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckMint from "../../hooks/minted";
// import Loader from "../../hooks/loader";
import CheckWhiteOne from "../../hooks/checkWhitelist";
import CheckWhiteTwo from "../../hooks/whiteList2";
import Footer from "../landing/footer/Footer";
import CheckFees from "../../hooks/getFees";
import useAuth from "../../hooks/useAuth";
import Navbar from "../landing/header/Navbar";
import arr from "../../hooks/wallet1";
import CheckPurchase from "../../hooks/maxPurchase";
import CheckPublicSale from "../../hooks/publicSale";
import { Table } from 'react-bootstrap';
const Mint = () => {
  const { account } = useWeb3React();
  const { WhiteOne } = CheckWhiteOne();
  const { WhiteTwo } = CheckWhiteTwo();
  const [minted, setMinted] = useState(0);
  const [toMint, setToMint] = useState(1);
  const [whitePhase, setWhitePhase] = useState(0);
  const [publicSale, setPublicSale] = useState(false);
  const [mainLoader, setMainLoader] = useState(false);
  const [fees, setFees] = useState(0);
  const [white, setWhite] = useState(false);
  const [maxMint, setMaxMint] = useState(0);
  const { userMinting } = Minting();
  const { minte } = CheckMint();
  const { Fees } = CheckFees();
  const { Purchase } = CheckPurchase();
  let address = require("../../hooks/wallet1");
  let address2 = require("../../hooks/wallet2");
  const { Public } = CheckPublicSale();
  const { login, logout } = useAuth();
  const Subtract = () => {
    if (toMint > 1) {
      setToMint(toMint - 1);
    }
  };

  useEffect(async () => {
    const res = await Public();
    await setPublicSale(res);
  }, []);

  // useEffect(async () => {
  //   const res = await WhiteOne();
  //   if (res === false) {
  //     const res0 = await WhiteTwo();
  //     if (res0 === false) {
  //       setWhitePhase(2);
  //     } else {
  //       setWhitePhase(0);
  //     }
  //   } else {
  //     setWhitePhase(1);
  //   }
  // }, []);

  const whitelisted = arr.find((e) => e === account);

  useEffect(() => {
    if (whitePhase !== 0 && account) {
      console.log("0000000000000000000");
      if (whitePhase === 1) {
        let status = address.find((i) => {
          return i === account;
        });
        if (status) {
          setWhite(true);
        } else {
          setWhite(false);
        }
      } else if (whitePhase === 2) {
        let status = address2.find((i) => {
          return i === account;
        });
        if (status) {
          setWhite(true);
        } else {
          setWhite(false);
        }
      }
    }
  }, [whitePhase]);

  const Add = () => {
    if (toMint < maxMint) {
      setToMint(toMint + 1);
    }
  };

  useEffect(async () => {
    const res0 = await Fees();
    await setFees(parseInt(res0) / 1000000000000000000);
  }, []);

  useEffect(async () => {
    const res0 = await Purchase();
    await setMaxMint(parseInt(res0));
  }, []);

  const startMinting = async () => {
    if (whitelisted) {
      if (account && toMint > 0) {
        setMainLoader(true);

        // if (res0) {
        const res = await userMinting(toMint);
        if (res?.code === 4001) {
          await setMainLoader(false);
        } else if (res?.code) {
          await setMainLoader(false);
          // await toast.error("Transaction failed!");
        } else {
          await toast.success("Minted Successfully!");
          await setMainLoader(false);
        }
        // }
      }
    } else if (publicSale === false) {
      toast.error("Account not whitelisted");
    } else if (publicSale && account) {
      const res = await userMinting(toMint);
    }
  };

  useEffect(async () => {
    const res = await minte();
    await setMinted(res);
  }, []);
  useEffect(() => {
    if (account) {
      window.$("#exampleModalmerch").modal("hide");
    } else {
      window.$("#exampleModalmerch").modal("show");
    }
  }, [account]);

  return (
    <>
      <ToastContainer />
      {/* {mainLoader && <Loader />} */}
      <div className="brdr"></div>
      <section className="main-banner-mint" id="aboutus">
        <Navbar />
        <div className="container p-0">
          < div className="row">
            <div className="col-md-12" >
              <div className="header">
                <h3>DEFI KINGS TRACKER  & BONUS PAY DASHBOARD</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <button className="btn btn-set">Add Funds</button>
            </div>
            <div className="col-lg-3">
              <button className="btn btn-set">Pay Now</button>
            </div>
            <div className="col-lg-3">
              <button className="btn btn-set">Set Auto Pay</button>
            </div>
            <div className="col-lg-3">
              <button className="btn btn-set">Total Staked Token:</button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="stakedwallet">
                <h4>List of All Wallet Staked</h4>
              </div>
              <div className="Tableclr">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Wallet Address</th>
                 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>0x39bb0E2FDc2dC86f76c2c1Fe9e54744DEFcFf0E7</td>
               
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0x39bb0E2FDc2dC86f76c2c1Fe9e54744DEFcFf0E7</td>
                
                  </tr>
                 
                </tbody>
              </Table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <button className="btn btn-set">List of Wallets Pending payment (staked mini 14 days)</button>
            </div>
            <div className="col-lg-3">
              <button className="btn btn-set">Pay All</button>
            </div>
            
          </div>
          <div className="row">
            <div className="col-lg-12">
             
              <div className="Tableclr">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Wallet Address</th>
                 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>0x39bb0E2FDc2dC86f76c2c1Fe9e54744DEFcFf0E7</td>
               
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0x39bb0E2FDc2dC86f76c2c1Fe9e54744DEFcFf0E7</td>
                
                  </tr>
                 
                </tbody>
              </Table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <button className="btn btn-set">Clear Pending List Without Payment</button>
            </div>
           
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Mint;
