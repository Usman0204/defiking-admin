/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./mint.scss";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import Navbar from "../landing/header/Navbar";
import { Table } from 'react-bootstrap';
const Mint = () => {
  const { account } = useWeb3React();

  const { login, logout } = useAuth();
  const [stake, setStake] = useState([])
  const [totaltoken, settotalstake]=useState(0);
  useEffect(async () => {
    getStakedNfts();
  }, []);

  //const whitelisted = arr.find((e) => e === account);
  // const allstakeddata = () => {

  //   var data = JSON.stringify(

  //     {
  //       query: `enableAccountStakings{
  //         id
  //         transaction{
  //           id
  //           timestamp
  //           blockNumber
  //           blockHash
  //           from
  //           to
  //           value
  //           gasPrice
  //         }
  //         account
  //         duration
  //       }
  //     }`,

  //       variables: {},
  //     });

  //   var config = {
  //     method: "post",
  //     url: "https://api.thegraph.com/subgraphs/name/wasif28/defi-kings",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       // setBattleDetails(response.data.data.battleStarteds);
  //       console.log("graph-data", response);

  //     })
  //     .catch(function (error) {

  //     });
  // };

  const getStakedNfts = () => {
    let account0 = "0xD653672D46F04bBAea506b1e126580f790e3ff25";
    var data = JSON.stringify({
      query: `{
        stakes{
            id
            account
            amount
            amountPercentageTotal
            duration
            startTime
            endTime
            dividendAmount
        } 
      }`,
      variables: {},
    });

    var config = {
      method: "post",
      url: "https://api.thegraph.com/subgraphs/name/wasif28/defi-kings",
      // url: "https://api.thegraph.com/subgraphs/name/ammarsjw/staking-metaskeletons-rinkeby",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        var dumb=0;
        let stak = response.data?.data?.stakes;
        setStake(stak);
        for (let index = 0; index < response.data?.data?.stakes.length; index++) {
          dumb =  dumb +  parseInt (response.data?.data?.stakes[index].amount);
          
        }
       settotalstake(dumb);
       console.log("heeee ,,,,,,,",totaltoken)
      })
      .catch(function (error) {
        console.log(error);
      });
     
     
  };




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
            {/* <div className="col-lg-3">
              <button className="btn btn-set">Add Funds</button>
            </div> */}
            <div className="col-lg-3">
              <button className="btn btn-set">Pay Now</button>
            </div>
            {/* <div className="col-lg-3">
              <button className="btn btn-set">Set Auto Pay</button>
            </div> */}
            <div className="col-lg-4">
              <button className="btn btn-set">Staked Token:  <span style={{fontSize:'12px'}}>{totaltoken / 10**9}  $DFK</span> </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="stakedwallet">
                <h4>List of All Wallet Staked</h4>
              </div>
              <div className="Tableclr">
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Wallet Address</th>
                      <th>Amount</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stake?.map((elem, key) => {
                      const { id } = elem;
                      return (
                        <tr index={key}>
                          <td>{key}</td>
                          <td>{elem?.account}</td>
                            <td>{elem?.amount / 10**9}</td>
                            <td>{new Date(elem.startTime * 1000).toUTCString()}</td>
                            <td>{new Date(elem.endTime * 1000).toUTCString()}</td>
                        </tr>
                      )
                    })
                    }


                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7">
              <button className="btn btn-set">List of Wallets Pending payment <span style={{ fontSize: "12px" }} > (staked mini 14 days) </span></button>
            </div>
            <div className="col-lg-3">
              <button className="btn btn-set">Pay All</button>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-12">

              <div className="Tableclr">
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                    <th>#</th>
                      <th>Wallet Address</th>
                      <th>Amount</th>
                      <th>Start Time</th>
                      <th>End Time</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <td>1</td>
                      <td>0x39bb0E2FDc2dC86f76c2c1Fe9e54744DEFcFf0E7</td> */}

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
