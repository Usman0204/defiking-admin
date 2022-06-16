import React, { useState, useEffect } from 'react'
import Footer from '../landing/footer/Footer'
import './checkout.scss'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '../../redux/action/ProductActios';
import { API_URL } from '../../utils/ApiURL';
import axios from "axios";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useHistory } from 'react-router-dom';
import Navbar from '../landing/header/Navbar';
function Checkout() {
  const history = useHistory();
  const getcartItem = useSelector(state => state.cart.products);
  console.log("items we have here is ", getcartItem)
  const dispatch = useDispatch();
  const upQuantity = (id, e) => {
    let qty = e.target.value;
    console.log(qty, id)
    dispatch(updateQuantity(id, qty));
  }
  const [country, setcountry] = useState(0);
  const [region, setregion] = useState(0);
  const [Tprice, setTprice] = useState(0);
  const getprice = useSelector(state => state.cart.products);
  const getallprice = getprice.map((elem) => {
    const id = elem.id;
    const price = elem.price;
    const qty = elem.qty;
    return {
      id, price, qty
    }
  });
  const getItem = getcartItem.map((elem) => {
    const quantity = parseInt(elem.qty);
    const a = elem.price * 100;
    const unitAmount = parseInt(a)
    const name = elem.productname;
    return {
      name, quantity, unitAmount
    }
  })
  console.log("asdfasdfasd", getItem)
  const shipping = 20
  const discount = 10 / 100 * (Tprice)
  const grandtotal = (shipping + Tprice) - discount
  useEffect(() => {
    const totalprice = getallprice.reduce((accu, elem) => {
      const tPrice = accu + elem.price * elem.qty;
      return tPrice;
    }, 0);
    setTprice(totalprice)
  }, [getprice])

  const checkoutProduct = () => {
    axios.post(`${API_URL}payments/checkout-session`, { products: getItem })
      .then((response) => {
        console.log("responce", response.data.data.checkoutUrl)
        window.location.href = response.data.data.checkoutUrl
      })
      .catch((err) => {
        return false;
      })
  }

  const getallcartItem = getcartItem.length > 0 ? getcartItem.map((elem) => {
    return (
      <div className="row rowContainer ptb20 my-2 " key={elem.id}>
        <div className="col-lg-4 col-md-2 col-4 pl-0">
          <div className="img-container-div2">
            <img src={elem.src} alt="metamasklogo" className='img-fluid' />
          </div>
        </div>
        <div className="col-lg-8 col-md-10 col-8 pr-0 pl-0">
          <div className="content-container-div2">
            <div>
              <h6 className='font-weight-bold'>{elem.productname}</h6>
              <div className="counter-size-div">
                <div className="div">
                  <p className='my-2'>SIZE: <span className='common'>{elem.size}</span> </p>
                  <p className="common">${elem.price}</p>
                </div>
              </div>
            </div>
            <div className='aksmaskm'>
              <h6 className='font-weight-bold'>Quantity</h6>
              <select className="counter-div" onChange={(e) => upQuantity(elem.id, e)}>
                <option value="">{elem.qty}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <div className='addmore'>
                      <Link className='addmoreza mt-3' to="/merching">Remove</Link>
                    </div>
            </div>

          </div>
        </div>
      </div>
      //  {/* <div><button>Add More</button></div> 
    )
  }) : <div>Empty Cart</div>;

  return (
    <>
      <section className="checkout-main">
        <Navbar/>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                {/* <div className="col-lg-8 "> */}
                {/* <div className="input-pack-container ptb">
                    <div className="row">
                      <div className="col-md-12 d-flex flex-column">
                        <h4>Personal Details</h4>
                      </div>
                      <div className="col-md-6 d-flex flex-column">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" placeholder='Enter your first name' />
                      </div>
                      <div className="col-md-6 d-flex flex-column">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" placeholder='Enter your last name' />
                      </div>
                      <div className="col-md-6 d-flex flex-column">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input type="number" placeholder='enter' />
                      </div>
                      <div className="col-md-6 d-flex flex-column">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" placeholder='Enter email address' />
                      </div>
                    </div>
                  </div> */}
                {/* <div className="input-pack-container ptb">
                    <div className="row">
                      <div className="col-md-12 d-flex flex-column">
                        <h4>Shipping Details</h4>
                      </div>
                      <div className="col-md-12 d-flex flex-column">
                        <label for="exampleInputEmail1">Street Address</label>
                        <input type="text" placeholder='Enter street address' />
                      </div>
                      <CountryDropdown
                        value={country}
                        onChange={(val) => setcountry(val)} />
                      <RegionDropdown
                        country={country}
                        value={region}
                        onChange={(val) => setregion(val)} />
                      <div className="col-md-4 d-flex flex-column">
                        <label for="exampleInputEmail1">Country</label>
                        <select class="custom-select ">
                          <option selected>Select Country</option>
                          <option value="1">Pk</option>
                          <option value="2">Chn</option>
                          <option value="3">US</option>
                        </select>
                      </div>
                      <div className="col-md-4 d-flex flex-column">
                        <label for="exampleInputEmail1">City</label>
                        <input type="text" placeholder='City' />
                      </div>
                      <div className="col-md-4 d-flex flex-column">
                        <label for="exampleInputEmail1">Zip Code</label>
                        <input type="text" placeholder='Zip Code' />
                      </div>
                    </div>
                  </div> */}
                {/* <div className="input-pack-container ptb mb-5 border-0">
                    <div className="row">
                      <div className="col-md-12 d-flex flex-column">
                        <h4>Payment</h4>
                      </div>
                      <div className="col-md-6 d-flex flex-column">
                        <label for="exampleInputEmail1">Card Number</label>
                        <input type="text" placeholder='***** ****** ***** ******' />
                      </div>
                      <div className="col-md-6 d-flex flex-column">
                        <label for="exampleInputEmail1">Card hoder name</label>
                        <input type="text" placeholder='Enter card holder name' />
                      </div>
                      <div className="col-md-6 d-flex flex-column">
                        <label for="exampleInputEmail1">Expiry date</label>
                        <input type="date" placeholder='MM/YY' className='w-100' />
                      </div>
                      <div className="col-md-6 d-flex flex-column">
                        <label for="exampleInputEmail1">cvc/cvv</label>
                        <input type="text" placeholder='CVC/CVV' />
                      </div>
                    </div>
                  </div> */}
                {/* </div> */}
                <div className="col-lg-4  col-12 ptb m-auto">
                  <div className="side-checkout-div text-white ">
                    <h6 className='font-weight-bold'>ORDER SUMMARY</h6>
                    {getallcartItem ? getallcartItem : null}
                    <div className='addmore'>
                      <Link className='addmoreza' to="/merching">Add More</Link>
                    </div>
                   
                    {/* <div className="row rowContainer ptb20 my-2">

                      <div className="col-lg-4 col-md-2 col-4 pl-0">
                        <div className="img-container-div2">
                          <img src="merch/hoodie.png" alt="metamasklogo" className='img-fluid' />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-10 col-8 pr-0 pl-0">
                        <div className="content-container-div2">
                          <h6 className='font-weight-bold'>Driven trading t shirt</h6>
                          <div className="counter-size-div">
                            <div className="div">
                              <p className='my-2'>SIZE: <span className='common'>XL</span> </p>
                              <p className="common">$90.00$</p>
                            </div>
                            <div className='counter-div'>
                              <span>-</span>
                              <span>1</span>
                              <span>+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="row rowContainer ptb20 my-2">

                      <div className="col-lg-4 col-md-2 col-4 pl-0">
                        <div className="img-container-div2">
                          <img src="merch/hoodie.png" alt="metamasklogo" className='img-fluid' />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-10 col-8 pr-0 pl-0">
                        <div className="content-container-div2">
                          <h6 className='font-weight-bold'>Driven trading t shirt</h6>
                          <div className="counter-size-div">
                            <div className="div">
                              <p className='my-2'>SIZE: <span className='common'>XL</span> </p>
                              <p className="common">$90.00$</p>
                            </div>
                            <div className='counter-div'>
                              <span>-</span>
                              <span>1</span>
                              <span>+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="row rowContainer ptb20">
                      <div className="col-12 px-0">
                        <div className="d-flex justify-content-between">
                          <p>SUBTOTAL</p>
                          <p className='common'>${Tprice}</p>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                          <p>10% DISCOUNT</p>
                          <p className='common'>{discount ? discount.toFixed(0) : 0}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>SHIPPING</p>
                          <p className='common'>${shipping ? shipping : 0}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 px-0">
                        <div className="d-flex justify-content-between my-3">
                          <p>TOTAL</p>
                          <p className='common'>${grandtotal ? grandtotal.toFixed(0) : 0}</p>
                        </div>
                        <button type='button' onClick={checkoutProduct} className="btn-common-2 w-100 text-uppercase">
                          checkout
                        </button>
                        <div className="d-flex align-items-baseline  my-3">
                          <input type="checkbox" name="" id="" />
                          <p className='ml-2'>by confirming, i accept the <a href="" className='common'>terms of the user agreement</a> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="fotter-hide-top">
        <Footer />
      </div>
    </>
  )
}

export default Checkout