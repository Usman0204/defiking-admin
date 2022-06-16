// import logo from './logo.svg';
import '../../App.scss';
import Navbar from './header/Navbar.js';
import Banner from './main-banner/Banner.js';
import About from './aboutus/About.js';
import Features from './features/Features.js';
import Roadmap from './roadmap/Roadmap.js';
import Faqs from './faqs/Faqs.js';
import Footer from './footer/Footer.js';
import Community from './robotcollection/RobotCollection.js';
import Xenoverse from './unlishtherobot/UnlishRobot.js';
import Common from '../common/Common';


function Landing() {
  return (
    <>
       <Navbar/>
       <Banner/>
       <Xenoverse/>
       <Community/>
       <About/>
       {/* <Features/> */}
       <Common/>
       <Roadmap/>
       {/* <Faqs/> */}
       <Footer/>
    </>
  );
}

export default Landing;