import React, { Fragment } from 'react';
import Background from './../photos/new_background.png';



const Greeting_Fr = (props) => {
    return (
        <Fragment>
            <div class="card overflow-hidden border-0 rounded-0 text-center container">
                <img src={Background} class="card-img rounded-0 img-fluid" alt="" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="row">
                        <div class="col-6">
                            <h5 class="card-title text-uppercase text-center fw-bold">LES PIONNIÈRES DU THÉ TAÏWANNAISE AUTHENTIQUE À MONTRÉAL</h5>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container px-4 px-md-3 py-5">
                <h6 class="text-center fw-bold fw-lighter">rien que de la qualiTHÉ.</h6>
                <div className="border-top"></div>
                <p class="text-center fw-light">engager à fournir en permanence des produits de qualité qui ajoutent du plaisir et de la saveur à votre vie</p>

            </div>



        </Fragment >
    );
};

export default Greeting_Fr;