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
import { DistributeMultiple } from '../../hooks/distributeMultiple'
import moment from 'moment'
import BigNumber from 'bignumber.js';
const Mint = () => {
  const { account } = useWeb3React();
  const [date, setDate] = useState('');
  const [dateend, setDateEnd] = useState('');
  const { login, logout } = useAuth();
  const [stake, setStake] = useState([]);
  const [stakefilter, setfilterdata] = useState([]);
  const [totaltoken, settotalstake] = useState(0);
  const [dataof, setdataof] = useState([0]);
  const { DisperseMulti } = DistributeMultiple();
  const [tokenAddy, settokenAddy] = useState('');
  const [amount, setamount] = useState('');
  useEffect(async () => {
    getStakedNfts();
  }, []);
  var datestr = new Date();
  var unixTimestamp = moment(datestr, 'YYYY.MM.DD').unix();
  console.log(unixTimestamp, "hereeee");
  const handlePresaleEndDate = (e) => {

    console.log("break", date)
    setDateEnd(e.target.value)
    const epochStartTime = new Date(date).getTime() / 1000.0;
    const epochEndTime = new Date(dateend).getTime() / 1000.0;
    console.log("epochStartTime", epochStartTime)
    console.log("epochEndTime", epochEndTime);
    let filerdata = [];

    for (let index = 0; index < stake.length; index++) {
      if (stake[index].startTime >= epochStartTime && stake[index].endTime <= epochEndTime) {
        console.log("im  here", stake[index]);
        filerdata.push(stake[index]);
        console.log(filerdata);

        // setfilterdata(filerdata)
      }

    }

  }

  const handleChangeDate = (e) => {
    setDate(e.target.value)


  }


  const getStakedNfts = () => {
    let account0 = "0xD653672D46F04bBAea506b1e126580f790e3ff25";
    var data = JSON.stringify({
      query: `{
        stakes(first:1000){
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
        var dumb = 0;
        let stak = response.data?.data?.stakes;
        var newarr = [];
        for (let index = 0; index < response.data?.data?.stakes.length; index++) {
          if (unixTimestamp - response.data?.data?.stakes[index].startTime <= 1209600) {
            newarr.push(response.data?.data?.stakes[index])
          }

        }
        setfilterdata(newarr)
        console.log(newarr, "i m there too")
        setStake(newarr);
        for (let index = 0; index < newarr.length; index++) {
          dumb = dumb + parseInt(newarr[index].amount);

        }
        settotalstake(dumb);
        console.log("heeee ,,,,,,,", totaltoken)
      })
      .catch(function (error) {
        console.log(error);
      });


  };

  const makepayment = async () => {

    console.log("tokenaddy", tokenAddy);
    console.log("amount", amount);
    var datas = [];
    var dumb = 0;
    var totalper=0;
    var weightage=0;
    console.log("here it is", stakefilter)
    for (const elem of stakefilter) {
      datas.push(elem?.account)
    }
    console.log("filterdata", datas)
    var valarr = [];
    var newarr = (amount / datas).length;

    for (const elem of stakefilter) {
      
      totalper += parseFloat(elem.amountPercentageTotal);
    }

    console.log("percentagetoral", totalper);

    for (const elem of stakefilter) {
      weightage =  parseFloat(elem.amountPercentageTotal/totalper)
      let amount1= (parseInt(amount) * weightage)
     valarr.push(new BigNumber(amount1).multipliedBy(new BigNumber(10).pow(18)))
     dumb = dumb + amount1
    }
    console.log("here www", valarr )
  
   let res= await DisperseMulti(tokenAddy,datas, valarr)
  }


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

            {/* <div className="row"> */}
            {/* <div className="col-lg-3">
              <button className="btn btn-set">Add Funds</button>
            </div> */}
            {/* <div className="col-lg-3">
              <button className="btn btn-set">Pay Now</button>
            </div> */}
            {/* <div className="col-lg-3">
              <button className="btn btn-set">Set Auto Pay</button>
            </div> */}
            <div className="col-lg-4">
              <button className="btn btn-set">Staked Token:  <span style={{ fontSize: '12px' }}>{totaltoken / 10 ** 9}  $DFK</span> </button>
            </div>
            {/* </div> */}
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
                          <td>{key + 1}</td>
                          <td>{elem?.account}</td>
                          <td>{elem?.amount / 10 ** 9}</td>
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
              <button className="btn btn-set" data-toggle="modal" data-target="#exampleModalmerchfdd">Make payment to Wallets <span style={{ fontSize: "12px" }} > </span></button>
            </div>
            {/* <div className="col-lg-3">
              <button className="btn btn-set">Pay All</button>
            </div> */}
            {/* <div class="col-lg-6">
              <div class="form-group">
                <label for="example">Stake Start Time<span>*</span></label>
                <br></br>
                <div class="sd-container">

                  <input class="sd"
                    type="date"
                    value={date}
                    onChange={handleChangeDate}
                    id="party" type="datetime-local" name="partydate"  ></input>
                  <span class="open-button">
                    <button type="button">📅</button>
                  </span>

                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="example">Stake End Time<span>*</span></label>
                <br></br>
                <div class="sd-container">
                  <input class="sd"
                    type="date"
                    value={dateend}
                    onChange={handlePresaleEndDate}
                    id="party" type="datetime-local" name="partydate" ></input>
                  <span class="open-button">
                    <button type="button">📅</button>
                  </span>

                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row">
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
                    {stakefilter?.map((elem, key) => {
                      const { id } = elem;
                      return (
                        <tr index={key}>
                          <td>{key + 1}</td>
                          <td>{elem?.account}</td>
                          <td>{elem?.amount / 10 ** 9}</td>
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
            <div className="col-lg-6">
              <button className="btn btn-set"  >Pay</button>
            </div>

          </div> */}

          {/* //wallet connect modal */}
          <div class="modal fade" id="exampleModalmerchfdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-wallet">
              <div class="modal-content">
                <h3 className="p-4 text-center" style={{ color: 'white' }}>Set Token to Make Payment</h3>
                <div class="modal-body p-4 text-center">
                  <button className='w-100 ' type='button' >
                    <div className="row pb-2 pt-1">
                      <label>Enter Token address for Reward</label>
                      <input type="text" className="form-control" style={{ color: '#000' }} onChange={(e) => settokenAddy(e.target.value)}  ></input>
                      <label>Enter Amount to distribute all Address</label>
                      <input type="text" className="form-control" style={{ color: '#000' }} onChange={(e) => setamount(e.target.value)}></input>
                    </div>


                  </button>


                </div>
                <button className="btn btn-success text-center" onClick={makepayment}>Pay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );

}

export default Mint;
