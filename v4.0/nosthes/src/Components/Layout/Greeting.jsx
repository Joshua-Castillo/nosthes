import React, { Fragment } from 'react';
import Background from '../photos/new_background.png';



const Greeting = (props) => {
    return (
        <Fragment>
            <style type="text/css">
                {`
                    @media (min-width: 600px) {
                        .maxWidth {
                            width: 50rem;
                        }
                    }
                `}
            </style>
            <div className="card overflow-hidden border-0 rounded-0 text-center container maxWidth">
                <img src={Background} className="card-img rounded-0 img-fluid" alt="" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-6">
                            <h5 className="card-title text-uppercase text-center fw-bold">montreal's pioneers in authentic taiwanese tea</h5>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 px-md-3 py-5">
                <h6 className="text-center fw-bold fw-lighter">qualiTEA only.</h6>
                <div className="border-top"></div>
                <p className="text-center fw-light">committed to continuously provide quality products that add a bit fun and mix a little flavor in your life </p>

            </div>
        </Fragment >
    );
};

export default Greeting;