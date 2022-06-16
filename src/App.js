import React from 'react';
import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './components/landing/header/Navbar.js';
import Audit from "./components/audit/Audit.js";
import Support from "./components/support/Support.js";
import useEagerConnect from './hooks/useEagerConnect'
import Merch from './components/merch/Merch';
import Checkout from './components/checkout/Checkout';
import NftPerks from './components/nftperks/NftPerks';
import CartData from './components/merch/CartData';
import { setproducts } from './redux/action/ProductActios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import Mint from './components/mint/Mint';
function App() {
  const getcartItem=useSelector(state=>state.allProducts.products);
  console.log('all product =======',getcartItem)
  const dispatch=useDispatch();
  const fetchProducts = ()=>{
      dispatch(setproducts(CartData));
  }
React.useEffect(() => {
fetchProducts();
},[CartData]);
  // useEagerConnect()
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Audit/> */}
        <Switch>
          <Route exact path='/' component={Mint} />
          {/* <Route exact path='/audit' component={Audit} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/nftperks' component={NftPerks} />
          <Route exact path='/merching' component={Merch} /> */}
          <Route exact path='/minting' component={Mint} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
