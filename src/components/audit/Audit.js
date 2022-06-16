import React from 'react';
import Footer from '../landing/footer/Footer';
import Navbar from '../landing/header/Navbar';
import './audit.scss';
const Audit = () => {
    return (
        <>
            <Navbar />
            <section className="main-audit ptb">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className=" text-center">
                                <h1 className="white ptb">Audit in Progress</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Audit;
